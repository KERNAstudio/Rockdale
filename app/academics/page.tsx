import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import AcademicJourney from "@/components/AcademicJourney";
import SectionHeader from "@/components/SectionHeader";
import ImageGrid from "@/components/ImageGrid";
import AdmissionsCTA from "@/components/AdmissionsCTA";
import { academicsContent, siteConfig } from "@/lib/content";
import { resolveImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Academics",
  description:
    "Rockdale School follows the CBSE curriculum from Play School through Grade X, with science and computer labs, digital classrooms and student-centred teaching.",
};

export default function AcademicsPage() {
  return (
    <>
      <PageHeader
        eyebrow={academicsContent.eyebrow}
        title={academicsContent.headline}
        description={academicsContent.intro}
      />

      <AcademicJourney showHeader={false} />

      <section className="py-16 md:py-24 border-t border-border">
        <div className="mx-auto max-w-(--container-page) px-5 md:px-8">
          <SectionHeader
            eyebrow="Curriculum"
            heading={`Rockdale follows the ${siteConfig.curriculum} curriculum.`}
            description="From Play School through Grade X, classroom teaching follows the CBSE curriculum, taught by experienced teachers."
          />
        </div>
      </section>

      <section className="py-16 md:py-24 border-t border-border bg-light-blue">
        <div className="mx-auto max-w-(--container-page) px-5 md:px-8">
          <SectionHeader
            eyebrow="Classroom Experience"
            heading="Digital classrooms, science and computer labs."
          />
          <div className="mt-14">
            <ImageGrid
              items={resolveImages([
                {
                  title: "Science & Computer Labs",
                  caption: "Learning by doing.",
                  image: "campus/science-lab.jpg",
                  aspect: "landscape",
                },
                {
                  title: "Library & Reading",
                  caption: "A quiet space to read and think.",
                  image: "campus/library.jpg",
                  aspect: "portrait",
                },
                {
                  title: "Classroom Learning",
                  caption: "Curiosity begins in the classroom.",
                  image: "campus/classroom-learning.jpg",
                  aspect: "square",
                },
              ])}
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 border-t border-border">
        <div className="mx-auto max-w-(--container-page) px-5 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <SectionHeader
              eyebrow="Beyond the Textbook"
              heading="Academics and life skills, in equal measure."
            />
            <ul className="space-y-4">
              {academicsContent.coCurricular.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm md:text-base text-navy border-b border-border pb-4"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 border-t border-border bg-light-blue">
        <div className="mx-auto max-w-(--container-page) px-5 md:px-8">
          <SectionHeader eyebrow="Grade X" heading="Preparing for CBSE board examinations." />
          <p className="mt-6 max-w-2xl text-base md:text-lg text-muted leading-relaxed">
            {academicsContent.gradeX}
          </p>
        </div>
      </section>

      <AdmissionsCTA />
    </>
  );
}
