import Link from "next/link";
import ImageSlot from "./ImageSlot";
import { heroContent } from "@/lib/content";

export default function Hero() {
  return (
    <section className="relative flex items-center overflow-hidden min-h-[560px] sm:min-h-[620px] md:min-h-[680px] lg:min-h-[760px]">
      <div className="absolute inset-0">
        <ImageSlot
          src="hero/rockdale-building.png"
          alt="Rockdale School building, Marripalem, Visakhapatnam"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          placeholderLabel="Hero photo — Rockdale School building"
        />
      </div>

      {/* Left-to-right fade so the headline stays legible over the photo;
          near-opaque on mobile (image as texture), opens up to reveal the
          full photo on the right at desktop widths, matching the reference. */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-off-white/85 via-off-white/80 to-off-white/85 md:bg-gradient-to-r md:from-off-white md:via-off-white/75 md:to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-(--container-page) px-5 md:px-8">
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
              className="inline-flex items-center rounded-full border border-navy/25 bg-off-white/60 text-navy text-sm font-medium px-6 py-3.5 hover:border-navy hover:bg-off-white transition-colors"
            >
              {heroContent.secondaryCta.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
