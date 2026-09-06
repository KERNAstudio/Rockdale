import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import GalleryFilterGrid from "@/components/GalleryFilterGrid";
import AdmissionsCTA from "@/components/AdmissionsCTA";
import { galleryItems } from "@/lib/content";
import { resolveGalleryItems } from "@/lib/images";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos from Rockdale School's academics, events, sports, arts and community life in Marripalem, Visakhapatnam.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="A record of the Rockdale school year."
        description="Farewells, celebrations, science expos and everyday classroom life — a look back at recent moments on campus. Click any moment to see its photos."
      />
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-(--container-page) px-5 md:px-8">
          <GalleryFilterGrid items={resolveGalleryItems(galleryItems)} />
        </div>
      </section>
      <AdmissionsCTA />
    </>
  );
}
