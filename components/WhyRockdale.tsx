import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import { whyRockdale } from "@/lib/content";

export default function WhyRockdale() {
  return (
    <section className="py-20 md:py-28 bg-navy text-white">
      <div className="mx-auto max-w-(--container-page) px-5 md:px-8">
        <SectionHeader
          eyebrow="Why Rockdale?"
          heading="A school built around the child, not around a brochure."
          light
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {whyRockdale.map((item, i) => (
            <Reveal key={item.label} delay={i * 60}>
              <div className="border-t border-white/15 pt-5">
                <p className="font-serif-display text-2xl md:text-3xl text-gold">
                  {item.stat}
                </p>
                <p className="mt-2 text-sm text-white/70">{item.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
