import Image from "next/image";
import type { Project } from "@/lib/types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#bef264]/20 hover:shadow-[0_0_0_1px_rgba(190,242,100,0.15),0_24px_60px_rgba(0,0,0,0.6),0_0_40px_rgba(190,242,100,0.06)]">

      {/* Image */}
      <div className="relative aspect-video w-full overflow-hidden bg-[#111]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Bottom gradient overlay */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0d0d0d] to-transparent" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base font-semibold leading-snug text-[#ededed]">
            {project.title}
          </h3>
          <span className="shrink-0 rounded-full bg-white/[0.05] px-2.5 py-0.5 font-mono text-xs text-[#555]">
            {project.year}
          </span>
        </div>

        {project.role && (
          <p className="text-xs font-medium text-[var(--accent)]">{project.role}</p>
        )}

        <p className="text-sm leading-relaxed text-[#555]">{project.description}</p>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/[0.07] bg-white/[0.04] px-2.5 py-0.5 text-xs text-[#666]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-auto flex items-center gap-3 border-t border-white/[0.06] pt-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} on GitHub`}
              className="cursor-pointer text-[#444] transition-colors duration-200 hover:text-[#ededed]"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto flex h-7 cursor-pointer items-center gap-1.5 rounded-full bg-[var(--accent)] px-3.5 text-xs font-semibold text-black transition-all duration-200 hover:shadow-[0_0_16px_rgba(190,242,100,0.5)] hover:brightness-110"
            >
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" x2="21" y1="14" y2="3" />
              </svg>
              Live
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
