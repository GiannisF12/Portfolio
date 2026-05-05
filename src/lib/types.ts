export type Project = {
  slug: string;
  title: string;
  description: string;
  image: string;
  /** Optional. If set with 2+ items, the card renders a side-by-side collage instead of `image`. */
  images?: string[];
  tech: string[];
  year: number;
  role?: string;
  type: "personal" | "client";
  github?: string;
  live?: string;
};
