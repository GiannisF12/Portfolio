import type { Project } from "@/lib/types";
import ProjectCard from "./ProjectCard";

type Props = {
  id: string;
  heading: string;
  index: number;
  items: Project[];
};

export default function ProjectGrid({ id, heading, index, items }: Props) {
  if (items.length === 0) return null;

  const num = String(index).padStart(2, "0");

  return (
    <section id={id} className="mx-auto max-w-[1100px] px-6 py-24">
      {/* Editorial heading */}
      <div className="mb-12 flex items-center gap-5">
        <span className="font-mono text-xs text-[var(--accent)] opacity-60">{num}</span>
        <h2 className="text-2xl font-bold tracking-tight text-[#ededed]">{heading}</h2>
        <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
