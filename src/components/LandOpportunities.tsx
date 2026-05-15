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
    <section className="relative w-full min-h-[800px] flex items-center overflow-hidden bg-white">
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

      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-10 md:px-16 lg:px-[100px] pt-[40px] lg:pt-[50px] pb-[80px] lg:pb-[100px] flex flex-col lg:flex-row justify-between items-end gap-12">
        {/* LEFT COLUMN: Main Content */}
        <div className="w-full max-w-[750px] flex flex-col items-start text-left">
          {/* Abbas Land Vision Logo - Sized back up! */}
          <div className="mb-[40px] flex items-center">
            <div className="flex flex-col">
              <img
                src={abbasLogoSrc}
                alt="Abbas Land Vision"
                className="h-15 w-auto object-contain cursor-pointer transition-all duration-300"
              />
            </div>
          </div>

          {/* Heading */}
          <h2 className="font-heading font-bold text-[#1F1F1F] text-[36px] md:text-[42px] leading-[1.1] mb-[24px]">
            Invest in High-Potential Land Opportunities
          </h2>

          {/* Subheading */}
          <p className="font-body font-normal text-[#1F1F1F]/80 text-[12px] md:text-[18px] leading-[1.6] mb-[40px] max-w-[650px]">
            Explore agricultural and non-agricultural land options with strong
            growth potential and long-term returns. Ideal for investors looking
            to secure future value
          </p>

          {/* Button */}
          <Link
            href="/contact"
            className="inline-block bg-[#52B7EC] text-white px-6 py-3 rounded-full font-heading font-semibold text-[14px] hover:brightness-110 transition-colors mb-[60px]"
          >
            Talk to an Expert
          </Link>

          {/* 2x2 Grid for Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-12">
            {highlights.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="w-[48px] h-[48px] rounded-full bg-[#52B7EC]/10 flex items-center justify-center shrink-0">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-[24px] h-[24px] object-contain"
                  />
                </div>
                <span className="font-heading font-semibold text-[18px] text-[#1F1F1F]">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: Floating Collaboration Card */}
        <div className="w-full lg:w-auto flex justify-start lg:justify-end">
          <div className="bg-white/20 backdrop-blur-md border border-white/40 rounded-[16px] p-6 max-w-[550px] shadow-lg flex items-start gap-4">
            <div className="shrink-0 mt-1">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 21.5C12 21.5 20.5 15.8333 20.5 10C20.5 5.30558 16.6944 1.5 12 1.5C7.30558 1.5 3.5 5.30558 3.5 10C3.5 15.8333 12 21.5 12 21.5Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 12.5C13.3807 12.5 14.5 11.3807 14.5 10C14.5 8.61929 13.3807 7.5 12 7.5C10.6193 7.5 9.5 8.61929 9.5 10C9.5 11.3807 10.6193 12.5 12 12.5Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <p className="font-body font-medium text-[19px] text-white leading-[1.6]">
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
