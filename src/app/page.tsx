import HeroSection from "@/src/components/HeroSection";
import AboutSection from "@/src/components/AboutSection";
import InvestorCategories from "@/src/components/InvestorCategories";
import LandOpportunities from "@/src/components/LandOpportunities";
import Testimonials from "@/src/components/Testimonials";
import WhyChooseUs from "@/src/components/WhyChooseUs";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <AboutSection />
      <InvestorCategories />
      <WhyChooseUs />
      <LandOpportunities />
      <Testimonials />
    </div>
  );
}