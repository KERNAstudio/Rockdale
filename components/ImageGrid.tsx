import ImageTile from "./ImageTile";
import Reveal from "./Reveal";

type Aspect = "landscape" | "portrait" | "square" | "wide";

export type GridImage = {
  title: string;
  caption: string;
  image: string;
  aspect: Aspect;
  exists: boolean;
};

const spanClass: Record<Aspect, string> = {
  wide: "col-span-2 lg:col-span-3",
  landscape: "col-span-2 lg:col-span-2",
  portrait: "col-span-1",
  square: "col-span-1",
};

const aspectClass: Record<Aspect, string> = {
  wide: "aspect-[21/9]",
  landscape: "aspect-[4/3]",
  portrait: "aspect-[3/4]",
  square: "aspect-square",
};

// Client-safe: expects `exists` to already be resolved server-side
// (see lib/images.ts resolveImages) so this never touches the filesystem.
export default function ImageGrid({ items }: { items: GridImage[] }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {items.map((item, i) => (
        <Reveal
          key={item.title}
          delay={(i % 3) * 60}
          className={spanClass[item.aspect]}
        >
          <figure className="group">
            <div
              className={`relative w-full overflow-hidden bg-light-blue ${aspectClass[item.aspect]}`}
            >
              <ImageTile
                src={item.image}
                alt={item.title}
                exists={item.exists}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                placeholderLabel={item.title}
              />
            </div>
            <figcaption className="mt-3">
              <p className="text-xs font-semibold tracking-[0.14em] uppercase text-rockdale-blue">
                {item.title}
              </p>
              <p className="mt-1 text-sm text-muted">{item.caption}</p>
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  );
}
