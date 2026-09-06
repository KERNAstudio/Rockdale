"use client";

import { useMemo, useState } from "react";
import ImageGrid, { type GridImage } from "./ImageGrid";
import { galleryFilters, type GalleryCategory } from "@/lib/content";

export default function GalleryFilterGrid({
  items,
}: {
  items: (GridImage & { category: GalleryCategory })[];
}) {
  const [active, setActive] = useState<"All" | GalleryCategory>("All");

  const filtered = useMemo(
    () =>
      active === "All"
        ? items
        : items.filter((item) => item.category === active),
    [active, items]
  );

  return (
    <div>
      <div
        role="group"
        aria-label="Filter gallery by category"
        className="flex flex-wrap gap-2"
      >
        {galleryFilters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActive(filter)}
            aria-pressed={active === filter}
            className={`btn-press rounded-full px-4 py-2 text-xs font-semibold tracking-[0.08em] uppercase transition-colors ${
              active === filter
                ? "bg-navy text-white"
                : "bg-transparent text-navy border border-border hover:border-navy"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="mt-12">
        {filtered.length > 0 ? (
          <ImageGrid items={filtered} />
        ) : (
          <p className="text-muted text-sm">No photos in this category yet.</p>
        )}
      </div>
    </div>
  );
}
