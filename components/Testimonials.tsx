import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import { testimonials } from "@/lib/content";

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-cream border-t border-border">
      <div className="mx-auto max-w-(--container-page) px-5 md:px-8">
        <SectionHeader eyebrow="In their words" heading="What Rockdale families say." />

        <div className="mt-14 grid md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t, i) => (
            <Reveal key={t.quote} delay={i * 80}>
              <blockquote className="h-full flex flex-col">
                <p className="font-serif-display text-xl leading-relaxed text-navy">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-5 text-sm font-semibold text-muted">
                  &mdash; {t.author}
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
