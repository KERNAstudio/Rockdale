import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "Admissions",
  description:
    "Admissions are open at Rockdale School, Marripalem, Visakhapatnam. Call, WhatsApp or visit the campus to begin your child's admission.",
};

const steps = [
  {
    number: "01",
    title: "Get in touch",
    description:
      "Call, WhatsApp or email the school office to ask about seats, fees and required documents.",
  },
  {
    number: "02",
    title: "Visit the campus",
    description:
      "See the classrooms, meet our faculty and get a feel for everyday life at Rockdale.",
  },
  {
    number: "03",
    title: "Complete admission",
    description:
      "Once you're ready, our office team will guide you through the paperwork and enrolment.",
  },
];

export default function AdmissionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Admissions"
        title="Admissions are open."
        description="Give your child a place to learn, grow and discover their potential — from Play School through Grade X."
      />

      <section className="py-8 md:py-12">
        <div className="mx-auto max-w-(--container-page) px-5 md:px-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-navy text-white text-sm font-medium px-7 py-3.5 hover:bg-deep-blue transition-colors"
            >
              Enquire on WhatsApp
            </a>
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center justify-center rounded-full border border-navy/25 text-navy text-sm font-medium px-7 py-3.5 hover:border-navy transition-colors"
            >
              Call {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 border-t border-border">
        <div className="mx-auto max-w-(--container-page) px-5 md:px-8">
          <SectionHeader
            eyebrow="How Admissions Work"
            heading="Three simple steps to join Rockdale."
          />
          <div className="mt-14 grid md:grid-cols-3 gap-10">
            {steps.map((step, i) => (
              <Reveal key={step.number} delay={i * 80}>
                <span className="font-serif-display text-3xl text-gold">
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

      <section className="py-16 md:py-24 bg-light-blue">
        <div className="mx-auto max-w-(--container-page) px-5 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <SectionHeader
              eyebrow="Classes Offered"
              heading="Play School to Grade X."
              description={`Rockdale follows the ${siteConfig.curriculum} curriculum from Play School and Pre-Primary (Nursery to UKG) through Grade X.`}
            />
            <div className="rounded-2xl bg-off-white border border-border p-8 md:p-10">
              <p className="font-serif-display text-xl text-navy">
                Visit us at
              </p>
              <p className="mt-3 text-muted text-sm md:text-base leading-relaxed">
                {siteConfig.address.line2}
                <br />
                {siteConfig.address.line3}
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-block text-sm font-semibold text-navy border-b border-gold pb-0.5 hover:text-rockdale-blue transition-colors"
              >
                Full contact details &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
