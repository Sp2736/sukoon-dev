import React from "react";

export default function WhoWeAre() {
  const stats = [
    { number: "500+", label: "Properties Sold" },
    { number: "300+", label: "Happy Clients" },
    { number: "10+", label: "Years Of Experience" },
    { number: "50+", label: "Investment Projects" },
  ];

  return (
    <section className="bg-[#F5F5F5] w-full flex justify-center py-16 px-6 lg:py-[100px] lg:px-[90px] font-sans">
      <div className="w-full max-w-[1800px] flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-[10%]">
        
        {/* LEFT COLUMN — Main Company Content (55–60% width) */}
        <div className="w-full lg:w-[58%] flex flex-col">
          <h2 className="text-[#1E1E1E] font-bold text-4xl lg:text-[66px] leading-[1.2] lg:leading-[1.1] tracking-[-1px] mb-8 lg:mb-[48px]">
            Who We Are
          </h2>
          
          <p className="text-[#2A2A2A] font-medium text-lg lg:text-[27px] leading-relaxed lg:leading-[1.7] max-w-[760px] mb-8 lg:mb-[55px]">
            Sukoon Developers is a real estate consultancy and development firm
            helping individuals and businesses make confident property decisions
            across Gujarat
          </p>

          <p className="text-[#2A2A2A] text-opacity-90 font-medium text-lg lg:text-[27px] leading-relaxed lg:leading-[1.7] max-w-[760px]">
            We specialize in construction, development, redevelopment, and property
            consultation-offering transparent, brokerage-free guidance at every step
          </p>
        </div>

        {/* RIGHT COLUMN — Statistics Grid (35–40% width) */}
        <div className="w-full lg:w-[38%] pt-4 lg:pt-8">
          <div className="grid grid-cols-2 gap-y-[40px] lg:gap-y-[70px]">
            {stats.map((stat, index) => {
              // Determine if this is the left column of the grid (index 0 or 2)
              const isLeftColumn = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col ${
                    isLeftColumn ? "pr-4 lg:pr-[60px]" : "pl-4 lg:pl-[60px]"
                  }`}
                >
                  {/* Vertical Divider (Only on the left column items) */}
                  {isLeftColumn && (
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-[70px] lg:h-[95px] bg-[#DDDDDD]" />
                  )}
                  
                  <div className="text-[#1E1E1E] font-bold text-4xl lg:text-[58px] leading-none mb-2 lg:mb-4">
                    {stat.number}
                  </div>
                  <div className="text-[#9B9B9B] font-normal text-base lg:text-[25px] leading-snug">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}