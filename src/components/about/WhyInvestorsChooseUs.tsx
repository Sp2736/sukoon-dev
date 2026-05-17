import React from "react";
import Image from "next/image";

export default function WhyInvestorsChooseUs() {
  const cards = [
    {
      title: "Verified Property Listings",
      description: "Only genuine and legally verified properties",
      icon: (
        <div className="relative w-full h-full">
          <Image
            src="/verified.png"
            alt="Verified Property Listings"
            fill
            className="object-contain"
          />
        </div>
      ),
    },
    {
      title: "Expert Guidance",
      description: "Professional support throughout your buying journey.",
      icon: (
        <div className="relative w-full h-full">
          <Image
            src="/guidance.png"
            alt="Expert Guidance"
            fill
            className="object-contain"
          />
        </div>
      ),
    },
    {
      title: "Transparent Process",
      description: "No hidden surprises—just honest deals",
      icon: (
        <div className="relative w-full h-full">
          <Image
            src="/process.png"
            alt="Transparent Process"
            fill
            className="object-contain"
          />
        </div>
      ),
    },
    {
      title: "Strong ROI Opportunities",
      description: "Properties selected with future growth potential",
      icon: (
        <div className="relative w-full h-full">
          <Image
            src="/roi.png"
            alt="Strong ROI Opportunities"
            fill
            className="object-contain"
          />
        </div>
      ),
    },
  ];

  return (
    <section className="bg-[#F7F7F7] w-full pt-[80px] lg:pt-[110px] pb-[80px] lg:pb-[120px] px-6 lg:px-[90px] font-sans">
      <div className="max-w-[1700px] mx-auto flex flex-col items-center">
        {/* MAIN HEADING */}
        <h2 className="text-[#1E1E1E] font-bold text-[38px] lg:text-[50px] leading-[1.1] lg:leading-[1.08] tracking-[-1px] text-center max-w-[900px]">
          Why Investors Choose Us
        </h2>

        {/* DESCRIPTION TEXT */}
        <p className="text-[#333333] font-normal text-[16px] lg:text-[18px] leading-[1.6] lg:leading-[1.7] text-center max-w-[800px] mt-[16px] lg:mt-[20px]">
          Discover what makes us the trusted choice for buyers, investors,
          <br className="hidden sm:block" /> and businesses seeking the right
          property opportunities
        </p>

        {/* CARD GRID SECTION */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px] xl:gap-[28px] mt-[50px] lg:mt-[60px] justify-items-center">
          {cards.map((card, index) => (
            <div
              key={index}
              /* APPLIED NEW LAYOUT:
                 - border border-[rgba(0,0,0,0.06)] for the 1px width
                 - rounded-[30px] for the 30px radius
                 - lg:max-w-[409px] for the exact 409px width constraint
                 - height is now h-full (or h-auto) so it hugs the content without hard limits
                 - bg-[#EEF5F7] to keep opacity 1
              */
              className="bg-[#EEF5F7] border border-[rgba(0,0,0,0.06)] rounded-[30px] p-[28px] lg:p-[34px_30px] h-full w-full max-w-[409px] flex flex-col items-start text-left transition-shadow hover:shadow-sm"
            >
              {/* Icon Container (Kept large at 56px) */}
              <div className="relative w-[44px] h-[44px] lg:w-[50px] lg:h-[50px] text-[#59B8EA] mb-[16px] lg:mb-[20px] flex-shrink-0">
                {card.icon}
              </div>

              {/* Text pushed to the bottom of the card using mt-10 */}
              <div className="flex flex-col mt-10 w-full">
                <h3 className="text-[#1E1E1E] font-bold text-[20px] lg:text-[19px] leading-[1.3] mb-[8px]">
                  {card.title}
                </h3>
                <p className="text-[#8B8B8B] font-normal text-[10px] lg:text-[13px] leading-[1.6]">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
