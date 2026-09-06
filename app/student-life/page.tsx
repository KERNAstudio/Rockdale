import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { LifeCategoryFull } from "@/components/LifeCategoryGrid";
import AdmissionsCTA from "@/components/AdmissionsCTA";
import { studentLifeContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Student Life",
  description:
    "Music, dance, art, drama, sports and public speaking — student life at Rockdale School reaches well beyond the classroom.",
};

export default function StudentLifePage() {
  return (
    <>
      <PageHeader
        eyebrow={studentLifeContent.eyebrow}
        title={studentLifeContent.headline}
        description={studentLifeContent.intro}
      />

      <LifeCategoryFull />

      <section className="py-16 md:py-24 border-t border-border">
        <div className="mx-auto max-w-(--container-page) px-5 md:px-8">
          <p className="max-w-2xl text-base md:text-lg leading-relaxed text-muted">
            {studentLifeContent.experience}
          </p>
        </div>
      </section>

      <AdmissionsCTA />
    </>
  );
}
