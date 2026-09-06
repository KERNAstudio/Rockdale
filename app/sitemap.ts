import type { MetadataRoute } from "next";
import { basePath } from "@/lib/basePath";

export const dynamic = "force-static";

const siteUrl = `https://kernastudio.github.io${basePath}`;

const routes = [
  "",
  "/about",
  "/academics",
  "/student-life",
  "/achievements",
  "/gallery",
  "/admissions",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));
}
