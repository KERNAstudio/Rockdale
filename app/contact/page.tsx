import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactSection from "@/components/ContactSection";
import FAQ from "@/components/FAQ";
import { siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: `Reach Rockdale School at ${siteConfig.address.full} or call ${siteConfig.phone}.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get in Touch"
        title="We're available a call or message away."
        description="Have questions or need more information? Reach out and our office team will be glad to help."
      />
      <ContactSection />
      <FAQ />
    </>
  );
}
