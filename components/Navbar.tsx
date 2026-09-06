"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-off-white border-b border-border"
          : "bg-off-white border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-(--container-page) px-5 md:px-8 flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="shrink-0 leading-tight">
          <span className="block font-serif-display text-lg md:text-xl tracking-wide text-navy">
            ROCKDALE SCHOOL
          </span>
          <span className="hidden md:block text-[10px] font-semibold tracking-[0.2em] text-muted">
            VISAKHAPATNAM
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-8 text-sm font-medium text-navy/85">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-rockdale-blue transition-colors"
                  aria-current={pathname === link.href ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href="/admissions"
          className="hidden lg:inline-flex items-center rounded-full bg-navy text-white text-sm font-medium px-5 py-2.5 hover:bg-deep-blue transition-colors shrink-0"
        >
          Enquire
        </Link>

        <Link
          href="/admissions"
          className="lg:hidden inline-flex items-center rounded-full bg-navy text-white text-xs font-medium px-4 py-2 shrink-0"
        >
          Enquire
        </Link>
      </div>

      <nav
        aria-label="Primary"
        className="lg:hidden border-t border-border overflow-x-auto no-scrollbar"
      >
        <ul className="flex items-center gap-6 px-5 md:px-8 py-3 text-sm font-medium text-navy/85 whitespace-nowrap w-max min-w-full">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="hover:text-rockdale-blue transition-colors"
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
