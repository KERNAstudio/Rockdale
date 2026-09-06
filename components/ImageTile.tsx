import Image from "next/image";
import { basePath } from "@/lib/basePath";

type ImageTileProps = {
  src: string;
  alt: string;
  exists: boolean;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
  className?: string;
  placeholderLabel?: string;
};

// Safe to import from client components — takes a precomputed `exists`
// flag instead of touching the filesystem itself. See lib/images.ts.
export default function ImageTile({
  src,
  alt,
  exists,
  fill,
  sizes,
  priority,
  className = "",
  placeholderLabel,
}: ImageTileProps) {
  const publicSrc = src.startsWith("/") ? src : `/images/${src}`;

  if (!exists) {
    return (
      <div
        className={`flex items-center justify-center bg-light-blue border border-border text-center ${
          fill ? "absolute inset-0" : ""
        } ${className}`}
        role="img"
        aria-label={alt}
      >
        <span className="px-4 py-2 text-xs tracking-wide uppercase text-muted font-medium">
          {placeholderLabel ?? alt}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={`${basePath}${publicSrc}`}
      alt={alt}
      fill={fill}
      sizes={sizes}
      priority={priority}
      className={className}
    />
  );
}
