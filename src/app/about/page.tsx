import AboutHero from "@/src/components/AboutHero";
import WelcomeSection from "@/src/components/WelcomeSection";
import VisionSection from "@/src/components/VisionSection";
import MissionSection from "@/src/components/MissionSection";
import WhyChooseUsSection from "@/src/components/WhyChooseUsSection";

export default function AboutPage() {
  return (
    <main className="w-full bg-white flex flex-col min-h-screen">
      <AboutHero />
      <WelcomeSection />
      <VisionSection />
      <MissionSection />
      <WhyChooseUsSection />
    </main>
  );
}