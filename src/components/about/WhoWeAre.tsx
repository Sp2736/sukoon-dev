import React from "react";
import AnimatedNumber from "@/src/components/ui/AnimatedNumber";
import { Instrument_Sans, Source_Sans_3 } from "next/font/google";

const instrument = Instrument_Sans({ subsets: ["latin"] });
const source = Source_Sans_3({ subsets: ["latin"] });

export default function WhoWeAre() {
  const stats = [
    { number: "500+", label: "Properties Sold" },
    { number: "300+", label: "Happy Clients" },
    { number: "10+", label: "Years Of Experience" },
    { number: "50+", label: "Investment Projects" },
  ];

  return (
    <section className="bg-[#F5F5F5] w-full flex justify-center py-16 px-6 lg:py-[100px] lg:px-[90px]">
      <div className="w-full max-w-[1800px] flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-[10%]">
        {/* LEFT COLUMN */}
        <div className="w-full lg:w-[58%] flex flex-col">
          <h2
            className={`${instrument.className} text-[#1E1E1E] font-bold text-[32px] md:text-[36px] lg:text-[38px] leading-[1.2] lg:leading-[1.1] tracking-[-1px] mb-4 lg:mb-[40px]`}
          >
            Who We Are
          </h2>

          <p
            className={`${source.className} font-body text-[#2A2A2A] font-normal text-[16px] md:text-[18px] lg:text-[22px] leading-[1.6] lg:leading-[1.7] max-w-[760px] mb-4 lg:mb-[40px]`}
          >
            Sukoon Developers is a real estate consultancy and development firm
            helping individuals and businesses make confident property decisions
            across Gujarat
          </p>

          <p
            className={`${source.className} font-body text-[#2A2A2A] text-opacity-90 font-normal text-[16px] md:text-[18px] lg:text-[22px] leading-[1.6] lg:leading-[1.7] max-w-[760px]`}
          >
            We specialize in construction, development, redevelopment, and
            property consultation-offering transparent, brokerage-free guidance
            at every step
          </p>
        </div>

        {/* RIGHT COLUMN */}
        <div className="w-full lg:w-[38%] pt-2 lg:pt-8">
          <div className="grid grid-cols-2 gap-y-[30px] md:gap-y-[40px] lg:gap-y-[60px]">
            {stats.map((stat, index) => {
              const isLeftColumn = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col ${
                    isLeftColumn ? "pr-4 lg:pr-[50px]" : "pl-4 lg:pl-[50px]"
                  }`}
                >
                  {/* Scaled the middle divider line for mobile height */}
                  {isLeftColumn && (
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-[50px] lg:h-[80px] bg-[#DDDDDD]" />
                  )}

                  <div
                    className={`${instrument.className} text-[#1E1E1E] font-bold text-[28px] md:text-[32px] lg:text-[35px] leading-none mb-2`}
                  >
                    <AnimatedNumber value={stat.number} />
                  </div>
                  <div
                    className={`${source.className} font-body text-[#9B9B9B] font-normal text-[14px] md:text-[16px] lg:text-[20px] leading-snug`}
                  >
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
