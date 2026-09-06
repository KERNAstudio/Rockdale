import Hero from "@/components/Hero";
import HomeFacts from "@/components/HomeFacts";
import AboutPreview from "@/components/AboutPreview";
import AcademicPath from "@/components/AcademicPath";
import { LifeCategoryPreview } from "@/components/LifeCategoryGrid";
import GalleryPreview from "@/components/GalleryPreview";
import AchievementsSection from "@/components/AchievementsSection";
import AdmissionsCTA from "@/components/AdmissionsCTA";

// One primary job per page: this page answers "what is Rockdale and what
// does life here feel like?" — everything else has its own dedicated page
// and is only teased here, never repeated in full.
export default function Home() {
  return (
    <>
      <Hero />
      <HomeFacts />
      <AboutPreview />
      <AcademicPath />
      <LifeCategoryPreview />
      <GalleryPreview />
      <AchievementsSection featuredOnly showLink />
      <AdmissionsCTA />
    </>
  );
}
