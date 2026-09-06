import Link from "next/link";
import ImageSlot from "./ImageSlot";
import { heroContent } from "@/lib/content";

function HeroCopy() {
  return (
    <div className="max-w-xl">
      <p className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-rockdale-blue">
        {heroContent.eyebrow}
      </p>
      <h1 className="mt-5 font-serif-display text-navy text-5xl sm:text-6xl xl:text-[4.25rem] leading-[1.05]">
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
          className="btn-lift inline-flex items-center rounded-full bg-navy text-white text-sm font-medium px-6 py-3.5 hover:bg-deep-blue transition-colors"
        >
          {heroContent.primaryCta.label}
        </Link>
        <Link
          href={heroContent.secondaryCta.href}
          className="btn-press inline-flex items-center rounded-full border border-navy/20 text-navy text-sm font-medium px-6 py-3.5 hover:border-navy transition-colors"
        >
          {heroContent.secondaryCta.label}
        </Link>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative bg-off-white">
      {/* Mobile / tablet: simple stacked layout — a side-bleed split doesn't
          leave enough room for the text column until the viewport is wide
          enough (lg+) for both a full text column and a well-proportioned
          photo without cropping it heavily. */}
      <div className="lg:hidden">
        <div className="px-5 pt-10">
          <HeroCopy />
        </div>
        <div className="relative mt-8 aspect-[4/3] w-full">
          <ImageSlot
            src="hero/rockdale-building.jpg"
            alt="Rockdale School building, Marripalem, Visakhapatnam"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            placeholderLabel="Hero photo — Rockdale School building"
          />
        </div>
      </div>

      {/* Desktop: photo bleeds to the screen edge on the right. The image
          box's height comes from its own aspect ratio (close to the real
          photo's ~16:9) rather than a fixed hero height, so object-cover
          only has to crop slightly rather than zooming in and losing most
          of the building. Text is overlaid on top, vertically centered. */}
      <div className="hidden lg:block relative min-h-[460px]">
        <div className="ml-auto w-[58%] xl:w-[55%] aspect-[16/11] relative overflow-hidden">
          <ImageSlot
            src="hero/rockdale-building.jpg"
            alt="Rockdale School building, Marripalem, Visakhapatnam"
            fill
            priority
            sizes="55vw"
            className="object-cover"
            placeholderLabel="Hero photo — Rockdale School building"
          />
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 xl:w-48 bg-gradient-to-r from-off-white to-transparent" />
        </div>

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-(--container-page) px-8">
            <HeroCopy />
          </div>
        </div>
      </div>
    </section>
  );
}
