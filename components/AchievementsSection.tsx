import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import Link from "next/link";
import { achievements, achievementsContent } from "@/lib/content";

export default function AchievementsSection({
  showLink = true,
  featuredOnly = false,
  showHeader = true,
}: {
  showLink?: boolean;
  featuredOnly?: boolean;
  showHeader?: boolean;
}) {
  const items = featuredOnly ? achievements.filter((a) => a.featured) : achievements;

  return (
    <section className="py-20 md:py-28 border-t border-border">
      <div className="mx-auto max-w-(--container-page) px-5 md:px-8">
        {showHeader && (
          <SectionHeader
            eyebrow={achievementsContent.eyebrow}
            heading={achievementsContent.headline}
            description={featuredOnly ? achievementsContent.intro : undefined}
          />
        )}

        <div className="mt-14 divide-y divide-border border-t border-border">
          {items.map((person, i) => (
            <Reveal key={person.name} delay={i * 60}>
              <div className="grid md:grid-cols-[1fr_2fr] gap-3 md:gap-10 py-8">
                <h3 className="font-serif-display text-xl md:text-2xl text-navy">
                  {person.name}
                </h3>
                <div>
                  <p className="text-sm font-semibold text-rockdale-blue">
                    {person.role}
                  </p>
                  <p className="mt-2 text-sm md:text-base text-muted leading-relaxed max-w-2xl">
                    {person.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {showLink && (
          <div className="mt-10">
            <Link
              href="/achievements"
              className="text-sm font-semibold text-navy border-b border-gold pb-0.5 hover:text-rockdale-blue transition-colors"
            >
              Meet our alumni &rarr;
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
