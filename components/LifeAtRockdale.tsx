import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import { lifePillars } from "@/lib/content";

export default function LifeAtRockdale() {
  return (
    <section className="py-20 md:py-28 bg-light-blue">
      <div className="mx-auto max-w-(--container-page) px-5 md:px-8">
        <SectionHeader
          eyebrow="Life at Rockdale"
          heading="Where learning becomes life."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-12">
          {lifePillars.map((pillar, i) => (
            <Reveal key={pillar.number} delay={i * 60}>
              <div className="border-t border-navy/15 pt-6">
                <span className="font-serif-display text-2xl text-gold">
                  {pillar.number}
                </span>
                <h3 className="mt-4 font-serif-display text-xl text-navy">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {pillar.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
