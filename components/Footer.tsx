import Link from "next/link";
import { siteConfig } from "@/lib/content";

const quickLinks = [
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Achievements", href: "/achievements" },
  { label: "Gallery", href: "/gallery" },
  { label: "Admissions", href: "/admissions" },
  { label: "Contact", href: "/contact" },
];

const infoLinks = [
  { label: "School Timings", href: "/contact#faq" },
  { label: "Curriculum", href: "/academics" },
  { label: "Facilities", href: "/about#facilities" },
  { label: "FAQs", href: "/contact#faq" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-(--container-page) px-5 md:px-8 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-serif-display text-2xl">ROCKDALE SCHOOL</p>
            <p className="mt-2 text-gold text-sm tracking-[0.14em] uppercase">
              A School for Life
            </p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              Quality education should be accessible. Since {siteConfig.foundedYear},
              Rockdale has been committed to providing meaningful, affordable
              learning to the children of Visakhapatnam.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-[0.14em] uppercase text-white/50">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/80 hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-[0.14em] uppercase text-white/50">
              Information
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {infoLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/80 hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="mt-8 text-sm font-semibold tracking-[0.14em] uppercase text-white/50">
              Contact
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-white/80">
              <li>
                <a href={siteConfig.phoneHref} className="hover:text-gold transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-gold transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li>{siteConfig.address.line2}, {siteConfig.address.line3}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>Copyright &copy; {new Date().getFullYear()} Rockdale School</p>
          <p>Marripalem, Visakhapatnam, Andhra Pradesh</p>
        </div>
      </div>
    </footer>
  );
}
