import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ExternalLink, i as Pause, n as RotateCcw, r as Play } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BgCpvYob.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var W = "https://en.wikipedia.org/wiki/";
var EVENTS = [
	{
		id: "blombos",
		year: "~70,000 BCE",
		title: "Blombos Cave patterns",
		wiki: `${W}Blombos_Cave`,
		text: "Ochre plaques in [Blombos Cave](https://en.wikipedia.org/wiki/Blombos_Cave) carry cross-hatch geometry — among the oldest deliberate patterns we know."
	},
	{
		id: "lebombo",
		year: "~35,000 BCE",
		title: "Lebombo bone",
		wiki: `${W}Lebombo_bone`,
		text: "The [Lebombo bone](https://en.wikipedia.org/wiki/Lebombo_bone) from Eswatini is notched in a sequence often read as an early tally or lunar count."
	},
	{
		id: "ishango",
		year: "~20,000 BCE",
		title: "Ishango bone",
		wiki: `${W}Ishango_bone`,
		text: "The [Ishango bone](https://en.wikipedia.org/wiki/Ishango_bone) from the Congo shows grouped notches. Some see primes or doubling; all agree humans were quantifying."
	},
	{
		id: "sumer",
		year: "~3400 BCE",
		title: "Sumerian numerals",
		wiki: `${W}Sumer#Mathematics_and_accounting`,
		text: "[Sumer](https://en.wikipedia.org/wiki/Sumer) invents a written [numeral system](https://en.wikipedia.org/wiki/Numeral_system) and standard weights — accounting becomes mathematics."
	},
	{
		id: "egypt-num",
		year: "~3100 BCE",
		title: "Egyptian decimal signs",
		wiki: `${W}Egyptian_numerals`,
		text: "[Egyptian numerals](https://en.wikipedia.org/wiki/Egyptian_numerals) use new hieroglyphs for each power of ten, allowing arbitrarily large counts."
	},
	{
		id: "sexagesimal",
		year: "~2000 BCE",
		title: "Base-60 place value",
		wiki: `${W}Sexagesimal`,
		text: "Babylonian [sexagesimal](https://en.wikipedia.org/wiki/Sexagesimal) place-value is why hours have 60 minutes and circles 360 degrees."
	},
	{
		id: "plimpton",
		year: "~1800 BCE",
		title: "Plimpton 322",
		wiki: `${W}Plimpton_322`,
		text: "[Plimpton 322](https://en.wikipedia.org/wiki/Plimpton_322) lists [Pythagorean triples](https://en.wikipedia.org/wiki/Pythagorean_triple) a millennium before Pythagoras."
	},
	{
		id: "rhind",
		year: "~1650 BCE",
		title: "Rhind Mathematical Papyrus",
		wiki: `${W}Rhind_Mathematical_Papyrus`,
		text: "The [Rhind Papyrus](https://en.wikipedia.org/wiki/Rhind_Mathematical_Papyrus) trains scribes in fractions, areas, and volumes. Egypt takes π ≈ 256/81.",
		formula: "Egyptian π ≈ 3.1605"
	},
	{
		id: "moscow",
		year: "~1850 BCE",
		title: "Moscow Mathematical Papyrus",
		wiki: `${W}Moscow_Mathematical_Papyrus`,
		text: "The [Moscow Papyrus](https://en.wikipedia.org/wiki/Moscow_Mathematical_Papyrus) includes a correct formula for the volume of a truncated pyramid."
	},
	{
		id: "sulba",
		year: "~800 BCE",
		title: "Śulba Sūtras",
		wiki: `${W}Shulba_Sutras`,
		text: "The [Śulba Sūtras](https://en.wikipedia.org/wiki/Shulba_Sutras) give altar geometry, √2 to several places, and the Pythagorean relation in India."
	},
	{
		id: "thales",
		year: "~585 BCE",
		title: "Thales of Miletus",
		wiki: `${W}Thales_of_Miletus`,
		text: "[Thales](https://en.wikipedia.org/wiki/Thales_of_Miletus) is credited with the first Greek geometric proofs — deduction instead of mere measuring."
	},
	{
		id: "pythagoras",
		year: "~530 BCE",
		title: "Pythagoras",
		wiki: `${W}Pythagoras`,
		text: "[Pythagoras](https://en.wikipedia.org/wiki/Pythagoras) and his school treat number as cosmos. The theorem is older; the proof culture is new.",
		formula: "a² + b² = c²"
	},
	{
		id: "hippasus",
		year: "~450 BCE",
		title: "Irrational √2",
		wiki: `${W}Hippasus`,
		text: "[Hippasus](https://en.wikipedia.org/wiki/Hippasus) is tied to the shock that √2 is [irrational](https://en.wikipedia.org/wiki/Irrational_number) — not a ratio of integers."
	},
	{
		id: "zeno",
		year: "~450 BCE",
		title: "Zeno’s paradoxes",
		wiki: `${W}Zeno%27s_paradoxes`,
		text: "[Zeno](https://en.wikipedia.org/wiki/Zeno_of_Elea) splits motion into infinite steps. The riddles wait on limits and [calculus](https://en.wikipedia.org/wiki/Calculus)."
	},
	{
		id: "euclid",
		year: "~300 BCE",
		title: "Euclid’s Elements",
		wiki: `${W}Euclid%27s_Elements`,
		text: "[Euclid](https://en.wikipedia.org/wiki/Euclid) axiomatizes geometry. He proves infinitely many [primes](https://en.wikipedia.org/wiki/Prime_number) and records the Euclidean algorithm.",
		highlight: true
	},
	{
		id: "pingala",
		year: "~300 BCE",
		title: "Pingala’s combinatorics",
		wiki: `${W}Pingala`,
		text: "[Pingala](https://en.wikipedia.org/wiki/Pingala) writes on meter: binary-like patterns, combinatorics, and sequences later linked to Fibonacci."
	},
	{
		id: "archimedes",
		year: "~250 BCE",
		title: "Archimedes and π",
		wiki: `${W}Archimedes`,
		text: "[Archimedes](https://en.wikipedia.org/wiki/Archimedes) uses exhaustion to trap [π](https://en.wikipedia.org/wiki/Pi) between 223/71 and 22/7, and proves area = πr².",
		formula: "3.1408 < π < 3.1429",
		highlight: true
	},
	{
		id: "eratosthenes",
		year: "~240 BCE",
		title: "Sieve of Eratosthenes",
		wiki: `${W}Sieve_of_Eratosthenes`,
		text: "[Eratosthenes](https://en.wikipedia.org/wiki/Eratosthenes) sieves primes and measures Earth’s circumference with geometry and a shadow."
	},
	{
		id: "apollonius",
		year: "~200 BCE",
		title: "Apollonius on conics",
		wiki: `${W}Apollonius_of_Perga`,
		text: "[Apollonius of Perga](https://en.wikipedia.org/wiki/Apollonius_of_Perga) names ellipse, parabola, hyperbola and maps their properties."
	},
	{
		id: "hipparchus",
		year: "~150 BCE",
		title: "Hipparchus’ chords",
		wiki: `${W}Hipparchus`,
		text: "[Hipparchus](https://en.wikipedia.org/wiki/Hipparchus) builds chord tables — the seed of [trigonometry](https://en.wikipedia.org/wiki/Trigonometry)."
	},
	{
		id: "nine-chapters",
		year: "~100 CE",
		title: "Nine Chapters",
		wiki: `${W}The_Nine_Chapters_on_the_Mathematical_Art`,
		text: "China’s [Nine Chapters](https://en.wikipedia.org/wiki/The_Nine_Chapters_on_the_Mathematical_Art) solve linear systems in a style close to Gaussian elimination."
	},
	{
		id: "ptolemy",
		year: "~150 CE",
		title: "Ptolemy’s Almagest",
		wiki: `${W}Almagest`,
		text: "[Ptolemy](https://en.wikipedia.org/wiki/Ptolemy) packages Greek astronomy and a chord table that Europe and Islam will reuse for centuries."
	},
	{
		id: "diophantus",
		year: "~250 CE",
		title: "Diophantus",
		wiki: `${W}Diophantus`,
		text: "[Diophantus](https://en.wikipedia.org/wiki/Diophantus) writes *Arithmetica* — syncopated algebra and integer solutions later called Diophantine."
	},
	{
		id: "liuhui",
		year: "263 CE",
		title: "Liu Hui on π",
		wiki: `${W}Liu_Hui`,
		text: "[Liu Hui](https://en.wikipedia.org/wiki/Liu_Hui) comments the Nine Chapters and pushes π to 3.1416 with a 192-gon."
	},
	{
		id: "hypatia",
		year: "~400 CE",
		title: "Hypatia of Alexandria",
		wiki: `${W}Hypatia`,
		text: "[Hypatia](https://en.wikipedia.org/wiki/Hypatia) teaches Neoplatonist mathematics and astronomy — the first woman named in the mathematical record."
	},
	{
		id: "zuchongzhi",
		year: "~480 CE",
		title: "Zu Chongzhi’s π",
		wiki: `${W}Zu_Chongzhi`,
		text: "[Zu Chongzhi](https://en.wikipedia.org/wiki/Zu_Chongzhi) gives 355/113, locking [π](https://en.wikipedia.org/wiki/Pi) to seven decimals for nearly a millennium.",
		formula: "355/113 ≈ 3.1415929",
		highlight: true
	},
	{
		id: "aryabhata",
		year: "499 CE",
		title: "Aryabhata",
		wiki: `${W}Aryabhata`,
		text: "[Aryabhata](https://en.wikipedia.org/wiki/Aryabhata) states π ≈ 3.1416, builds sine tables, and treats Earth as rotating.",
		formula: "π ≈ 62832/20000"
	},
	{
		id: "brahmagupta",
		year: "628 CE",
		title: "Brahmagupta and zero",
		wiki: `${W}Brahmagupta`,
		text: "[Brahmagupta](https://en.wikipedia.org/wiki/Brahmagupta) writes arithmetic for [zero](https://en.wikipedia.org/wiki/0) and negatives, plus a cyclic-quadrilateral area rule.",
		highlight: true
	},
	{
		id: "gwalior",
		year: "876 CE",
		title: "A carved zero",
		wiki: `${W}0#History`,
		text: "A temple inscription at [Gwalior](https://en.wikipedia.org/wiki/Gwalior) uses a true decimal [zero](https://en.wikipedia.org/wiki/0) as a digit, not just a blank.",
		highlight: true
	},
	{
		id: "khwarizmi",
		year: "~820 CE",
		title: "al-Khwārizmī’s algebra",
		wiki: `${W}Muhammad_ibn_Musa_al-Khwarizmi`,
		text: "[al-Khwārizmī](https://en.wikipedia.org/wiki/Muhammad_ibn_Musa_al-Khwarizmi) names [algebra](https://en.wikipedia.org/wiki/Algebra). His latinized name becomes *algorithm*."
	},
	{
		id: "alhazen",
		year: "~1020",
		title: "Ibn al-Haytham",
		wiki: `${W}Ibn_al-Haytham`,
		text: "[Ibn al-Haytham](https://en.wikipedia.org/wiki/Ibn_al-Haytham) (Alhazen) brings geometry to optics and early infinitesimal arguments."
	},
	{
		id: "khayyam",
		year: "~1070",
		title: "Omar Khayyam",
		wiki: `${W}Omar_Khayyam`,
		text: "[Omar Khayyam](https://en.wikipedia.org/wiki/Omar_Khayyam) classifies cubic equations and solves them with intersecting conics."
	},
	{
		id: "bhaskara",
		year: "1150",
		title: "Bhāskara II",
		wiki: `${W}Bh%C4%81skara_II`,
		text: "[Bhāskara II](https://en.wikipedia.org/wiki/Bh%C4%81skara_II) treats division by zero, cyclic method for Pell equations, and early derivative ideas."
	},
	{
		id: "fibonacci",
		year: "1202",
		title: "Fibonacci’s Liber Abaci",
		wiki: `${W}Fibonacci`,
		text: "[Fibonacci](https://en.wikipedia.org/wiki/Fibonacci) brings Hindu–Arabic digits, including zero, to Europe — and the rabbit sequence.",
		formula: "1, 1, 2, 3, 5, 8, 13, …"
	},
	{
		id: "madhava",
		year: "~1400",
		title: "Mādhava of Sangamagrāma",
		wiki: `${W}Madhava_of_Sangamagrama`,
		text: "The [Kerala school](https://en.wikipedia.org/wiki/Kerala_school_of_astronomy_and_mathematics) finds infinite series for π, sine, and arctan — calculus before Europe.",
		highlight: true
	},
	{
		id: "alkashi",
		year: "1424",
		title: "al-Kāshī’s decimals",
		wiki: `${W}Jamshid_al-Kashi`,
		text: "[al-Kāshī](https://en.wikipedia.org/wiki/Jamshid_al-Kashi) computes π to 16 decimals and champions [decimal fractions](https://en.wikipedia.org/wiki/Decimal)."
	},
	{
		id: "printed-euclid",
		year: "1482",
		title: "Euclid in print",
		wiki: `${W}Euclid%27s_Elements`,
		text: "The first printed [Elements](https://en.wikipedia.org/wiki/Euclid%27s_Elements) (Venice) makes Greek geometry a European textbook for centuries."
	},
	{
		id: "cardano",
		year: "1545",
		title: "Cardano’s Ars Magna",
		wiki: `${W}Gerolamo_Cardano`,
		text: "[Cardano](https://en.wikipedia.org/wiki/Gerolamo_Cardano) publishes cubic and quartic solutions and stumbles into square roots of negatives."
	},
	{
		id: "bombelli",
		year: "1572",
		title: "Bombelli’s imaginaries",
		wiki: `${W}Rafael_Bombelli`,
		text: "[Bombelli](https://en.wikipedia.org/wiki/Rafael_Bombelli) writes the arithmetic of what become [complex numbers](https://en.wikipedia.org/wiki/Complex_number)."
	},
	{
		id: "viete",
		year: "1591",
		title: "Viète’s algebra",
		wiki: `${W}Fran%C3%A7ois_Vi%C3%A8te`,
		text: "[François Viète](https://en.wikipedia.org/wiki/Fran%C3%A7ois_Vi%C3%A8te) uses letters for knowns and unknowns — symbolic algebra takes hold."
	},
	{
		id: "napier",
		year: "1614",
		title: "Napier’s logarithms",
		wiki: `${W}John_Napier`,
		text: "[Napier](https://en.wikipedia.org/wiki/John_Napier) invents [logarithms](https://en.wikipedia.org/wiki/Logarithm). The constant [e](https://en.wikipedia.org/wiki/E_(mathematical_constant)) appears nearby."
	},
	{
		id: "descartes",
		year: "1637",
		title: "Descartes’ geometry",
		wiki: `${W}Ren%C3%A9_Descartes`,
		text: "[Descartes](https://en.wikipedia.org/wiki/Ren%C3%A9_Descartes) fuses algebra and geometry on the [Cartesian plane](https://en.wikipedia.org/wiki/Cartesian_coordinate_system)."
	},
	{
		id: "fermat",
		year: "1637",
		title: "Fermat’s Last Theorem",
		wiki: `${W}Fermat%27s_Last_Theorem`,
		text: "[Fermat](https://en.wikipedia.org/wiki/Pierre_de_Fermat) notes that xⁿ + yⁿ = zⁿ has no positive integers for n > 2. Proof waits 357 years."
	},
	{
		id: "pascal",
		year: "1654",
		title: "Pascal & Fermat on chance",
		wiki: `${W}Blaise_Pascal`,
		text: "[Pascal](https://en.wikipedia.org/wiki/Blaise_Pascal) and Fermat found [probability](https://en.wikipedia.org/wiki/Probability_theory) while settling a gambling dispute."
	},
	{
		id: "calculus",
		year: "1684–1687",
		title: "Invention of calculus",
		wiki: `${W}Calculus`,
		text: "[Leibniz](https://en.wikipedia.org/wiki/Gottfried_Wilhelm_Leibniz) publishes differentials; [Newton](https://en.wikipedia.org/wiki/Isaac_Newton)’s *Principia* uses fluxions to found mechanics.",
		formula: "d/dx xⁿ = n xⁿ⁻¹",
		highlight: true
	},
	{
		id: "euler-bridges",
		year: "1736",
		title: "Königsberg bridges",
		wiki: `${W}Seven_Bridges_of_K%C3%B6nigsberg`,
		text: "[Euler](https://en.wikipedia.org/wiki/Leonhard_Euler) solves the bridges and invents [graph theory](https://en.wikipedia.org/wiki/Graph_theory)."
	},
	{
		id: "euler-id",
		year: "1748",
		title: "Euler’s identity",
		wiki: `${W}Euler%27s_identity`,
		text: "[Euler](https://en.wikipedia.org/wiki/Leonhard_Euler) standardizes e, i, π, Σ, f(x) and writes the most famous compact equation in analysis.",
		formula: "e^{iπ} + 1 = 0",
		highlight: true
	},
	{
		id: "lambert",
		year: "1761",
		title: "π is irrational",
		wiki: `${W}Proof_that_%CF%80_is_irrational`,
		text: "[Lambert](https://en.wikipedia.org/wiki/Johann_Heinrich_Lambert) proves [π](https://en.wikipedia.org/wiki/Pi) is irrational — it is not a ratio of integers."
	},
	{
		id: "gauss",
		year: "1799",
		title: "Gauss & the FTA",
		wiki: `${W}Carl_Friedrich_Gauss`,
		text: "[Gauss](https://en.wikipedia.org/wiki/Carl_Friedrich_Gauss) proves the [fundamental theorem of algebra](https://en.wikipedia.org/wiki/Fundamental_theorem_of_algebra): every polynomial has a complex root."
	},
	{
		id: "noneuclid",
		year: "1820s–1830s",
		title: "Non-Euclidean geometry",
		wiki: `${W}Non-Euclidean_geometry`,
		text: "[Lobachevsky](https://en.wikipedia.org/wiki/Nikolai_Lobachevsky) and [Bolyai](https://en.wikipedia.org/wiki/J%C3%A1nos_Bolyai) drop the parallel postulate. Space need not be Euclid’s."
	},
	{
		id: "galois",
		year: "1832",
		title: "Galois theory",
		wiki: `${W}Galois_theory`,
		text: "[Évariste Galois](https://en.wikipedia.org/wiki/%C3%89variste_Galois) shows why the quintic is unsolvable by radicals and founds group theory."
	},
	{
		id: "riemann",
		year: "1854",
		title: "Riemannian geometry",
		wiki: `${W}Bernhard_Riemann`,
		text: "[Riemann](https://en.wikipedia.org/wiki/Bernhard_Riemann) generalizes curvature. The language later carries general relativity."
	},
	{
		id: "cantor",
		year: "1874",
		title: "Cantor’s infinities",
		wiki: `${W}Georg_Cantor`,
		text: "[Cantor](https://en.wikipedia.org/wiki/Georg_Cantor) proves some infinities are larger: |ℕ| < |ℝ|. [Set theory](https://en.wikipedia.org/wiki/Set_theory) is born.",
		formula: "ℵ₀ < 2^{ℵ₀}"
	},
	{
		id: "poincare",
		year: "1895",
		title: "Poincaré’s Analysis Situs",
		wiki: `${W}Henri_Poincar%C3%A9`,
		text: "[Poincaré](https://en.wikipedia.org/wiki/Henri_Poincar%C3%A9) founds algebraic [topology](https://en.wikipedia.org/wiki/Algebraic_topology) and poses the conjecture later solved by Perelman."
	},
	{
		id: "hilbert",
		year: "1900",
		title: "Hilbert’s problems",
		wiki: `${W}Hilbert%27s_problems`,
		text: "[Hilbert](https://en.wikipedia.org/wiki/David_Hilbert) sets 23 problems that steer 20th-century research from axioms to physics."
	},
	{
		id: "godel",
		year: "1931",
		title: "Gödel incompleteness",
		wiki: `${W}G%C3%B6del%27s_incompleteness_theorems`,
		text: "[Gödel](https://en.wikipedia.org/wiki/Kurt_G%C3%B6del) shows any rich formal system is incomplete — truth outruns proof."
	},
	{
		id: "turing",
		year: "1936",
		title: "Turing machines",
		wiki: `${W}Turing_machine`,
		text: "[Turing](https://en.wikipedia.org/wiki/Alan_Turing) defines mechanical computation and the [halting problem](https://en.wikipedia.org/wiki/Halting_problem)."
	},
	{
		id: "cohen",
		year: "1963",
		title: "Cohen & the continuum",
		wiki: `${W}Continuum_hypothesis`,
		text: "[Paul Cohen](https://en.wikipedia.org/wiki/Paul_Cohen) proves the continuum hypothesis is independent of standard set theory."
	},
	{
		id: "fourcolor",
		year: "1976",
		title: "Four color theorem",
		wiki: `${W}Four_color_theorem`,
		text: "Appel and Haken prove the [four color theorem](https://en.wikipedia.org/wiki/Four_color_theorem) with computer assistance — a new kind of proof."
	},
	{
		id: "wiles",
		year: "1994–95",
		title: "Wiles proves Fermat",
		wiki: `${W}Andrew_Wiles`,
		text: "[Andrew Wiles](https://en.wikipedia.org/wiki/Andrew_Wiles) proves [Fermat’s Last Theorem](https://en.wikipedia.org/wiki/Fermat%27s_Last_Theorem) via elliptic curves and modular forms."
	},
	{
		id: "perelman",
		year: "2003",
		title: "Poincaré conjecture",
		wiki: `${W}Poincar%C3%A9_conjecture`,
		text: "[Grigori Perelman](https://en.wikipedia.org/wiki/Grigori_Perelman) proves the [Poincaré conjecture](https://en.wikipedia.org/wiki/Poincar%C3%A9_conjecture) using Ricci flow — a Millennium Prize problem falls."
	}
];
var SYMBOLS = [
	"π",
	"∞",
	"∑",
	"∫",
	"√",
	"∆",
	"θ",
	"φ",
	"ℵ",
	"∂",
	"∇",
	"∅"
];
function wikiParts(text) {
	const re = /\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g;
	const nodes = [];
	let last = 0;
	let m;
	let i = 0;
	while (m = re.exec(text)) {
		if (m.index > last) nodes.push(text.slice(last, m.index));
		nodes.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: m[2],
			target: "_blank",
			rel: "noreferrer",
			className: "font-medium",
			children: m[1]
		}, i++));
		last = m.index + m[0].length;
	}
	if (last < text.length) nodes.push(text.slice(last));
	return nodes;
}
function Card({ event }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "era-card",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-0.5 font-sans text-[0.68rem] font-medium tracking-wide text-cyan tabular-nums",
				children: event.year
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-[0.92rem] font-medium leading-snug text-gold text-balance",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: event.wiki,
					target: "_blank",
					rel: "noreferrer",
					className: "text-gold hover:text-cyan",
					children: event.title
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1.5 text-[0.78rem] leading-snug text-fg/90 text-pretty",
				children: wikiParts(event.text)
			}),
			event.formula ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1.5 rounded-sm border-l-2 border-cyan bg-cyan/10 px-2 py-1 font-sans text-[0.72rem] text-cyan",
				children: event.formula
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: event.wiki,
				target: "_blank",
				rel: "noreferrer",
				className: "mt-1.5 inline-flex items-center gap-1 text-[0.68rem] text-muted hover:text-gold",
				children: ["Wikipedia ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
					className: "size-2.5",
					strokeWidth: 2
				})]
			})
		]
	});
}
function Stars() {
	const stars = Array.from({ length: 56 }, (_, i) => ({
		i,
		left: `${i * 17 % 100}%`,
		top: `${i * 31 % 100}%`,
		delay: `${i % 7 * .4}s`
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none absolute inset-0 overflow-hidden",
		"aria-hidden": true,
		children: stars.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "star",
			style: {
				left: s.left,
				top: s.top,
				animationDelay: s.delay
			}
		}, s.i))
	});
}
function FloatSymbols() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none absolute inset-0 overflow-hidden",
		"aria-hidden": true,
		children: SYMBOLS.map((sym, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "float-sym text-xl",
			style: {
				left: `${6 + i * 8 % 88}%`,
				top: `${12 + i * 13 % 70}%`,
				animationDelay: `${i * .35}s`
			},
			children: sym
		}, sym))
	});
}
function TimelineApp() {
	const scroller = (0, import_react.useRef)(null);
	const track = (0, import_react.useRef)(null);
	const [playing, setPlaying] = (0, import_react.useState)(false);
	const [progress, setProgress] = (0, import_react.useState)(0);
	const drag = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = scroller.current;
		if (!el) return;
		const onScroll = () => {
			const max = el.scrollWidth - el.clientWidth;
			setProgress(max > 0 ? el.scrollLeft / max * 100 : 0);
		};
		const onWheel = (e) => {
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
	(0, import_react.useEffect)(() => {
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
	const onDown = (e) => {
		if (e.target.closest("a,button")) return;
		drag.current = {
			x: e.pageX,
			left: scroller.current?.scrollLeft ?? 0
		};
	};
	const onMove = (e) => {
		if (!drag.current || !scroller.current) return;
		scroller.current.scrollLeft = drag.current.left - (e.pageX - drag.current.x);
	};
	const onUp = () => {
		drag.current = null;
	};
	const restart = () => {
		setPlaying(false);
		scroller.current?.scrollTo({
			left: 0,
			behavior: "smooth"
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-dvh overflow-hidden bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stars, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "pointer-events-none absolute inset-x-0 top-0 z-20 flex items-center justify-between gap-3 bg-gradient-to-b from-bg to-transparent px-4 py-3 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "pointer-events-auto font-display text-sm font-medium tracking-wide text-gold sm:text-base",
					children: ["∞ HISTORY OF ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-cyan",
						children: "MATHEMATICS"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pointer-events-auto flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setPlaying((p) => !p),
						className: "inline-flex h-10 items-center gap-1.5 rounded-md border border-gold/70 bg-gold/10 px-3 text-xs font-medium text-gold hover:bg-gold hover:text-bg",
						children: [playing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "size-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-3.5" }), playing ? "Pause" : "Auto Scroll"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: restart,
						className: "inline-flex h-10 items-center gap-1.5 rounded-md border border-gold/70 bg-gold/10 px-3 text-xs font-medium text-gold hover:bg-gold hover:text-bg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-3.5" }), "Restart"]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: scroller,
				className: "timeline-scroller relative z-10",
				onMouseDown: onDown,
				onMouseMove: onMove,
				onMouseUp: onUp,
				onMouseLeave: onUp,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					ref: track,
					className: "timeline-track",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "timeline-rail" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatSymbols, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "timeline-panel",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "timeline-panel-copy",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
											className: "font-display text-[1.55rem] leading-tight text-gold text-balance sm:text-[1.8rem]",
											children: "The Infinite Journey"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1.5 text-[0.78rem] italic text-muted",
											children: "From tally marks to the edge of infinity"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-2 text-[0.78rem] leading-snug text-fg/90 text-pretty",
											children: [
												"Scroll sideways through sixty stations of mathematical thought. Every title and highlighted name opens its",
												" ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
													href: "https://en.wikipedia.org/wiki/History_of_mathematics",
													target: "_blank",
													rel: "noreferrer",
													children: "Wikipedia"
												}),
												" ",
												"page. Cards sit strictly above or below the gold spine."
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 font-sans text-[0.72rem] text-cyan",
											children: "→ Wheel, drag, or Auto Scroll →"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "timeline-spine",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "timeline-dot hot" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {})
							]
						}),
						EVENTS.map((event, i) => {
							const up = i % 2 === 0;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "timeline-col",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "timeline-slot up",
										children: up ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { event }) : null
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "timeline-spine",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: event.highlight ? "timeline-dot hot" : "timeline-dot" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "timeline-slot down",
										children: up ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { event })
									})
								]
							}, event.id);
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "timeline-panel",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "timeline-spine",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "timeline-dot hot" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "timeline-panel-copy down",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "font-display text-lg text-gold text-balance",
										children: "The story never ends"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-[0.78rem] leading-snug text-fg/90 text-pretty",
										children: wikiParts("[Zero](https://en.wikipedia.org/wiki/0) made calculation universal. [π](https://en.wikipedia.org/wiki/Pi) tied the circle to the infinite. [Calculus](https://en.wikipedia.org/wiki/Calculus) named change. Scroll back — every card is a door.")
									})]
								})
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-x-0 bottom-0 z-20 h-1 bg-line/40",
				"aria-hidden": true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-full bg-gold",
					style: { width: `${progress}%` }
				})
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimelineApp, {});
}
//#endregion
export { Home as component };
