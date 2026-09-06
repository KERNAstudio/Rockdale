import Link from "next/link";
import Reveal from "./Reveal";
import ImageSlot from "./ImageSlot";
import FounderBlock from "./FounderBlock";
import { aboutContent } from "@/lib/content";

export default function AboutPreview() {
  return (
    <section className="py-20 md:py-28 border-t border-border">
      <div className="mx-auto max-w-(--container-page) px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <Reveal className="relative aspect-[4/3] w-full order-2 lg:order-1">
            <ImageSlot
              src="campus/teacher-and-students.jpg"
              alt="A teacher working closely with students at Rockdale School"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              placeholderLabel="Teacher and students"
            />
          </Reveal>

          <div className="order-1 lg:order-2">
            <p className="text-xs md:text-sm font-semibold tracking-[0.18em] uppercase text-rockdale-blue">
              About Rockdale
            </p>
            <h2 className="mt-5 font-serif-display text-3xl md:text-4xl leading-[1.15] text-navy">
              {aboutContent.homeHeadline}
            </h2>
            <p className="mt-5 text-base md:text-lg leading-relaxed text-muted max-w-lg">
              {aboutContent.homeIntro}
            </p>

            <div className="mt-8 max-w-xs">
              <FounderBlock compact />
            </div>

            <Link
              href="/about"
              className="mt-8 inline-block text-sm font-semibold text-navy border-b border-gold pb-0.5 hover:text-rockdale-blue transition-colors"
            >
              Read our story &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
