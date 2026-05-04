export type Project = {
  slug: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  year: number;
  role?: string;
  type: "personal" | "client";
  github?: string;
  live?: string;
};
