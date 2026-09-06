export default function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="pt-16 md:pt-24 pb-12 md:pb-16">
      <div className="mx-auto max-w-(--container-page) px-5 md:px-8">
        <p className="text-xs md:text-sm font-semibold tracking-[0.18em] uppercase text-rockdale-blue">
          {eyebrow}
        </p>
        <h1 className="mt-5 font-serif-display text-4xl md:text-6xl leading-[1.1] text-navy max-w-3xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-base md:text-lg text-muted leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
