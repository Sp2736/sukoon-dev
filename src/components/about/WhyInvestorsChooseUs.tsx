import React from "react";

export default function WhyInvestorsChooseUs() {
  const cards = [
    {
      title: "Verified Property Listings",
      description: "Only genuine and legally verified properties",
      icon: (
        // Shield Check / Verified Icon
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      ),
    },
    {
      title: "Expert Guidance",
      description: "Professional support throughout your buying journey.",
      icon: (
        // User/Compass/Guidance Icon
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      title: "Transparent Process",
      description: "No hidden surprises—just honest deals",
      icon: (
        // Eye / Transparency Icon
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
    },
    {
      title: "Strong ROI Opportunities",
      description: "Properties selected with future growth potential",
      icon: (
        // Trending Up / Chart Icon
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-[#F7F7F7] w-full pt-[80px] lg:pt-[110px] pb-[80px] lg:pb-[120px] px-6 lg:px-[90px] font-sans">
      <div className="max-w-[1500px] mx-auto flex flex-col items-center">
        
        {/* MAIN HEADING (Restrained & Editorial) */}
        <h2 className="text-[#1E1E1E] font-bold text-[42px] lg:text-[64px] leading-[1.1] lg:leading-[1.08] tracking-[-1px] text-center max-w-[900px]">
          Why Investors Choose Us
        </h2>

        {/* DESCRIPTION TEXT */}
        <p className="text-[#333333] font-normal text-[18px] lg:text-[22px] leading-[1.6] lg:leading-[1.7] text-center max-w-[900px] mt-[20px] lg:mt-[28px]">
          Discover what makes us the trusted choice for buyers, investors, and businesses seeking the right property opportunities
        </p>

        {/* CARD GRID SECTION */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px] lg:gap-[28px] mt-[50px] lg:mt-[70px]">
          
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="bg-[#EEF5F7] rounded-[28px] p-[30px] lg:p-[34px_30px] lg:min-h-[300px] flex flex-col items-start text-left w-full"
            >
              {/* CARD ICON (Decorative, Not Dominant) */}
              <div className="w-[42px] h-[42px] text-[#59B8EA] mb-[30px] lg:mb-[40px] flex-shrink-0">
                {card.icon}
              </div>
              
              {/* CARD CONTENT */}
              <div className="flex flex-col flex-grow">
                <h3 className="text-[#1E1E1E] font-bold text-[22px] lg:text-[24px] leading-[1.3] mb-[12px] lg:mb-[16px]">
                  {card.title}
                </h3>
                <p className="text-[#8B8B8B] font-normal text-[16px] lg:text-[18px] leading-[1.6]">
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