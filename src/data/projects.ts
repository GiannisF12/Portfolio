import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "nextjs-springboot-eshop",
    title: "Next.js × Spring Boot E-shop",
    description:
      "Full-stack e-commerce platform with decoupled architecture, role-based auth, product variants, and an admin dashboard.",
    image: "/projects/placeholder-1.png",
    tech: ["Next.js", "Spring Boot", "TypeScript", "Java", "PostgreSQL", "Docker"],
    year: 2025,
    type: "personal",
    github: "https://github.com/GiannisF12/nextjs-springboot-eshop",
  },
  {
    slug: "project-two",
    title: "Project Two",
    description: "Another personal project — replace with your real description.",
    image: "/projects/placeholder-2.png",
    tech: ["React", "Node.js", "PostgreSQL"],
    year: 2024,
    type: "personal",
    github: "https://github.com/GiannisF12",
  },
  {
    slug: "client-project",
    title: "Client Project",
    description: "A paid client engagement — describe the problem you solved.",
    image: "/projects/placeholder-3.png",
    tech: ["React", "Express", "MongoDB"],
    year: 2024,
    role: "Full-stack Developer",
    type: "client",
    github: "https://github.com/GiannisF12",
    live: "https://example.com",
  },
];
