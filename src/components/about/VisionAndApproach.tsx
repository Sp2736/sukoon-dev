import Image from "next/image";
import { Instrument_Sans, Source_Sans_3 } from "next/font/google";

const instrument = Instrument_Sans({ subsets: ["latin"] });
const source = Source_Sans_3({ subsets: ["latin"] });

// POSITIONING CONTROL PANEL
// Adjust the values inside the brackets [...] to adjust the positions
const layout = {
  mainImage: {
    // Use margins (ml, mt, mr, mb) to push the big image around
    mobile: "ml-0 mt-0", // 0 margin on mobile by default
    // Example: pushes it 40px away from the left edge, and 20px down on desktop
    desktop: "lg:ml-[40px] lg:mt-[20px]",
  },
  smallImage: {
    // Mobile positioning (Percentages work best for mobile responsiveness)
    mobile: "top-[75%] left-[25%]",
    // Desktop positioning (Use pixels here)
    desktop: "lg:top-[195px] lg:left-[380px]",
  },
  title: {
    // Mobile positioning
    mobile: "top-[40%]",
    // Desktop positioning (Negative values pull it outside the box)
    desktop: "lg:top-[80px] lg:-right-[100px] xl:-right-[100px]",
  },
};

export default function VisionAndApproach() {
  return (
    <section className="bg-[#F6F6F6] w-full py-16 lg:py-[120px] overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-6 flex flex-col lg:flex-row justify-between relative">
        {/* LEFT & CENTER ZONE: Images and Overlapping Title */}
        <div className="relative w-full lg:w-[50%] xl:w-[45%] flex-shrink-0 mb-32 lg:mb-0">
          {/* IMAGE 1 — Main Large Image */}
          <div
            className={`relative w-[75%] max-w-[470px] h-[400px] lg:h-[450px] rounded-[16px] overflow-hidden ${layout.mainImage.mobile} ${layout.mainImage.desktop}`}
          >
            <Image
              src="/vision-big.png"
              alt="Luxury modern villa"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 560px"
            />
          </div>

          {/* IMAGE 2 — Floating Overlap Image (Positions mapped to config) */}
          <div
            className={`absolute ${layout.smallImage.mobile} ${layout.smallImage.desktop} w-[65%] max-w-[400px] h-[240px] lg:h-[310px] rounded-[16px] overflow-hidden shadow-[0_12px_30px_rgba(0,0,0,0.08)] z-10 bg-gray-200 transition-all duration-300`}
          >
            <Image
              src="/vision-small.png"
              alt="Modern commercial facade"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 460px"
            />
          </div>

          {/* CENTER TITLE BLOCK (Positions mapped to config) */}
          <div
            className={`absolute ${layout.title.mobile} ${layout.title.desktop} z-20 pointer-events-none drop-shadow-sm lg:drop-shadow-none transition-all duration-300`}
          >
            <h2 className="font-heading text-[#1E1E1E] font-bold text-[36px] lg:text-[40px] leading-[1.05] tracking-[-1px] whitespace-pre-line lg:-ml-[40px]">
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
              <h3 className="font-heading text-[16px] lg:text-[20px] font-bold text-[#1E1E1E] leading-none mb-2">
                Vision
              </h3>
              <p
                className={`${source.className} font-body text-[13px] lg:text-[16px] font-normal text-[#333333] leading-[1.5]`}
              >
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
              <h3 className="font-heading text-[16px] lg:text-[20px] font-bold text-[#1E1E1E] leading-none mb-2">
                Approach
              </h3>
              <p
                className={`${source.className} font-body text-[13px] lg:text-[16px] font-normal text-[#333333] leading-[1.5]`}
              >
                We believe real estate decisions should be simple, informed, and
                stress-free
              </p>
            </div>
          </div>

          {/* LOWER RIGHT PRINCIPLES LIST */}
          <div className="mt-[40px] lg:mt-[50px] ml-2 lg:ml-6">
            <h4 className="font-heading text-[14px] lg:text-[16px] font-bold text-[#1E1E1E] mb-4">
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
                  className="font-body flex items-center text-[16px] lg:text-[18px] font-normal text-[#1E1E1E] leading-[2.2]"
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
