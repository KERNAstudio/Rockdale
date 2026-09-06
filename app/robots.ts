import type { MetadataRoute } from "next";
import { basePath } from "@/lib/basePath";

export const dynamic = "force-static";

const siteUrl = `https://kernastudio.github.io${basePath}`;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
