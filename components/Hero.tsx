import Link from "next/link";
import ImageSlot from "./ImageSlot";
import { heroContent } from "@/lib/content";

export default function Hero() {
  return (
    <section className="relative bg-off-white">
      <div className="mx-auto max-w-(--container-page) px-5 md:px-8 pt-10 md:pt-14 pb-0 md:pb-0">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-14 items-center">
          <div className="max-w-xl">
            <p className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-rockdale-blue">
              {heroContent.eyebrow}
            </p>
            <h1 className="mt-5 font-serif-display text-navy text-5xl sm:text-6xl lg:text-[4.25rem] leading-[1.05]">
              {heroContent.headline.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p className="mt-6 text-base md:text-lg text-muted leading-relaxed max-w-md">
              {heroContent.supporting}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href={heroContent.primaryCta.href}
                className="inline-flex items-center rounded-full bg-navy text-white text-sm font-medium px-6 py-3.5 hover:bg-deep-blue transition-colors"
              >
                {heroContent.primaryCta.label}
              </Link>
              <Link
                href={heroContent.secondaryCta.href}
                className="inline-flex items-center rounded-full border border-navy/20 text-navy text-sm font-medium px-6 py-3.5 hover:border-navy transition-colors"
              >
                {heroContent.secondaryCta.label}
              </Link>
            </div>
          </div>

          <div className="relative aspect-[4/5] sm:aspect-[16/11] lg:aspect-[4/5] lg:h-[640px] w-full">
            <ImageSlot
              src="hero/rockdale-building.png"
              alt="Rockdale School building, Marripalem, Visakhapatnam"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
              placeholderLabel="Hero photo — Rockdale School building"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-off-white/70 to-transparent lg:hidden" />
          </div>
        </div>
      </div>
    </section>
  );
}
