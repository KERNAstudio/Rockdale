import SectionHeader from "./SectionHeader";
import ContactForm from "./ContactForm";
import { siteConfig, contactContent } from "@/lib/content";

export default function ContactSection({
  showHeader = true,
}: {
  showHeader?: boolean;
}) {
  return (
    <section id="contact" className="py-20 md:py-28 bg-light-blue scroll-mt-20">
      <div className="mx-auto max-w-(--container-page) px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            {showHeader && (
              <SectionHeader
                eyebrow={contactContent.eyebrow}
                heading={contactContent.headline}
              />
            )}

            <dl className="mt-10 space-y-6 text-sm md:text-base">
              <div>
                <dt className="font-semibold text-navy">Address</dt>
                <dd className="mt-1 text-muted">
                  {siteConfig.address.line1}
                  <br />
                  {siteConfig.address.line2}
                  <br />
                  {siteConfig.address.line3}
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-navy">Phone</dt>
                <dd className="mt-1 text-muted">
                  <a href={siteConfig.phoneHref} className="hover:text-rockdale-blue">
                    {siteConfig.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-navy">Email</dt>
                <dd className="mt-1 text-muted">
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-rockdale-blue">
                    {siteConfig.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-navy">Hours</dt>
                <dd className="mt-1 text-muted">{siteConfig.hours}</dd>
              </div>
            </dl>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href={siteConfig.address.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-lift inline-flex items-center justify-center rounded-full bg-navy text-white text-sm font-medium px-6 py-3 hover:bg-deep-blue transition-colors"
              >
                Open in Google Maps
              </a>
              <a
                href={siteConfig.phoneHref}
                className="btn-press inline-flex items-center justify-center rounded-full border border-navy/25 text-navy text-sm font-medium px-6 py-3 hover:border-navy transition-colors"
              >
                Call Us
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-off-white p-6 md:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
