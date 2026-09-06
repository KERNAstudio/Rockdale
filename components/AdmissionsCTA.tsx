import Link from "next/link";
import { siteConfig } from "@/lib/content";

export default function AdmissionsCTA() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-(--container-page) px-5 md:px-8">
        <div className="rounded-2xl bg-light-blue px-6 py-14 md:px-16 md:py-20 text-center">
          <p className="text-xs md:text-sm font-semibold tracking-[0.18em] uppercase text-rockdale-blue">
            Admissions
          </p>
          <h2 className="mt-5 font-serif-display text-3xl md:text-5xl leading-[1.15] text-navy">
            Admissions are open.
          </h2>
          <p className="mt-5 max-w-xl mx-auto text-base md:text-lg text-muted leading-relaxed">
            Give your child a place to learn, grow and discover their
            potential.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/admissions"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-navy text-white text-sm font-medium px-7 py-3.5 hover:bg-deep-blue transition-colors"
            >
              Enquire Now
            </Link>
            <a
              href={siteConfig.phoneHref}
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-navy/25 text-navy text-sm font-medium px-7 py-3.5 hover:border-navy transition-colors"
            >
              Call {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
