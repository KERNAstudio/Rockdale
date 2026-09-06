import { founders } from "@/lib/content";

export default function FounderBlock({ compact = false }: { compact?: boolean }) {
  return (
    <dl className={compact ? "space-y-3" : "grid sm:grid-cols-2 gap-8"}>
      {founders.map((founder) => (
        <div key={founder.name} className={compact ? "" : "border-t border-border pt-5"}>
          <dt className="font-serif-display text-lg text-navy">{founder.name}</dt>
          <dd className="mt-1 text-sm text-rockdale-blue font-medium">{founder.role}</dd>
        </div>
      ))}
    </dl>
  );
}
