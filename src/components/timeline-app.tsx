import { useEffect, useRef, useState, type MouseEvent, type ReactNode } from "react";
import { Pause, Play, RotateCcw } from "lucide-react";
import { EVENTS, type TimelineEvent } from "@/data/timeline";

const DRIFT = [
  "π", "θ", "φ", "∞", "∑", "∫", "√", "∆", "ℵ", "∂", "∇", "∅",
  "e", "i", "0", "1", "2", "3", "e^{iπ}", "√2", "γ", "λ", "μ", "σ",
];

const MILESTONES = [
  { at: 0, mark: "0" },
  { at: 14, mark: "1" },
  { at: 28, mark: "√2" },
  { at: 42, mark: "e" },
  { at: 56, mark: "π" },
  { at: 70, mark: "φ" },
  { at: 84, mark: "i" },
  { at: 100, mark: "∞" },
];

function wikiParts(text: string): ReactNode[] {
  const re = /\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g;
  const nodes: ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) nodes.push(text.slice(last, m.index));
    nodes.push(
      <a key={i++} href={m[2]} target="_blank" rel="noreferrer" className="font-medium">
        {m[1]}
      </a>,
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

function Card({ event }: { event: TimelineEvent }) {
  return (
    <article className="era-card">
      <p className="mb-0.5 font-sans text-[0.68rem] font-medium tracking-wide text-cyan tabular-nums">
        {event.year}
      </p>
      <h2 className="font-display text-[0.92rem] font-medium leading-snug text-gold text-balance">
        <a href={event.wiki} target="_blank" rel="noreferrer" className="text-gold hover:text-cyan">
          {event.title}
        </a>
      </h2>
      <p className="mt-1.5 text-[0.78rem] leading-snug text-fg/90 text-pretty">{wikiParts(event.text)}</p>
      {event.formula ? (
        <p className="mt-1.5 rounded-sm border-l-2 border-cyan bg-cyan/10 px-2 py-1 font-sans text-[0.72rem] text-cyan">
          {event.formula}
        </p>
      ) : null}
    </article>
  );
}

function Stars() {
  const stars = Array.from({ length: 56 }, (_, i) => ({
    i,
    left: `${(i * 17) % 100}%`,
    top: `${(i * 31) % 100}%`,
    delay: `${(i % 7) * 0.4}s`,
  }));
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {stars.map((s) => (
        <span key={s.i} className="star" style={{ left: s.left, top: s.top, animationDelay: s.delay }} />
      ))}
    </div>
  );
}

function FloatSymbols() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {DRIFT.map((sym, i) => (
        <span
          key={`${sym}-${i}`}
          className="float-sym"
          style={{
            left: `${4 + ((i * 37) % 92)}%`,
            top: `${8 + ((i * 23) % 78)}%`,
            fontSize: `${0.85 + (i % 5) * 0.22}rem`,
            animationDelay: `${(i * 0.47) % 8}s`,
            animationDuration: `${10 + (i % 6)}s`,
          }}
        >
          {sym}
        </span>
      ))}
    </div>
  );
}

function ProgressTrail({ progress }: { progress: number }) {
  return (
    <div className="progress-trail" aria-hidden>
      {MILESTONES.map((m, i) => {
        const reached = progress >= m.at - 0.5;
        const current =
          progress >= m.at - 0.5 && (i === MILESTONES.length - 1 || progress < MILESTONES[i + 1].at);
        return (
          <span key={m.mark} className={`progress-mark${reached ? " on" : ""}${current ? " now" : ""}`}>
            {m.mark}
          </span>
        );
      })}
    </div>
  );
}

