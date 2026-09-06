import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-24 md:py-36">
      <div className="mx-auto max-w-(--container-page) px-5 md:px-8 text-center">
        <p className="text-xs md:text-sm font-semibold tracking-[0.18em] uppercase text-rockdale-blue">
          404
        </p>
        <h1 className="mt-5 font-serif-display text-3xl md:text-5xl leading-[1.15] text-navy">
          This page doesn&apos;t exist.
        </h1>
        <p className="mt-5 max-w-md mx-auto text-base md:text-lg text-muted leading-relaxed">
          The page you&apos;re looking for may have moved or never existed.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-navy text-white text-sm font-medium px-7 py-3.5 hover:bg-deep-blue transition-colors"
        >
          Back to homepage
        </Link>
      </div>
    </section>
  );
}
