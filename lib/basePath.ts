// Safe to import from client or server code (no node built-ins).
// next/image renders a plain <img src> when images.unoptimized is set
// (static export), which does NOT get basePath auto-prepended, so we
// prefix it ourselves wherever we build an image src.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
