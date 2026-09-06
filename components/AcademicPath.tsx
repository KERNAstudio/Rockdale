import Link from "next/link";
import Reveal from "./Reveal";
import ImageSlot from "./ImageSlot";
import { academicJourney } from "@/lib/content";

export default function AcademicPath() {
  return (
    <section className="py-20 md:py-28 bg-light-blue">
      <div className="mx-auto max-w-(--container-page) px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <p className="text-xs md:text-sm font-semibold tracking-[0.18em] uppercase text-rockdale-blue">
              Academics
            </p>
            <h2 className="mt-5 font-serif-display text-3xl md:text-4xl leading-[1.15] text-navy">
              From first steps to Grade X.
            </h2>

            <ol className="mt-8 space-y-0">
              {academicJourney.map((step, i) => (
                <Reveal key={step.stage} delay={i * 50}>
                  <li className="flex items-baseline gap-4 py-3 border-b border-navy/10 last:border-b-0">
                    <span className="text-xs font-semibold text-gold tracking-[0.1em] shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-serif-display text-lg text-navy">
                      {step.stage}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ol>

            <Link
              href="/academics"
              className="mt-8 inline-block text-sm font-semibold text-navy border-b border-gold pb-0.5 hover:text-rockdale-blue transition-colors"
            >
              Explore Academics &rarr;
            </Link>
          </div>

          <Reveal className="relative aspect-[4/3] w-full">
            <ImageSlot
              src="campus/classroom-learning.jpg"
              alt="Students in a classroom at Rockdale School"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              placeholderLabel="Classroom learning"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
