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
  // next/image with unoptimized:true renders a plain <img src>, which does
  // NOT get basePath auto-prepended (that only happens for the optimizer
  // loader URL) — expose it so our own image components can prefix it.
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