export function TimelineApp() {
  const scroller = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const drag = useRef<{ x: number; left: number } | null>(null);

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    const onScroll = () => {
      const max = el.scrollWidth - el.clientWidth;
      setProgress(max > 0 ? (el.scrollLeft / max) * 100 : 0);
    };
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) >= Math.abs(e.deltaX)) {
        e.preventDefault();
        el.scrollLeft += e.deltaY + e.deltaX;
      }
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    el.addEventListener("wheel", onWheel, { passive: false });
    onScroll();
    return () => {
      el.removeEventListener("scroll", onScroll);
      el.removeEventListener("wheel", onWheel);
    };
  }, []);

  useEffect(() => {
    if (!playing) return;
    let raf = 0;
    const tick = () => {
      const el = scroller.current;
      if (!el) return;
      el.scrollLeft += 1.6;
      if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 2) {
        setPlaying(false);
        return;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [playing]);

  const onDown = (e: MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest("a,button")) return;
    drag.current = { x: e.pageX, left: scroller.current?.scrollLeft ?? 0 };
  };
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!drag.current || !scroller.current) return;
    scroller.current.scrollLeft = drag.current.left - (e.pageX - drag.current.x);
  };
  const onUp = () => {
    drag.current = null;
  };

  const restart = () => {
    setPlaying(false);
    scroller.current?.scrollTo({ left: 0, behavior: "smooth" });
  };

  return (
    <div className="relative h-svh min-h-full w-full overflow-hidden bg-bg text-fg">
      <Stars />
      <header className="pointer-events-none absolute inset-x-0 top-0 z-20 flex items-center justify-between gap-3 bg-gradient-to-b from-bg to-transparent px-4 py-3 sm:px-6">
        <p className="pointer-events-auto font-display text-sm font-medium tracking-wide text-gold sm:text-base">
          ∞ HISTORY OF <span className="text-cyan">MATHEMATICS</span>
        </p>
        <div className="pointer-events-auto flex items-center gap-2">
          <button
            type="button"
            onClick={() => setPlaying((p) => !p)}
            className="inline-flex h-10 items-center gap-1.5 rounded-md border border-gold/70 bg-gold/10 px-3 text-xs font-medium text-gold hover:bg-gold hover:text-bg"
          >
            {playing ? <Pause className="size-3.5" /> : <Play className="size-3.5" />}
            {playing ? "Pause" : "Auto Scroll"}
          </button>
          <button
            type="button"
            onClick={restart}
            className="inline-flex h-10 items-center gap-1.5 rounded-md border border-gold/70 bg-gold/10 px-3 text-xs font-medium text-gold hover:bg-gold hover:text-bg"
          >
            <RotateCcw className="size-3.5" />
            Restart
          </button>
        </div>
      </header>

      <div
        ref={scroller}
        className="timeline-scroller relative z-10"
        onMouseDown={onDown}
        onMouseMove={onMove}
        onMouseUp={onUp}
        onMouseLeave={onUp}
      >
        <div className="timeline-track">
          <div className="timeline-rail" />
          <FloatSymbols />

          <section className="timeline-panel">
            <div className="timeline-panel-copy">
              <h1 className="font-display text-[1.55rem] leading-tight text-gold text-balance sm:text-[1.8rem]">
                The Infinite Journey
              </h1>
              <p className="mt-1.5 text-[0.78rem] italic text-muted">From tally marks to the edge of infinity</p>
              <p className="mt-2 text-[0.78rem] leading-snug text-fg/90 text-pretty">
                Scroll sideways through sixty stations of mathematical thought. Names open a deeper article.
                Cards sit strictly above or below the gold spine.
              </p>
              <p className="mt-2 font-sans text-[0.72rem] text-cyan">→ Wheel, drag, or Auto Scroll →</p>
            </div>
            <div className="timeline-spine">
              <span className="timeline-dot hot" />
            </div>
            <div />
          </section>

          {EVENTS.map((event, i) => {
            const up = i % 2 === 0;
            return (
              <div key={event.id} className="timeline-col">
                <div className="timeline-slot up">{up ? <Card event={event} /> : null}</div>
                <div className="timeline-spine">
                  <span className={event.highlight ? "timeline-dot hot" : "timeline-dot"} />
                </div>
                <div className="timeline-slot down">{up ? null : <Card event={event} />}</div>
              </div>
            );
          })}

          <section className="timeline-panel">
            <div />
            <div className="timeline-spine">
              <span className="timeline-dot hot" />
            </div>
            <div className="timeline-panel-copy down">
              <h2 className="font-display text-lg text-gold text-balance">The story never ends</h2>
              <p className="mt-2 text-[0.78rem] leading-snug text-fg/90 text-pretty">
                {wikiParts(
                  "[Zero](https://en.wikipedia.org/wiki/0) made calculation universal. [π](https://en.wikipedia.org/wiki/Pi) tied the circle to the infinite. [Calculus](https://en.wikipedia.org/wiki/Calculus) named change. Scroll back — every card is a door.",
                )}
              </p>
            </div>
          </section>
        </div>
      </div>

      <ProgressTrail progress={progress} />
    </div>
  );
}
