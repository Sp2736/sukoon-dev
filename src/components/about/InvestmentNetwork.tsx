import Image from "next/image";

export default function InvestmentNetwork() {
  const categories = [
    "Agricultural Land",
    "Non-Agricultural (NA) Land",
    "High-growth investment zones",
  ];

  const markers = [
    { label: "Kapurai", top: "28%", left: "75%" },
    { label: "Dabhoi Road", top: "55%", left: "58%" },
    { label: "Dabhoi", top: "82%", left: "45%" },
  ];

  return (
    <section className="bg-[#F7F7F7] w-full pt-[100px] lg:pt-[120px] pb-0 font-sans overflow-hidden flex flex-col items-center">
      <div className="container mx-auto px-6 flex flex-col items-center text-center relative z-20">
        <div className="w-[230px] h-[125px] bg-white rounded-[24px] border border-black/5 shadow-[0_6px_18px_rgba(0,0,0,0.04)] flex items-center justify-center">
          <div className="relative w-[180px] h-[78px]">
            <Image
              src="/abbas-logo-about.png"
              alt="Abbas Land Vision Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* MAIN HEADING (Scaled down) */}
        <h2 className="text-[#1E1E1E] font-bold text-[36px] lg:text-[46px] leading-[1.05] tracking-[-1px] mt-[40px]">
          Our Investment Network
        </h2>

        {/* DESCRIPTION TEXT (Scaled down) */}
        <p className="text-[#333333] font-normal text-[16px] lg:text-[17px] leading-[1.5] max-w-[800px] mt-[20px] mx-auto">
          For specialized land investment opportunities, we collaborate with
          AbbasLandVision, focusing on
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-5 lg:gap-[50px] mt-[30px] pb-[20px]">
          {categories.map((category, index) => (
            <div key={index} className="flex items-center gap-[8px]">
              <div className="relative w-[18px] h-[18px] flex-shrink-0">
                <Image
                  src="/verified-check.png"
                  alt="Category Star"
                  fill
                  className="object-contain"
                />
              </div>
              {/* Labels Scaled down */}
              <span className="text-[#1E1E1E] font-semibold text-[15px] lg:text-[17px]">
                {category}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative w-full h-[570px] -mt-[40px] lg:-mt-[100px] z-10">
        <Image
          src="/dabhoi-road.png"
          alt="Dabhoi Land Investment Corridor"
          fill
          className="object-cover object-center block"
          sizes="100vw"
          priority
        />

        {markers.map((marker, index) => (
          <div
            key={index}
            className="absolute flex flex-col items-center transform -translate-x-1/2 -translate-y-full z-30"
            style={{ top: marker.top, left: marker.left }}
          >
            <div className="bg-[rgba(120,120,120,0.75)] backdrop-blur-[8px] rounded-[16px] px-[16px] py-[8px] flex items-center gap-2 shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-[12px] h-[12px] text-white"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span className="text-white font-medium text-[12px] whitespace-nowrap">
                {marker.label}
              </span>
            </div>
            <div className="h-[40px] lg:h-[60px] border-l-[2px] border-dashed border-[rgba(255,255,255,0.75)]"></div>
            <div className="w-[10px] h-[10px] bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)] relative -mt-[2px]"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
