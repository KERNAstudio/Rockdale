import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import AcademicJourney from "@/components/AcademicJourney";
import SectionHeader from "@/components/SectionHeader";
import ImageGrid from "@/components/ImageGrid";
import AdmissionsCTA from "@/components/AdmissionsCTA";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/lib/content";
import { resolveImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Academics",
  description:
    "Rockdale School follows the CBSE curriculum from Play School through Grade X, with science and computer labs, digital classrooms and student-centred teaching.",
};

const coCurricular = [
  "Music, dance, art & drama",
  "Seminars & quiz competitions for every student",
  "Public speaking practice for every student",
  "Science and computer lab sessions",
];

export default function AcademicsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Curriculum"
        title="A CBSE education, built around the student."
        description={`From Play School to Grade X, Rockdale follows the ${siteConfig.curriculum} curriculum with student-centred teaching and hands-on learning.`}
      />

      <AcademicJourney />

      <section className="py-16 md:py-24 bg-light-blue">
        <div className="mx-auto max-w-(--container-page) px-5 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <SectionHeader
              eyebrow="Beyond the Syllabus"
              heading="Academics and life skills, in equal measure."
              description="Every Rockdale student — not just a select few — takes part in seminars, quiz competitions and public speaking practice alongside classroom learning."
            />
            <Reveal>
              <ul className="space-y-4">
                {coCurricular.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm md:text-base text-navy border-b border-border pb-4"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-(--container-page) px-5 md:px-8">
          <SectionHeader
            eyebrow="Learning Environment"
            heading="Digital classrooms, science and computer labs."
            description="Fully equipped labs for hands-on experiments and coding practice, encouraging innovation alongside a strong academic foundation."
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
                  title: "Primary Section",
                  caption: "Where the youngest learners begin their journey.",
                  image: "campus/primary-section.jpg",
                  aspect: "square",
                },
              ])}
            />
          </div>
        </div>
      </section>

      <AdmissionsCTA />
    </>
  );
}
