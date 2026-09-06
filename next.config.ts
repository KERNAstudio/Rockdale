import type { NextConfig } from "next";

// Only apply the GitHub Pages subpath when building for it — keeps local
// dev/build at the site root.
const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGithubPages ? "/Rockdale" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: { unoptimized: true },
};

export default nextConfig;
