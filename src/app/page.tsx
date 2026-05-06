import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import { projects } from "@/data/projects";

export default function Home() {
  const personal = projects.filter((p) => p.type === "personal");
  const clients = projects.filter((p) => p.type === "client");

  return (
    <div className="relative mx-auto max-w-[1200px] px-7">
      <Nav />
      <Hero />
      <Work
        id="personal"
        heading="Personal projects"
        items={personal}
        startDelayMs={300}
        priorityFirst
      />
      <Work
        id="clients"
        heading="Client work"
        items={clients}
        emptyText="No client work to show yet — open to entry-level roles."
        startDelayMs={300 + personal.length * 70}
      />
      <footer className="relative z-10 mt-16 border-t border-[var(--line)] py-5 pb-12 font-mono text-[11px] tracking-wider text-[var(--mute)]">
        <span>© {new Date().getFullYear()} Giannis Foras</span>
      </footer>
    </div>
  );
}
