import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Produce a self-contained build at .next/standalone so we can ship a tiny Docker image.
  output: "standalone",
};

export default nextConfig;
