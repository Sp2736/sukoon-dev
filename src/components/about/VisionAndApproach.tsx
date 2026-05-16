import Image from "next/image";

export default function VisionAndApproach() {
  return (
    <section className="bg-[#F6F6F6] w-full py-16 lg:py-[120px] overflow-hidden font-sans">
      <div className="max-w-[1500px] mx-auto px-6 flex flex-col lg:flex-row justify-between relative">
        
        {/* LEFT & CENTER ZONE: Images and Overlapping Title */}
        <div className="relative w-full lg:w-[50%] xl:w-[45%] flex-shrink-0 mb-32 lg:mb-0">
          
          {/* IMAGE 1 — Main Large Image (Restored to exact V1 dimensions) */}
          <div className="relative w-full max-w-[560px] h-[400px] lg:h-[520px] rounded-[28px] overflow-hidden">
            <Image
              src="/vision-big.png" 
              alt="Luxury modern villa"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 560px"
            />
          </div>

          {/* IMAGE 2 — Floating Overlap Image (Restored to exact V1 placement) */}
          <div className="absolute top-[75%] lg:top-[280px] left-[15%] lg:left-[220px] w-[85%] max-w-[460px] h-[250px] lg:h-[320px] rounded-[24px] overflow-hidden shadow-[0_12px_30px_rgba(0,0,0,0.08)] z-10 bg-gray-200">
            <Image
              src="/vision-small.png" 
              alt="Modern commercial facade"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 460px"
            />
          </div>

          {/* CENTER TITLE BLOCK — Editorial Overlap 
              Fixes applied: 
              1. Moved slightly LEFT (reduced negative right offset)
              2. Moved slightly UP (top-[40px])
              3. Font size 70px, Line height 0.95, Tracking -1.5px
          */}
          <div className="absolute top-[40%] lg:top-[40px] right-0 lg:-right-[140px] xl:-right-[180px] z-20 pointer-events-none drop-shadow-sm lg:drop-shadow-none">
            <h2 className="text-[#1E1E1E] font-bold text-[50px] lg:text-[70px] leading-[1.1] lg:leading-[0.95] tracking-[-1.5px] whitespace-pre-line lg:-ml-[40px]">
              Our Vision &{"\n"}Approach
            </h2>
          </div>
        </div>

        {/* RIGHT CONTENT COLUMN */}
        <div className="w-full lg:w-[45%] xl:w-[40%] flex flex-col relative z-10 lg:pt-[40px] mt-24 lg:mt-0">
          
          {/* CARD 1 — Vision 
              Fixes applied:
              1. Padding reduced to 26px 30px
              2. Min height reduced to 130px
          */}
          <div className="bg-[#EEF4F6] rounded-[28px] p-[24px] lg:p-[26px_30px] w-full max-w-[620px] min-h-[130px] flex flex-col sm:flex-row items-start gap-[20px] lg:gap-[24px]">
            {/* Icon Area (Icons reduced to 34px) */}
            <div className="flex items-center gap-[20px] lg:gap-[24px] shrink-0 sm:pt-2">
              <div className="w-[34px] h-[34px] text-[#5AB6E8]">
                {/* Vision/Eye Icon */}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              {/* Thin Vertical Divider */}
              <div className="hidden sm:block w-[1px] h-[60px] bg-[#D9E3E7]"></div>
            </div>
            {/* Text Area */}
            <div className="flex flex-col">
              {/* Heading reduced to 40px */}
              <h3 className="text-[32px] lg:text-[40px] font-bold text-[#1E1E1E] leading-none mb-2">
                Vision
              </h3>
              {/* Text reduced to 19px, tighter leading */}
              <p className="text-[16px] lg:text-[19px] font-normal text-[#333333] leading-[1.5]">
                To be a trusted real estate partner delivering long-term value through transparency and expertise
              </p>
            </div>
          </div>

          {/* CARD 2 — Approach */}
          <div className="bg-[#EEF4F6] rounded-[28px] p-[24px] lg:p-[26px_30px] w-full max-w-[620px] min-h-[130px] flex flex-col sm:flex-row items-start gap-[20px] lg:gap-[24px] mt-[24px]">
            {/* Icon Area */}
            <div className="flex items-center gap-[20px] lg:gap-[24px] shrink-0 sm:pt-2">
              <div className="w-[34px] h-[34px] text-[#5AB6E8]">
                {/* Approach/Target Icon */}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              {/* Vertical Divider */}
              <div className="hidden sm:block w-[1px] h-[60px] bg-[#D9E3E7]"></div>
            </div>
            {/* Text Area */}
            <div className="flex flex-col">
              <h3 className="text-[32px] lg:text-[40px] font-bold text-[#1E1E1E] leading-none mb-2">
                Approach
              </h3>
              <p className="text-[16px] lg:text-[19px] font-normal text-[#333333] leading-[1.5]">
                We believe real estate decisions should be simple, informed, and stress-free
              </p>
            </div>
          </div>

          {/* LOWER RIGHT PRINCIPLES LIST 
              (Slightly scaled down to match the new softer cards) 
          */}
          <div className="mt-[40px] lg:mt-[55px] ml-2 lg:ml-6">
            <h4 className="text-[22px] lg:text-[26px] font-bold text-[#1E1E1E] mb-5">
              Our approach is built on
            </h4>
            <ul className="flex flex-col gap-[8px]">
              {[
                "Zero brokerage model",
                "Honest consultation",
                "Verified property selection",
                "End-to-end guidance"
              ].map((item, index) => (
                <li key={index} className="flex items-center text-[18px] lg:text-[20px] font-normal text-[#1E1E1E] leading-[2.2]">
                  <span className="text-[#5AB6E8] text-[26px] mr-4 leading-none">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}