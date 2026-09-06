import Link from "next/link";
import SectionHeader from "./SectionHeader";
import ImageGrid from "./ImageGrid";
import { galleryItems } from "@/lib/content";
import { resolveImages } from "@/lib/images";

export default function GalleryPreview() {
  const featured = resolveImages(galleryItems.slice(0, 6));

  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="mx-auto max-w-(--container-page) px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeader
            eyebrow="Gallery"
            heading="Moments from the Rockdale school year."
          />
          <Link
            href="/gallery"
            className="shrink-0 text-sm font-semibold text-navy border-b border-gold pb-0.5 hover:text-rockdale-blue transition-colors"
          >
            View full gallery &rarr;
          </Link>
        </div>
        <div className="mt-14">
          <ImageGrid items={featured} />
        </div>
      </div>
    </section>
  );
}
