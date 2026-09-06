import SectionHeader from "./SectionHeader";
import ImageGrid from "./ImageGrid";
import { campusExperiences } from "@/lib/content";
import { resolveImages } from "@/lib/images";

export default function CampusSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-(--container-page) px-5 md:px-8">
        <SectionHeader eyebrow="Our Campus" heading="Spaces that inspire." />
        <div className="mt-14">
          <ImageGrid items={resolveImages(campusExperiences)} />
        </div>
      </div>
    </section>
  );
}
