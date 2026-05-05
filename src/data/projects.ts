import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "nextjs-springboot-eshop",
    title: "Full-stack E-shop",
    description:
      "E-commerce platform with a Spring Boot REST backend and a Next.js frontend. JWT auth with role-based access, shopping cart, orders, and an admin dashboard.",
    image: "/projects/fullstack-eshop.png",
    tech: ["Next.js", "Spring Boot", "TypeScript", "Java", "PostgreSQL", "Docker"],
    year: 2025,
    type: "personal",
    github: "https://github.com/GiannisF12/nextjs-springboot-eshop",
    live: "#",
  },
  /*
  {
    slug: "spring-boot-product-platform",
    title: "Java Product Platform",
    description:
      "Two-part backend: a Java Servlet gateway and a Spring Boot REST API for full CRUD on products. Spring Security, PostgreSQL with schema init, and a Dockerised stack with PgAdmin.",
    image: "/projects/placeholder-2.png",
    tech: ["Java", "Spring Boot", "PostgreSQL", "Spring Security", "Docker"],
    year: 2025,
    type: "personal",
    github: "https://github.com/GiannisF12",
    live: "#",
  },
  */
  {
    slug: "mooc-analytics-thesis",
    title: "Big Data Analytics in MOOCs",
    description:
      "Bachelor thesis. Predictive ML models for student performance in MOOCs — Random Forest, Gradient Boosting, Logistic Regression — evaluated with ROC, MSE, R², F1.",
    image: "/projects/mooc.png",
    images: ["/projects/mooc.png", "/projects/mooc2.png"],
    tech: ["Python", "scikit-learn", "TensorFlow", "Pandas", "NumPy"],
    year: 2024,
    type: "personal",
    github: "https://github.com/GiannisF12",
    live: "#",
  },
  {
    slug: "freelance-clothing-eshop",
    title: "Clothing E-shop",
    description:
      "Responsive e-commerce site for a clothing store: user auth, shopping cart, product catalog, and an admin panel.",
    image: "/projects/clothing-eshop.png",
    tech: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
    year: 2022,
    type: "personal",
    github: "https://github.com/GiannisF12",
    live: "#",
  },
];
