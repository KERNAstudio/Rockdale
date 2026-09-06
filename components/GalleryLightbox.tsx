"use client";

import { useEffect, useRef, useState } from "react";
import ImageTile from "./ImageTile";
import type { ResolvedGalleryImage } from "@/lib/images";

export interface LightboxItem {
  title: string;
  caption: string;
  images: ResolvedGalleryImage[];
}

const focusableSelector =
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

export default function GalleryLightbox({
  item,
  onClose,
}: {
  item: LightboxItem;
  onClose: () => void;
}) {
  const photos = item.images.filter((img) => img.exists);
  const [index, setIndex] = useState(0);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
      previouslyFocused?.focus();
    };
  }, []);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (photos.length > 1) {
        if (e.key === "ArrowRight") setIndex((i) => (i + 1) % photos.length);
        if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + photos.length) % photos.length);
      }
      if (e.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(focusableSelector);
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [photos.length, onClose]);

  if (photos.length === 0) return null;
  const current = photos[index];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/90 p-4 md:p-10"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={item.title}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="btn-press absolute -top-12 right-0 text-white/80 hover:text-white text-3xl leading-none"
        >
          &times;
        </button>

        <div className="relative w-full aspect-[4/3] bg-navy/40 rounded-lg overflow-hidden">
          <ImageTile
            src={current.src}
            alt={`${item.title} — photo ${index + 1} of ${photos.length}`}
            exists
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-contain"
          />

          {photos.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => setIndex((i) => (i - 1 + photos.length) % photos.length)}
                aria-label="Previous photo"
                className="btn-press absolute left-2 top-1/2 -translate-y-1/2 flex items-center justify-center h-10 w-10 rounded-full bg-navy/60 text-white text-xl hover:bg-navy/80"
              >
                &lsaquo;
              </button>
              <button
                type="button"
                onClick={() => setIndex((i) => (i + 1) % photos.length)}
                aria-label="Next photo"
                className="btn-press absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center h-10 w-10 rounded-full bg-navy/60 text-white text-xl hover:bg-navy/80"
              >
                &rsaquo;
              </button>
            </>
          )}
        </div>

        <div className="mt-4 text-center">
          <p className="font-serif-display text-lg text-white">{item.title}</p>
          <p className="mt-1 text-sm text-white/70">{item.caption}</p>
          {photos.length > 1 && (
            <p className="mt-2 text-xs text-white/50 tabular-nums">
              {index + 1} / {photos.length}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
