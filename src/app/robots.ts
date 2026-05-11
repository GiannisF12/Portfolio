import type { MetadataRoute } from "next";

const SITE = "https://giannisf12.dev";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Block Next.js internals + the OG image (it's huge, no point indexing)
      disallow: ["/api/", "/_next/", "/opengraph-image"],
    },
    sitemap: `${SITE}/sitemap.xml`,
    host: SITE,
  };
}
