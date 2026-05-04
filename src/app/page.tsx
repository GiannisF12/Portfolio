import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import { projects } from "@/data/projects";

const personal = projects.filter((p) => p.type === "personal");
const clients = projects.filter((p) => p.type === "client");

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ProjectGrid id="projects" heading="Projects" index={1} items={personal} />
        <ProjectGrid id="clients" heading="Client Work" index={2} items={clients} />
      </main>
      <footer className="border-t border-white/[0.06] py-10 text-center">
        <p className="text-sm text-[#333]">
          © {new Date().getFullYear()} Giannis Foras
        </p>
      </footer>
    </>
  );
}
