import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import { academicJourney, siteConfig } from "@/lib/content";

export default function AcademicJourney() {
  return (
    <section className="py-20 md:py-28 border-t border-border">
      <div className="mx-auto max-w-(--container-page) px-5 md:px-8">
        <SectionHeader
          eyebrow="Academics"
          heading="A journey from Play School to Grade X."
          description={`Rockdale follows the ${siteConfig.curriculum} curriculum from the very first year of school through board examinations.`}
        />

        <div className="mt-16 flex flex-col md:flex-row md:items-stretch">
          {academicJourney.map((step, i) => (
            <Reveal
              key={step.stage}
              delay={i * 80}
              className="flex-1 md:border-l first:border-l-0 border-border md:pl-6 py-6 md:py-0"
            >
              <div className="flex md:flex-col h-full gap-4 md:gap-0 items-baseline md:items-start">
                <span className="text-xs font-semibold text-gold tracking-[0.14em]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="md:mt-4">
                  <h3 className="font-serif-display text-xl md:text-2xl text-navy">
                    {step.stage}
                  </h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed max-w-[220px]">
                    {step.detail}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
