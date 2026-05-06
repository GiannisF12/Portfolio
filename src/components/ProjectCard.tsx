"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import type { Project } from "@/lib/types";
import { iconFor } from "@/lib/tech-icons";

export default function ProjectCard({
  project,
  delayMs = 0,
  priority = false,
}: {
  project: Project;
  delayMs?: number;
  priority?: boolean;
}) {
  const cardRef = useRef<HTMLElement | null>(null);
  const [lit, setLit] = useState(false);

  const onMove = (e: React.MouseEvent) => {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transition = "box-shadow 0.3s ease, border-color 0.3s ease";
    el.style.transform = `perspective(800px) rotateY(${x * 10}deg) rotateX(${
      -y * 10
    }deg) translateZ(6px)`;
  };

  const onEnter = () => setLit(true);
  const onLeave = () => {
    const el = cardRef.current;
    if (el) {
      el.style.transition =
        "transform 0.55s cubic-bezier(.2,.8,.2,1), box-shadow 0.4s ease, border-color 0.4s ease";
      el.style.transform =
        "perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0)";
    }
    setLit(false);
  };

  return (
    <article
      ref={cardRef}
      data-interactive
      className={`rise group relative flex flex-col overflow-hidden rounded-lg border bg-[#080808] will-change-transform ${
        lit ? "lit" : ""
      }`}
      style={{
        animationDelay: `${delayMs}ms`,
        borderColor: lit ? "rgba(255,255,255,0.12)" : "var(--line)",
        boxShadow: lit ? "0 16px 40px -16px rgba(0,0,0,0.8)" : "none",
        transform: "perspective(800px) rotateX(0deg) rotateY(0deg)",
        transformStyle: "preserve-3d",
        transition:
          "transform 0.5s cubic-bezier(.2,.8,.2,1), border-color 0.4s ease, box-shadow 0.4s ease",
      }}
      onMouseMove={onMove}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      {/* screenshot */}
      <div className="relative aspect-[16/10] flex-shrink-0 overflow-hidden border-b border-[var(--line)] bg-[#0b0b0b]">
        {project.images && project.images.length > 1 ? (
          <div
            className="absolute inset-0 grid h-full w-full"
            style={{
              gridTemplateColumns: `repeat(${project.images.length}, 1fr)`,
              gap: "1px",
              background: "rgba(0,212,255,0.18)",
            }}
          >
            {project.images.map((src, i) => (
              <div key={i} className="relative overflow-hidden">
                <Image
                  src={src}
                  alt={`${project.title} (${i + 1})`}
                  fill
                  priority={priority && i === 0}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
                  className="object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-100"
                />
              </div>
            ))}
          </div>
        ) : project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority={priority}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-100"
          />
        ) : null}
        {/* shimmer sweep */}
        <span className="shimmer" aria-hidden="true" />
      </div>

      {/* body */}
      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-baseline justify-between gap-2.5">
          <h2
            className={`text-base font-bold tracking-tight transition-colors ${
              lit ? "text-white" : "text-[var(--text)]"
            }`}
            style={{ fontFamily: "var(--font-syne)" }}
          >
            {project.title}
          </h2>
          <span className="shrink-0 font-mono text-[11px] text-[var(--dim)] text-cyan-400/80">
            {project.year}
          </span>
        </div>

        <p className="text-[13px] leading-snug text-[var(--mute)]">
          {project.description}
        </p>

        <div className="mt-1 flex flex-wrap gap-1.5">
          {project.tech.map((t) => {
            const icon = iconFor(t);
            return (
              <span
                key={t}
                className={`inline-flex items-center gap-1.5 rounded border px-2 py-0.5 font-mono text-[10px] transition-colors ${
                  lit
                    ? "border-[rgba(0,212,255,0.2)] text-[rgba(0,212,255,0.7)]"
                    : "border-[var(--dim)] text-[var(--mute)]"
                }`}
              >
                {icon && (
                  <Image
                    src={icon}
                    alt=""
                    width={11}
                    height={11}
                    aria-hidden="true"
                    className="h-[11px] w-[11px] shrink-0 object-contain"
                  />
                )}
                <span>{t}</span>
              </span>
            );
          })}
          {project.role && (
            <span
              className="inline-flex items-center rounded border px-2 py-0.5 font-mono text-[10px]"
              style={{
                color: "var(--c)",
                borderColor: "rgba(0,212,255,0.3)",
              }}
            >
              {project.role}
            </span>
          )}
        </div>

        <div className="mt-auto flex items-center gap-3 border-t border-[var(--line)] pt-3 font-mono text-[12px] tracking-wider">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 items-center gap-1.5 rounded border px-4 transition-colors"
              style={{
                color: "var(--c)",
                borderColor: "rgba(0,212,255,0.35)",
                background: "var(--c3)",
              }}
            >
              Live →
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} on GitHub`}
              className="ml-auto inline-flex h-9 w-9 items-center justify-center rounded border border-[var(--line2)] transition-colors hover:border-[var(--c)]"
            >
              <Image
                src="/svg/github-alt-white.svg"
                alt=""
                width={18}
                height={18}
                aria-hidden="true"
                className="h-[18px] w-[18px] object-contain"
              />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
