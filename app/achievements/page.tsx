import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import AchievementsSection from "@/components/AchievementsSection";
import AdmissionsCTA from "@/components/AdmissionsCTA";
import { achievementsContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Achievements",
  description:
    "Meet Rockdale School alumni who have gone on to careers in research, finance and accountancy — a look at where our students go.",
};

export default function AchievementsPage() {
  return (
    <>
      <PageHeader
        eyebrow={achievementsContent.eyebrow}
        title={achievementsContent.headline}
        description={achievementsContent.intro}
      />
      <AchievementsSection showLink={false} showHeader={false} />
      <AdmissionsCTA />
    </>
  );
}
