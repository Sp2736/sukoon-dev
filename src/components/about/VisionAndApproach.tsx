import Image from "next/image";

export default function VisionAndApproach() {
  return (
    <section className="bg-[#F6F6F6] w-full py-16 lg:py-[120px] overflow-hidden font-sans">
      <div className="max-w-[1500px] mx-auto px-6 flex flex-col lg:flex-row justify-between relative">
        {/* LEFT & CENTER ZONE: Images and Overlapping Title */}
        <div className="relative w-full lg:w-[50%] xl:w-[45%] flex-shrink-0 mb-32 lg:mb-0">
          {/* IMAGE 1 — Main Large Image */}
          <div className="relative w-full max-w-[560px] h-[400px] lg:h-[520px] rounded-[28px] overflow-hidden">
            <Image
              src="/vision-big.png"
              alt="Luxury modern villa"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 560px"
            />
          </div>

          {/* IMAGE 2 — Floating Overlap Image 
              Shifted right: Changed lg:left-[220px] to lg:left-[300px] for less overlap
          */}
          <div className="absolute top-[75%] lg:top-[280px] left-[25%] lg:left-[300px] w-[85%] max-w-[460px] h-[250px] lg:h-[320px] rounded-[24px] overflow-hidden shadow-[0_12px_30px_rgba(0,0,0,0.08)] z-10 bg-gray-200">
            <Image
              src="/vision-small.png"
              alt="Modern commercial facade"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 460px"
            />
          </div>

          {/* CENTER TITLE BLOCK — Editorial Overlap 
              Placed in the top right corner notch. Reduced size to 56px.
          */}
          <div className="absolute top-[40%] lg:top-[60px] right-0 lg:-right-[100px] xl:-right-[120px] z-20 pointer-events-none drop-shadow-sm lg:drop-shadow-none">
            <h2 className="text-[#1E1E1E] font-bold text-[42px] lg:text-[56px] leading-[1.05] tracking-[-1px] whitespace-pre-line lg:-ml-[40px]">
              Our Vision &{"\n"}Approach
            </h2>
          </div>
        </div>

        {/* RIGHT CONTENT COLUMN */}
        <div className="w-full lg:w-[45%] xl:w-[40%] flex flex-col relative z-10 lg:pt-[40px] mt-24 lg:mt-0">
          {/* CARD 1 — Vision */}
          <div className="bg-[#EEF4F6] rounded-[28px] p-[24px] lg:p-[26px_30px] w-full max-w-[620px] min-h-[130px] flex flex-col sm:flex-row items-start gap-[20px] lg:gap-[24px]">
            <div className="flex items-center gap-[20px] lg:gap-[24px] shrink-0 sm:pt-2">
              <div className="relative w-[30px] h-[30px] shrink-0">
                <Image
                  src="/bullet-vision.png"
                  alt="Vision Bullet"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="hidden sm:block w-[1px] h-[50px] bg-[#D9E3E7]"></div>
            </div>
            <div className="flex flex-col">
              <h3 className="text-[28px] lg:text-[32px] font-bold text-[#1E1E1E] leading-none mb-2">
                Vision
              </h3>
              <p className="text-[15px] lg:text-[17px] font-normal text-[#333333] leading-[1.5]">
                To be a trusted real estate partner delivering long-term value
                through transparency and expertise
              </p>
            </div>
          </div>

          {/* CARD 2 — Approach */}
          <div className="bg-[#EEF4F6] rounded-[28px] p-[24px] lg:p-[26px_30px] w-full max-w-[620px] min-h-[130px] flex flex-col sm:flex-row items-start gap-[20px] lg:gap-[24px] mt-[20px]">
            <div className="flex items-center gap-[20px] lg:gap-[24px] shrink-0 sm:pt-2">
              <div className="relative w-[30px] h-[30px] shrink-0">
                <Image
                  src="/bullet-approach.png"
                  alt="Vision Bullet"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="hidden sm:block w-[1px] h-[50px] bg-[#D9E3E7]"></div>
            </div>
            <div className="flex flex-col">
              <h3 className="text-[28px] lg:text-[32px] font-bold text-[#1E1E1E] leading-none mb-2">
                Approach
              </h3>
              <p className="text-[15px] lg:text-[17px] font-normal text-[#333333] leading-[1.5]">
                We believe real estate decisions should be simple, informed, and
                stress-free
              </p>
            </div>
          </div>

          {/* LOWER RIGHT PRINCIPLES LIST */}
          <div className="mt-[40px] lg:mt-[50px] ml-2 lg:ml-6">
            <h4 className="text-[20px] lg:text-[22px] font-bold text-[#1E1E1E] mb-4">
              Our approach is built on
            </h4>
            <ul className="flex flex-col gap-[6px]">
              {[
                "Zero brokerage model",
                "Honest consultation",
                "Verified property selection",
                "End-to-end guidance",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center text-[16px] lg:text-[18px] font-normal text-[#1E1E1E] leading-[2.2]"
                >
                  <span className="text-[#5AB6E8] text-[24px] mr-4 leading-none">
                    •
                  </span>
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
