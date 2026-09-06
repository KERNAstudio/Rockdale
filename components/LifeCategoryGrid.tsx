import Link from "next/link";
import Reveal from "./Reveal";
import ImageTile from "./ImageTile";
import ImageGrid from "./ImageGrid";
import { lifeCategories } from "@/lib/content";
import { imageExists, resolveImages } from "@/lib/images";

export function LifeCategoryPreview() {
  return (
    <section className="py-20 md:py-28 border-t border-border">
      <div className="mx-auto max-w-(--container-page) px-5 md:px-8">
        <p className="text-xs md:text-sm font-semibold tracking-[0.18em] uppercase text-rockdale-blue">
          Student Life
        </p>
        <h2 className="mt-5 font-serif-display text-3xl md:text-4xl leading-[1.15] text-navy max-w-xl">
          School is more than the classroom.
        </h2>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {lifeCategories.map((category, i) => {
            const cover = category.images[0];
            return (
              <Reveal key={category.key} delay={i * 60}>
                <div className="relative aspect-square w-full overflow-hidden bg-light-blue">
                  <ImageTile
                    src={cover.image}
                    alt={cover.caption}
                    exists={imageExists(`images/${cover.image}`)}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    placeholderLabel={category.title}
                  />
                </div>
                <p className="mt-3 text-xs font-semibold tracking-[0.14em] uppercase text-rockdale-blue">
                  {category.title}
                </p>
                <p className="mt-1 text-sm text-muted">{category.description}</p>
              </Reveal>
            );
          })}
        </div>

        <Link
          href="/student-life"
          className="mt-10 inline-block text-sm font-semibold text-navy border-b border-gold pb-0.5 hover:text-rockdale-blue transition-colors"
        >
          See Student Life &rarr;
        </Link>
      </div>
    </section>
  );
}

export function LifeCategoryFull() {
  return (
    <>
      {lifeCategories.map((category, i) => (
        <section
          key={category.key}
          className={`py-16 md:py-24 ${i % 2 === 1 ? "bg-light-blue" : ""} ${
            i > 0 ? "border-t border-border" : ""
          }`}
        >
          <div className="mx-auto max-w-(--container-page) px-5 md:px-8">
            <div className="flex items-baseline gap-4 mb-10">
              <h2 className="font-serif-display text-2xl md:text-3xl text-navy">
                {category.title}
              </h2>
              <p className="text-sm md:text-base text-muted">{category.description}</p>
            </div>
            <ImageGrid
              items={resolveImages(
                category.images.map((img) => ({ ...img, title: img.caption, caption: "" }))
              )}
            />
          </div>
        </section>
      ))}
    </>
  );
}
