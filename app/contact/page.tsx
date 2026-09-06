import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactSection from "@/components/ContactSection";
import { siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: `Reach Rockdale School at ${siteConfig.address.full} or call ${siteConfig.phone}.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Come meet Rockdale."
        description="Have questions or need more information? Reach out and our office team will be glad to help."
      />
      <ContactSection showHeader={false} />
    </>
  );
}
