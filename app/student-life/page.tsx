import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import LifeAtRockdale from "@/components/LifeAtRockdale";
import CampusSection from "@/components/CampusSection";
import Testimonials from "@/components/Testimonials";
import AdmissionsCTA from "@/components/AdmissionsCTA";

export const metadata: Metadata = {
  title: "Student Life",
  description:
    "Music, dance, art, drama, sports and public speaking — student life at Rockdale School reaches well beyond the classroom.",
};

export default function StudentLifePage() {
  return (
    <>
      <PageHeader
        eyebrow="Student Life"
        title="School is more than the syllabus."
        description="Music, dance, art, drama, sports and public speaking — open to every student, every year."
      />
      <LifeAtRockdale />
      <CampusSection />
      <Testimonials />
      <AdmissionsCTA />
    </>
  );
}
