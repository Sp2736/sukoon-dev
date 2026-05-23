import ContactHero from "@/src/components/contact/ContactHero";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      {/* <Navbar /> -- Uncomment if needed here */}

      {/* 1. The Hero & Form Section */}
      <ContactHero />

      {/* 2. The Interactive Map Section */}
      <section className="w-full bg-white py-[60px] md:py-[80px] px-6 md:px-16 lg:px-[100px]">
        <div className="max-w-[1920px] mx-auto">
          {/* Rounded Map Container */}
          <div className="w-full h-[350px] md:h-[500px] rounded-[32px] overflow-hidden shadow-sm border border-gray-100 bg-gray-50 relative">
            {/* Live Google Maps iframe centered on Dabhoi */}
            <iframe
              src="https://maps.google.com/maps?q=Dabhoi,+Gujarat&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sukoon Office Location"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
