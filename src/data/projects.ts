import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "nextjs-springboot-eshop",
    title: "Full-stack E-shop",
    description:
      "E-commerce platform with a Spring Boot REST backend and a Next.js frontend. JWT auth with role-based access, shopping cart, orders, and an admin dashboard.",
    image: "/projects/fullstack-eshop.jpg",
    tech: ["Next.js", "Spring Boot", "TypeScript", "Java", "PostgreSQL", "Docker"],
    year: 2026,
    type: "personal",
    github: "https://github.com/GiannisF12/nextjs-springboot-eshop",
    live: "https://eshop.giannisf12.dev/",
  },
  {
    slug: "mooc-analytics-thesis",
    title: "Big Data Analytics in MOOCs",
    description:
      "Bachelor thesis. Predictive ML models for student performance in MOOCs — Random Forest, Gradient Boosting, Logistic Regression — evaluated with ROC, MSE, R², F1.",
    image: "/projects/mooc.jpg",
    images: ["/projects/mooc.jpg", "/projects/mooc2.jpg"],
    tech: ["Python", "scikit-learn", "TensorFlow", "Pandas", "NumPy"],
    year: 2024,
    type: "personal",
    github: "https://github.com/GiannisF12/Thesis-Big-Data-Analytics-in-MOOCs",
  },
  {
    slug: "freelance-clothing-eshop",
    title: "Clothing E-shop",
    description:
      "Responsive e-commerce site for a clothing store: user auth, shopping cart, product catalog, and an admin panel.",
    image: "/projects/clothing-eshop2.jpg",
    tech: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
    year: 2022,
    type: "personal",
    github: "https://github.com/GiannisF12/E-Commerce-Clothing",
    live: "https://php-eshop.giannisf12.dev",
  },
];
