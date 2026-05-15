import ContactHero from "@/src/components/ContactHero";
import Footer from "@/src/components/Footer";
// Import your Navbar here if it's not already in your global layout.tsx
// import Navbar from "@/components/Navbar";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      {/* <Navbar /> -- Uncomment if needed here */}

      {/* 1. The Hero & Form Section */}
      <ContactHero />

      {/* 2. The Map Section (From the Figma Design) */}
      <section className="w-full bg-white py-[60px] md:py-[100px] px-6 md:px-16 lg:px-[100px]">
        <div className="max-w-[1920px] mx-auto">
          {/* Rounded Map Container */}
          <div className="w-full h-[350px] md:h-[500px] rounded-[32px] overflow-hidden shadow-sm border border-gray-100 bg-gray-50 relative">
            {/* For now, you can drop the static map image from Figma here. 
              Later, you can easily swap this <img> out for a live Google Maps <iframe>! 
            */}
            <img
              src="/contact-map.jpg"
              alt="Sukoon Office Location Map"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 3. The Footer Section (Contains the CTA & Links) */}
      <Footer />
    </main>
  );
}
