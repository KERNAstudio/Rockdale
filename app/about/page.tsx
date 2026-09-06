import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";
import ImageGrid from "@/components/ImageGrid";
import AdmissionsCTA from "@/components/AdmissionsCTA";
import {
  founders,
  facilities,
  legacy,
  visionMission,
  siteConfig,
} from "@/lib/content";
import { resolveImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Founded in 1997 by Pulletikurthy Narayana Murthy, Rockdale School in Marripalem, Visakhapatnam offers CBSE education from Play School to Grade X.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Rockdale"
        title="A place where excellence meets values."
        description="Shaping students with knowledge, creativity and compassion — from Play School through Grade X."
      />

      <section className="py-4 md:py-10">
        <div className="mx-auto max-w-(--container-page) px-5 md:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <Reveal>
              <h2 className="font-serif-display text-3xl md:text-4xl leading-[1.2] text-navy">
                Our Legacy
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="text-base md:text-lg leading-relaxed text-muted">
                {legacy.body}
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid sm:grid-cols-2 gap-8 max-w-3xl">
            {founders.map((founder) => (
              <div key={founder.name} className="border-t border-border pt-5">
                <p className="font-serif-display text-xl text-navy">
                  {founder.name}
                </p>
                <p className="mt-1 text-sm text-rockdale-blue font-medium">
                  {founder.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 border-t border-border">
        <div className="mx-auto max-w-(--container-page) px-5 md:px-8">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            <Reveal>
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-gold">
                Vision
              </p>
              <p className="mt-4 font-serif-display text-2xl md:text-3xl leading-snug text-navy">
                {visionMission.vision}
              </p>
            </Reveal>
            <Reveal delay={80}>
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-gold">
                Mission
              </p>
              <p className="mt-4 font-serif-display text-2xl md:text-3xl leading-snug text-navy">
                {visionMission.mission}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-light-blue">
        <div className="mx-auto max-w-(--container-page) px-5 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <SectionHeader
              eyebrow="Classes Offered"
              heading="Play School to Grade X, under one roof."
              description={`Rockdale provides education from Play School and Pre-Primary (Nursery to UKG) through Grade X, following the ${siteConfig.curriculum} curriculum.`}
            />
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-rockdale-blue">
                Our Faculty
              </p>
              <p className="mt-4 text-base md:text-lg text-muted leading-relaxed max-w-md">
                Our experienced, passionate educators focus on student-centric
                teaching, supported by regular training and workshops.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="facilities" className="py-16 md:py-24 scroll-mt-20">
        <div className="mx-auto max-w-(--container-page) px-5 md:px-8">
          <SectionHeader
            eyebrow="Campus Facilities"
            heading="What every Rockdale student has access to."
          />
          <ul className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-5 max-w-4xl">
            {facilities.map((facility) => (
              <li key={facility} className="flex items-start gap-3 text-sm md:text-base text-navy">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                {facility}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 md:py-24 border-t border-border">
        <div className="mx-auto max-w-(--container-page) px-5 md:px-8">
          <ImageGrid
            items={resolveImages([
              {
                title: "Classroom Learning",
                caption: "Curiosity begins in the classroom.",
                image: "campus/classroom-learning.jpg",
                aspect: "landscape",
              },
              {
                title: "Morning Assembly",
                caption: "Where every school day begins.",
                image: "campus/morning-assembly.jpg",
                aspect: "landscape",
              },
            ])}
          />
        </div>
      </section>

      <AdmissionsCTA />
    </>
  );
}
