import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";
import ContactDetails from "@/components/ContactDetails";
import AdmissionsCTA from "@/components/AdmissionsCTA";
import { admissionsContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Admissions",
  description:
    "Admissions are open at Rockdale School, Marripalem, Visakhapatnam. Call, WhatsApp or visit the campus to begin your child's admission.",
};

export default function AdmissionsPage() {
  return (
    <>
      <PageHeader
        eyebrow={admissionsContent.eyebrow}
        title={admissionsContent.headline}
        description={admissionsContent.intro}
      />

      <section className="py-8 md:py-16 border-t border-border">
        <div className="mx-auto max-w-(--container-page) px-5 md:px-8">
          <SectionHeader eyebrow="Admission Enquiry" heading="Reach the school directly." />
          <div className="mt-10">
            <ContactDetails />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 border-t border-border bg-light-blue">
        <div className="mx-auto max-w-(--container-page) px-5 md:px-8">
          <SectionHeader eyebrow="How to Get Started" heading="Three simple steps." />
          <div className="mt-14 grid md:grid-cols-3 gap-10">
            {admissionsContent.steps.map((step, i) => (
              <Reveal key={step.number} delay={i * 80}>
                <span className="font-serif-display text-3xl text-gold tabular-nums">
                  {step.number}
                </span>
                <h3 className="mt-4 font-serif-display text-xl text-navy">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm md:text-base text-muted leading-relaxed">
                  {step.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <AdmissionsCTA />
    </>
  );
}
