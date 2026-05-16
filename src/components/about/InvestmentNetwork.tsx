import Image from "next/image";

export default function InvestmentNetwork() {
  const categories = [
    "Agricultural Land",
    "Non-Agricultural (NA) Land",
    "High-growth investment zones",
  ];

  // Coordinates explicitly mapped to follow a diagonal road trajectory:
  // Bottom-center -> Middle -> Upper-Right.
  // (You may slightly tweak the top/left percentages to perfectly center the nodes on the specific road in dabhoi-land.png)
  const markers = [
    { label: "Kapurai", top: "28%", left: "75%" },
    { label: "Dabhoi Road", top: "55%", left: "58%" },
    { label: "Dabhoi", top: "82%", left: "45%" },
  ];

  return (
    // One continuous cinematic section. No bottom padding so the image runs edge-to-edge.
    <section className="bg-[#F7F7F7] w-full pt-[100px] lg:pt-[120px] pb-0 font-sans overflow-hidden flex flex-col items-center">
      {/* UPPER EDITORIAL CONTENT (Floating above the landscape) */}
      <div className="container mx-auto px-6 flex flex-col items-center text-center relative z-20">
        {/* PARTNER LOGO CARD */}
        <div className="w-[230px] h-[125px] bg-white rounded-[24px] border border-black/5 shadow-[0_6px_18px_rgba(0,0,0,0.04)] flex items-center justify-center">
          {/* Logo Container */}
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

        {/* MAIN HEADING (Restrained, Editorial Typography) */}
        <h2 className="text-[#1E1E1E] font-bold text-[42px] lg:text-[58px] leading-[1.05] tracking-[-1px] mt-[40px]">
          Our Investment Network
        </h2>

        {/* DESCRIPTION TEXT (Subtle, Muted) */}
        <p className="text-[#333333] font-normal text-[18px] lg:text-[18px] leading-[1.5] max-w-[900px] mt-[24px] mx-auto">
          For specialized land investment opportunities, we collaborate with
          AbbasLandVision, focusing on
        </p>

        {/* INVESTMENT CATEGORY TAGS ROW */}
        {/* Padding bottom added here just to give space before the image cuts in behind it */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 lg:gap-[60px] mt-[35px] pb-[20px]">
          {categories.map((category, index) => (
            <div key={index} className="flex items-center gap-[10px]">
              {/* Subtle Blue Verification/Star Icon */}
              <div className="w-[20px] h-[20px] text-[#58B8EB] flex-shrink-0">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-full h-full"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <span className="text-[#1E1E1E] font-semibold text-[17px] lg:text-[19px]">
                {category}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* LOWER IMMERSIVE LANDSCAPE IMAGE */}
      {/* CRITICAL FIX: 
          1. -mt-[80px] pulls the image upward to sit directly behind the categories.
          2. z-10 puts it behind the z-20 text content.
      */}
      <div className="relative w-full h-[570px] -mt-[40px] lg:-mt-[100px] z-10">
        <Image
          src="/dabhoi-road.png"
          alt="Dabhoi Land Investment Corridor"
          fill
          className="object-cover object-center block"
          sizes="100vw"
          priority
        />

        {/* LOCATION CALLOUT MARKERS (Anchored to the Road Spine) */}
        {markers.map((marker, index) => (
          <div
            key={index}
            // -translate-y-full ensures the BOTTOM of the node touches the exact road coordinate
            className="absolute flex flex-col items-center transform -translate-x-1/2 -translate-y-full z-30"
            style={{ top: marker.top, left: marker.left }}
          >
            {/* Pill Label */}
            <div className="bg-[rgba(120,120,120,0.75)] backdrop-blur-[8px] rounded-[16px] px-[20px] py-[10px] flex items-center gap-2 shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
              {/* White Location Pin Icon */}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-[14px] h-[14px] text-white"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span className="text-white font-medium text-[13px] whitespace-nowrap">
                {marker.label}
              </span>
            </div>

            {/* Dotted Connector Line (Extending UP from the road) */}
            <div className="h-[40px] lg:h-[70px] border-l-[2px] border-dashed border-[rgba(255,255,255,0.75)]"></div>

            {/* Circular Node (Anchored exactly ON the road coordinate) */}
            <div className="w-[12px] h-[12px] bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)] relative -mt-[2px]"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
