export default function SectionHeader({
  eyebrow,
  heading,
  description,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  heading: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <p
          className={`text-xs md:text-sm font-semibold tracking-[0.18em] uppercase mb-4 ${
            light ? "text-gold" : "text-rockdale-blue"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-serif-display text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.15] ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {heading}
      </h2>
      {description && (
        <p
          className={`mt-5 text-base md:text-lg leading-relaxed ${
            light ? "text-white/75" : "text-muted"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
