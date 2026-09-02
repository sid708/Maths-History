import { createFileRoute } from "@tanstack/react-router";
import { TimelineApp } from "@/components/timeline-app";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <TimelineApp />;
}
