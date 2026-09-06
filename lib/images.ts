import fs from "node:fs";
import path from "node:path";

// Server-only. Never import this from a "use client" component — pass its
// output down as plain props instead, so client bundles never see node:fs.
export function imageExists(src: string): boolean {
  try {
    const cleaned = src.replace(/^\/+/, "").replace(/^images\//, "images/");
    const fullPath = path.join(process.cwd(), "public", cleaned);
    return fs.existsSync(fullPath) && fs.statSync(fullPath).isFile();
  } catch {
    return false;
  }
}

export function resolveImages<T extends { image: string }>(
  items: readonly T[]
): (T & { exists: boolean })[] {
  return items.map((item) => ({
    ...item,
    exists: imageExists(`images/${item.image}`),
  }));
}

export interface ResolvedGalleryImage {
  src: string;
  exists: boolean;
}

// For gallery events, which can hold more than one photo (the lightbox
// shows every one that actually exists on disk).
export function resolveGalleryItems<T extends { images: string[] }>(
  items: readonly T[]
): (Omit<T, "images"> & { images: ResolvedGalleryImage[] })[] {
  return items.map(({ images, ...rest }) => ({
    ...rest,
    images: images.map((src) => ({ src, exists: imageExists(`images/${src}`) })),
  }));
}
