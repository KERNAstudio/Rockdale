import { homeFacts } from "@/lib/content";
import Reveal from "./Reveal";

export default function HomeFacts() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-(--container-page) px-5 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {homeFacts.map((fact, i) => (
            <Reveal
              key={fact.label}
              delay={i * 60}
              className={`py-8 md:py-12 pr-4 border-border ${
                i % 2 === 0 ? "border-r" : ""
              } md:border-r md:last:border-r-0 ${
                i < 2 ? "border-b md:border-b-0" : ""
              }`}
            >
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-muted">
                {fact.label}
              </p>
              <p className="mt-2 font-serif-display text-2xl md:text-3xl text-navy">
                {fact.value}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
