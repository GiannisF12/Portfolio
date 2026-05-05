import type { Project } from "@/lib/types";
import ProjectCard from "./ProjectCard";

type Props = {
  id: string;
  heading: string;
  items: Project[];
  emptyText?: string;
  startDelayMs?: number;
};

export default function Work({
  id,
  heading,
  items,
  emptyText,
  startDelayMs = 0,
}: Props) {
  return (
    <section id={id} className="relative z-10 pt-10 sm:pt-14">
      {/* heading row */}
      <div className="flex items-baseline justify-between gap-4 border-b border-[var(--line)] pb-3">
        <h2
          className="text-lg font-bold tracking-tight text-[var(--text)]"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          {heading}
        </h2>
        <span className="font-mono text-[11px] tracking-wider text-[var(--dim)]">
          {items.length} project{items.length !== 1 ? "s" : ""}
        </span>
      </div>

      {/* grid OR empty state */}
      {items.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 pt-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p, i) => (
            <ProjectCard
              key={p.slug}
              project={p}
              delayMs={startDelayMs + i * 70}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-lg border border-dashed border-[var(--line2)] px-5 py-8 mt-5 text-center font-mono text-[12px] tracking-wider text-[var(--dim)]">
          {emptyText ?? "Nothing here yet."}
        </div>
      )}
    </section>
  );
}
