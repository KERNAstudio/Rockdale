import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import AchievementsSection from "@/components/AchievementsSection";
import AdmissionsCTA from "@/components/AdmissionsCTA";

export const metadata: Metadata = {
  title: "Achievements",
  description:
    "Meet Rockdale School alumni who have gone on to careers in research, finance and accountancy — a look at where our students go.",
};

export default function AchievementsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Alumni"
        title="Where our students go matters."
        description="At Rockdale School, we believe excellence deserves recognition. Here is a look at some of the milestones our alumni have reached."
      />
      <AchievementsSection showLink={false} />
      <AdmissionsCTA />
    </>
  );
}
