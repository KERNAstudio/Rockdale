import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/content";

const footerLinks = [...navLinks, { label: "Contact", href: "/contact" }];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-(--container-page) px-5 md:px-8 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-serif-display text-2xl">ROCKDALE SCHOOL</p>
            <p className="mt-2 text-gold text-sm tracking-[0.14em] uppercase">
              {siteConfig.tagline}
            </p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              Since {siteConfig.foundedYear}, Rockdale School has been
              providing education in Visakhapatnam.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-[0.14em] uppercase text-white/50">
              Navigation
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {footerLinks.map((link) => (
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
              <li>
                {siteConfig.address.line2}
                <br />
                {siteConfig.address.line3}
              </li>
              <li>
                <a
                  href={siteConfig.address.mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  Open in Google Maps
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 text-xs text-white/50">
          <p>Copyright &copy; {new Date().getFullYear()} Rockdale School</p>
        </div>
      </div>
    </footer>
  );
}
