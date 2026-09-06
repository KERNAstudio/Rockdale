import Image from "next/image";
import { imageExists } from "@/lib/images";
import { basePath } from "@/lib/basePath";

type ImageSlotProps = {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
  className?: string;
  placeholderLabel?: string;
};

// Server component only (reads the filesystem). Never import this from a
// "use client" file — for client trees, resolve `exists` server-side via
// lib/images.ts and render with <ImageTile> instead.
export default function ImageSlot({
  src,
  alt,
  fill,
  width,
  height,
  sizes,
  priority,
  className = "",
  placeholderLabel,
}: ImageSlotProps) {
  const publicSrc = src.startsWith("/") ? src : `/images/${src}`;
  const exists = imageExists(publicSrc.slice(1));

  if (!exists) {
    return (
      <div
        className={`flex items-center justify-center bg-light-blue border border-border text-center ${
          fill ? "absolute inset-0" : ""
        } ${className}`}
        style={!fill ? { width, height } : undefined}
        role="img"
        aria-label={alt}
      >
        <span className="px-4 py-2 text-xs tracking-wide uppercase text-muted font-medium">
          {placeholderLabel ?? alt}
        </span>
      </div>
    );
  }

  const resolvedSrc = `${basePath}${publicSrc}`;

  if (fill) {
    return (
      <Image
        src={resolvedSrc}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={className}
      />
    );
  }

  return (
    <Image
      src={resolvedSrc}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      priority={priority}
      className={className}
    />
  );
}
