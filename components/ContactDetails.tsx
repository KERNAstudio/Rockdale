import { siteConfig } from "@/lib/content";

export default function ContactDetails() {
  const items = [
    { label: "Call", value: siteConfig.phone, href: siteConfig.phoneHref },
    { label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
    { label: "WhatsApp", value: "Message the school", href: siteConfig.whatsappHref, external: true },
    {
      label: "Visit",
      value: `${siteConfig.address.line2}, ${siteConfig.address.line3}`,
      href: siteConfig.address.mapsHref,
      external: true,
    },
  ];

  return (
    <dl className="grid sm:grid-cols-2 gap-8">
      {items.map((item) => (
        <div key={item.label} className="border-t border-border pt-4">
          <dt className="text-xs font-semibold tracking-[0.14em] uppercase text-muted">
            {item.label}
          </dt>
          <dd className="mt-2">
            <a
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="text-base font-medium text-navy hover:text-rockdale-blue transition-colors"
            >
              {item.value}
            </a>
          </dd>
        </div>
      ))}
    </dl>
  );
}
