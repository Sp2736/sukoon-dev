import AboutHero from "@/src/components/about/AboutHero";
import WhoWeAre from "@/src/components/about/WhoWeAre";
import VisionAndApproach from "@/src/components/about/VisionAndApproach";
import InvestmentNetwork from "@/src/components/about/InvestmentNetwork";
import WhyInvestorsChooseUs from "@/src/components/about/WhyInvestorsChooseUs";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHero />
      <WhoWeAre />
      <VisionAndApproach />
      <InvestmentNetwork />
      <WhyInvestorsChooseUs />
    </main>
  );
}