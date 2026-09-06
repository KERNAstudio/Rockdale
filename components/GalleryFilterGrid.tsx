"use client";

import { useMemo, useState } from "react";
import Reveal from "./Reveal";
import ImageTile from "./ImageTile";
import GalleryLightbox from "./GalleryLightbox";
import { galleryFilters, type GalleryCategory } from "@/lib/content";
import type { ResolvedGalleryImage } from "@/lib/images";

type Aspect = "landscape" | "portrait" | "square" | "wide";

interface ResolvedGalleryEvent {
  title: string;
  category: GalleryCategory;
  caption: string;
  aspect: Aspect;
  images: ResolvedGalleryImage[];
}

const spanClass: Record<Aspect, string> = {
  wide: "col-span-2 lg:col-span-3",
  landscape: "col-span-2 lg:col-span-2",
  portrait: "col-span-1",
  square: "col-span-1",
};

const aspectClass: Record<Aspect, string> = {
  wide: "aspect-[21/9]",
  landscape: "aspect-[4/3]",
  portrait: "aspect-[3/4]",
  square: "aspect-square",
};

export default function GalleryFilterGrid({ items }: { items: ResolvedGalleryEvent[] }) {
  const [active, setActive] = useState<"All" | GalleryCategory>("All");
  const [openItem, setOpenItem] = useState<ResolvedGalleryEvent | null>(null);

  const filtered = useMemo(
    () => (active === "All" ? items : items.filter((item) => item.category === active)),
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
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filtered.map((item, i) => {
              const cover = item.images[0];
              const photoCount = item.images.filter((img) => img.exists).length;
              const hasPhotos = photoCount > 0;

              const visual = (
                <div
                  className={`relative w-full overflow-hidden bg-light-blue ${aspectClass[item.aspect]}`}
                >
                  <ImageTile
                    src={cover.src}
                    alt={item.title}
                    exists={cover.exists}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    placeholderLabel={item.title}
                  />
                  {hasPhotos && (
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-navy/0 group-hover:bg-navy/40 transition-colors duration-300">
                      <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {photoCount > 1 ? `View ${photoCount} photos` : "View photo"}
                      </span>
                    </div>
                  )}
                </div>
              );

              const captionBlock = (
                <figcaption className="mt-3">
                  <p className="text-xs font-semibold tracking-[0.14em] uppercase text-rockdale-blue">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm text-muted">{item.caption}</p>
                </figcaption>
              );

              return (
                <Reveal key={item.title} delay={(i % 3) * 60} className={spanClass[item.aspect]}>
                  {hasPhotos ? (
                    <button
                      type="button"
                      onClick={() => setOpenItem(item)}
                      className="group block w-full text-left"
                    >
                      <figure>
                        {visual}
                        {captionBlock}
                      </figure>
                    </button>
                  ) : (
                    <figure className="group">
                      {visual}
                      {captionBlock}
                    </figure>
                  )}
                </Reveal>
              );
            })}
          </div>
        ) : (
          <p className="text-muted text-sm">No photos in this category yet.</p>
        )}
      </div>

      {openItem && <GalleryLightbox item={openItem} onClose={() => setOpenItem(null)} />}
    </div>
  );
}
