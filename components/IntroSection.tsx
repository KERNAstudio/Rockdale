import { legacy } from "@/lib/content";
import Reveal from "./Reveal";

export default function IntroSection() {
  return (
    <section className="py-20 md:py-28 border-t border-border">
      <div className="mx-auto max-w-(--container-page) px-5 md:px-8">
        <Reveal>
          <p className="text-xs md:text-sm font-semibold tracking-[0.18em] uppercase text-rockdale-blue">
            {legacy.eyebrow}
          </p>
        </Reveal>
        <div className="mt-6 grid lg:grid-cols-2 gap-10 lg:gap-16">
          <Reveal>
            <h2 className="font-serif-display text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.2] text-navy whitespace-pre-line">
              {legacy.statement}
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-base md:text-lg leading-relaxed text-muted">
              {legacy.body}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
