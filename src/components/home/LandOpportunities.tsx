import Link from "next/link";

const highlights = [
  { title: "Long-Term Returns", icon: "/icon-long-term.png" },
  { title: "Secure Investment", icon: "/icon-secure.png" },
  { title: "Prime Locations", icon: "/icon-prime.png" },
  { title: "Strong Growth Potential", icon: "/icon-growth.png" },
];

export default function LandOpportunities() {
  // Logo logic referred from Navbar
  const abbasLogoSrc = "/abbas-logo-cropped.svg";

  return (
    <section className="relative w-full py-16 lg:py-0 lg:min-h-[800px] flex items-center overflow-hidden bg-white">
      {/* --- BACKGROUND LAYERS --- */}

      {/* 1. Base Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/land-opportunities-bg.png')" }}
      />

      {/* 2. Overall Image Wash */}
      <div className="absolute inset-0 z-0 bg-white/20 mix-blend-normal" />

      {/* 3. Left-to-Right Blur */}
      <div className="absolute left-0 inset-y-0 w-full lg:w-[80%] z-0 bg-gradient-to-r from-white via-white/90 to-transparent" />

      {/* 4. Top & Bottom Seamless Blends */}
      <div className="absolute top-0 left-0 w-full h-[80px] z-0 bg-gradient-to-b from-white via-white/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[150px] z-0 bg-gradient-to-t from-white via-white/30 to-transparent" />

      {/* --- CONTENT CONTAINER --- */}

      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-6 md:px-16 lg:px-[100px] pt-4 lg:pt-[50px] pb-8 lg:pb-[100px] flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
        {/* LEFT COLUMN: Main Content */}
        <div className="w-full max-w-[750px] flex flex-col items-start text-left">
          {/* Abbas Land Vision Logo */}
          <div className="mb-8 lg:mb-[40px] flex items-center">
            <div className="flex flex-col">
              <img
                src={abbasLogoSrc}
                alt="Abbas Land Vision"
                className="h-12 lg:h-15 w-auto object-contain cursor-pointer transition-all duration-300"
              />
            </div>
          </div>

          {/* Heading */}
          <h2 className="font-heading font-bold text-[#1F1F1F] text-[28px] md:text-[36px] lg:text-[42px] leading-[1.2] lg:leading-[1.1] mb-[24px]">
            Invest in High-Potential Land Opportunities
          </h2>

          {/* Subheading */}
          <p className="font-body font-normal text-[#1F1F1F]/80 text-[14px] md:text-[16px] lg:text-[18px] leading-[1.6] mb-8 lg:mb-[40px] max-w-[650px]">
            Explore agricultural and non-agricultural land options with strong
            growth potential and long-term returns. Ideal for investors looking
            to secure future value
          </p>

          {/* Button */}
          <Link
            href="/contact"
            className="inline-block bg-[#52B7EC] text-white px-6 py-3 rounded-full font-heading font-semibold text-[14px] hover:brightness-110 transition-colors mb-12 lg:mb-[60px]"
          >
            Talk to an Expert
          </Link>

          {/* 2x2 Grid for Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 lg:gap-y-8 gap-x-12">
            {highlights.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="w-[40px] h-[40px] lg:w-[48px] lg:h-[48px] rounded-full bg-[#52B7EC]/10 flex items-center justify-center shrink-0">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-[20px] h-[20px] lg:w-[24px] lg:h-[24px] object-contain"
                  />
                </div>
                <span className="font-heading font-semibold text-[16px] lg:text-[18px] text-[#1F1F1F]">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: Floating Collaboration Card */}
        <div className="w-full lg:w-auto flex justify-start lg:justify-end mt-4 lg:mt-0">
          {/* Smart Glass: Black on Mobile, original White/20 on Desktop */}
          <div className="bg-black/50 lg:bg-white/20 backdrop-blur-md border border-white/20 lg:border-white/40 rounded-[16px] p-6 max-w-[550px] shadow-lg flex items-start gap-4 transition-colors duration-300">
            <div className="shrink-0 mt-1">
              <img
                src="/location-marker-white.png"
                alt="location"
                className="w-[30px] h-[30px] object-contain opacity-95"
              />
            </div>

            <p className="font-body font-medium text-[16px] lg:text-[19px] text-white leading-[1.6]">
              In collaboration with{" "}
              <span className="font-bold">AbbasLandVision</span>, specializing
              in land investments in{" "}
              <span className="font-bold">
                Vadodara (Dabhoi Road, from Kapurai to Dabhoi)
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
