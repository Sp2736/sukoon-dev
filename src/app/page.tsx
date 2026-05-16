import HeroSection from "@/src/components/home/HeroSection";
import AboutSection from "@/src/components/home/AboutSection";
import InvestorCategories from "@/src/components/home/InvestorCategories";
import LandOpportunities from "@/src/components/home/LandOpportunities";
import Testimonials from "@/src/components/home/Testimonials";
import WhyChooseUs from "@/src/components/home/WhyChooseUs";

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