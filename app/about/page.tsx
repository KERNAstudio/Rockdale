import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";
import ImageSlot from "@/components/ImageSlot";
import FounderBlock from "@/components/FounderBlock";
import { aboutContent, facilities } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Founded in 1997 by Pulletikurthy Narayana Murthy, Rockdale School in Marripalem, Visakhapatnam offers CBSE education from Play School to Grade X.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow={aboutContent.pageEyebrow}
        title={aboutContent.pageHeadline}
        description={aboutContent.pageIntro}
      />

      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-(--container-page) px-5 md:px-8">
          <div className="relative aspect-[16/9] w-full">
            <ImageSlot
              src="hero/rockdale-building.jpg"
              alt="Rockdale School building, Marripalem, Visakhapatnam"
              fill
              sizes="100vw"
              className="object-cover"
              placeholderLabel="Rockdale School building"
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 border-t border-border">
        <div className="mx-auto max-w-(--container-page) px-5 md:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <Reveal>
              <h2 className="font-serif-display text-3xl md:text-4xl leading-[1.2] text-navy">
                {aboutContent.foundingHeading}
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="text-base md:text-lg leading-relaxed text-muted">
                {aboutContent.foundingBody}
              </p>
            </Reveal>
          </div>

          <div className="mt-16 max-w-3xl">
            <FounderBlock />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 border-t border-border bg-light-blue">
        <div className="mx-auto max-w-(--container-page) px-5 md:px-8">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            <Reveal>
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-gold">
                Vision
              </p>
              <p className="mt-4 font-serif-display text-2xl md:text-3xl leading-snug text-navy">
                {aboutContent.vision}
              </p>
            </Reveal>
            <Reveal delay={80}>
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-gold">
                Mission
              </p>
              <p className="mt-4 font-serif-display text-2xl md:text-3xl leading-snug text-navy">
                {aboutContent.mission}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 border-t border-border">
        <div className="mx-auto max-w-(--container-page) px-5 md:px-8">
          <SectionHeader eyebrow="What Rockdale Values" heading="Principles, not slogans." />
          <div className="mt-12 grid sm:grid-cols-2 gap-x-10 gap-y-10 max-w-3xl">
            {aboutContent.values.map((value, i) => (
              <Reveal key={value.title} delay={i * 60} className="border-t border-border pt-5">
                <h3 className="font-serif-display text-xl text-navy">{value.title}</h3>
                <p className="mt-2 text-sm md:text-base text-muted leading-relaxed">
                  {value.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 border-t border-border bg-light-blue">
        <div className="mx-auto max-w-(--container-page) px-5 md:px-8">
          <SectionHeader
            eyebrow="School Experience"
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
        <div className="mx-auto max-w-(--container-page) px-5 md:px-8 flex flex-wrap gap-x-10 gap-y-4">
          <Link
            href="/academics"
            className="text-sm font-semibold text-navy border-b border-gold pb-0.5 hover:text-rockdale-blue transition-colors"
          >
            Explore Academics &rarr;
          </Link>
          <Link
            href="/student-life"
            className="text-sm font-semibold text-navy border-b border-gold pb-0.5 hover:text-rockdale-blue transition-colors"
          >
            Explore Student Life &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}
