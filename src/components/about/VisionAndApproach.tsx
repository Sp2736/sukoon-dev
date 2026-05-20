import Image from "next/image";
import { Instrument_Sans, Source_Sans_3 } from "next/font/google";

const instrument = Instrument_Sans({ subsets: ["latin"] });
const source = Source_Sans_3({ subsets: ["latin"] });

export default function VisionAndApproach() {
  return (
<section className="bg-[#F6F6F6] w-full pt-16 lg:pt-[120px] pb-8 lg:pb-[40px] overflow-hidden">      <div className="max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-10">
        {/* =========================
            DESKTOP LAYOUT
        ========================== */}
        <div className="hidden xl:flex items-start justify-between gap-16">
          {/* LEFT VISUAL SECTION */}
          <div className="relative w-[55%]">
            {/* IMAGE COMPOSITION */}
            <div className="relative w-full max-w-[780px] aspect-[1.15/1]">
              {/* BIG IMAGE */}
              <div
                className="
                  absolute
                  left-4
                  top-3
                  w-[64%]
                  h-[68%]
                  rounded-[18px]
                  overflow-hidden
                "
              >
                <Image
                  src="/vision-big.png"
                  alt="Luxury modern villa"
                  fill
                  className="object-cover"
                  sizes="900px"
                />
              </div>

              {/* SMALL IMAGE */}
              <div
                className="
                  absolute
                  right-[-1.8%]
                  bottom-[24%]
                  w-[53%]
                  h-[48%]
                  rounded-[18px]
                  overflow-hidden
                  shadow-[0_13px_40px_rgba(0, 0, 0, 0.22)]
                  z-10
                "
              >
                <Image
                  src="/vision-small.png"
                  alt="Modern commercial facade"
                  fill
                  className="object-cover"
                  sizes="700px"
                />
              </div>

              {/* INTERSECTION TITLE */}
              <div
                className="
                  absolute
                  z-20
                  left-[68%]
                  top-[12%]
                  pointer-events-none
                "
              >
                <h2
                  className="
                    font-heading
                    font-bold
                    text-[#1E1E1E]
                    leading-[0.95]
                    text-[40px]
                  "
                >
                  Our Vision & <br />
                  Approach
                </h2>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT SECTION */}
          <div className="w-[40%] flex flex-col pt-[40px]">
            {/* CARD 1 */}
            <div
              className="
                bg-[#EEF4F6]
                rounded-[28px]
                p-[28px_34px]
                flex
                items-start
                gap-6
              "
            >
              <div className="flex items-center gap-6 shrink-0 pt-1">
                <div className="relative w-[30px] h-[30px]">
                  <Image
                    src="/bullet-vision.png"
                    alt="Vision Bullet"
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="w-[1px] h-[58px] bg-[#D9E3E7]" />
              </div>

              <div>
                <h3 className="font-heading text-[22px] font-bold text-[#1E1E1E] mb-2">
                  Vision
                </h3>

                <p
                  className={`${source.className} text-[16px] leading-[1.7] text-[#333333]`}
                >
                  To be a trusted real estate partner delivering long-term value
                  through transparency and expertise
                </p>
              </div>
            </div>

            {/* CARD 2 */}
            <div
              className="
                bg-[#EEF4F6]
                rounded-[28px]
                p-[28px_34px]
                flex
                items-start
                gap-6
                mt-5
              "
            >
              <div className="flex items-center gap-6 shrink-0 pt-1">
                <div className="relative w-[30px] h-[30px]">
                  <Image
                    src="/bullet-approach.png"
                    alt="Approach Bullet"
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="w-[1px] h-[58px] bg-[#D9E3E7]" />
              </div>

              <div>
                <h3 className="font-heading text-[22px] font-bold text-[#1E1E1E] mb-2">
                  Approach
                </h3>

                <p
                  className={`${source.className} text-[16px] leading-[1.7] text-[#333333]`}
                >
                  We believe real estate decisions should be simple, informed,
                  and stress-free
                </p>
              </div>
            </div>

            {/* BULLET LIST */}
            <div className="mt-[48px] ml-2">
              <h4 className="font-heading text-[16px] font-bold text-[#1E1E1E] mb-5">
                Our approach is built on
              </h4>

              <ul className="flex flex-col gap-3">
                {[
                  "Zero brokerage model",
                  "Honest consultation",
                  "Verified property selection",
                  "End-to-end guidance",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="
                      flex
                      items-start
                      text-[18px]
                      text-[#1E1E1E]
                      leading-[1.8]
                    "
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

        {/* =========================
            TABLET LAYOUT
        ========================== */}
        <div className="hidden md:flex xl:hidden flex-col">
          {/* RESPONSIVE TITLE */}
          <div className="mb-10 text-center">
            <h2
              className="
                font-heading
                font-bold
                text-[#1E1E1E]
                leading-[0.95]

                text-[42px]
                lg:text-[52px]
              "
            >
              Our Vision & <br />
              Approach
            </h2>
          </div>

          {/* IMAGE SECTION */}
          <div className="relative w-full max-w-[850px] mx-auto">
            <div className="relative w-full aspect-[1.15/1]">
              {/* BIG IMAGE */}
              <div
                className="
                  absolute
                  left-0
                  top-0
                  w-[72%]
                  h-[72%]
                  rounded-[18px]
                  overflow-hidden
                "
              >
                <Image
                  src="/vision-big.png"
                  alt="Luxury modern villa"
                  fill
                  className="object-cover"
                />
              </div>

              {/* SMALL IMAGE */}
              <div
                className="
                  absolute
                  right-[3%]
                  bottom-[4%]
                  w-[56%]
                  h-[48%]
                  rounded-[18px]
                  overflow-hidden
                  shadow-[0_12px_40px_rgba(0,0,0,0.12)]
                  z-10
                "
              >
                <Image
                  src="/vision-small.png"
                  alt="Modern commercial facade"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* CONTENT GRID */}
          <div className="grid grid-cols-2 gap-10 mt-14">
            {/* LEFT COLUMN */}
            <div className="flex flex-col gap-5">
              {/* CARD 1 */}
              <div className="bg-[#EEF4F6] rounded-[28px] p-7 flex items-start gap-5">
                <div className="flex items-center gap-5 shrink-0 pt-1">
                  <div className="relative w-[28px] h-[28px]">
                    <Image
                      src="/bullet-vision.png"
                      alt="Vision Bullet"
                      fill
                      className="object-contain"
                    />
                  </div>

                  <div className="w-[1px] h-[54px] bg-[#D9E3E7]" />
                </div>

                <div>
                  <h3 className="font-heading text-[20px] font-bold text-[#1E1E1E] mb-2">
                    Vision
                  </h3>

                  <p
                    className={`${source.className} text-[15px] leading-[1.7] text-[#333333]`}
                  >
                    To be a trusted real estate partner delivering long-term
                    value through transparency and expertise
                  </p>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="bg-[#EEF4F6] rounded-[28px] p-7 flex items-start gap-5">
                <div className="flex items-center gap-5 shrink-0 pt-1">
                  <div className="relative w-[28px] h-[28px]">
                    <Image
                      src="/bullet-approach.png"
                      alt="Approach Bullet"
                      fill
                      className="object-contain"
                    />
                  </div>

                  <div className="w-[1px] h-[54px] bg-[#D9E3E7]" />
                </div>

                <div>
                  <h3 className="font-heading text-[20px] font-bold text-[#1E1E1E] mb-2">
                    Approach
                  </h3>

                  <p
                    className={`${source.className} text-[15px] leading-[1.7] text-[#333333]`}
                  >
                    We believe real estate decisions should be simple, informed,
                    and stress-free
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="pt-4">
              <h4 className="font-heading text-[16px] font-bold text-[#1E1E1E] mb-5">
                Our approach is built on
              </h4>

              <ul className="flex flex-col gap-4">
                {[
                  "Zero brokerage model",
                  "Honest consultation",
                  "Verified property selection",
                  "End-to-end guidance",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="
                      flex
                      items-start
                      text-[17px]
                      text-[#1E1E1E]
                      leading-[1.8]
                    "
                  >
                    <span className="text-[#5AB6E8] text-[22px] mr-4 leading-none">
                      •
                    </span>

                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* =========================
            MOBILE LAYOUT
        ========================== */}
        <div className="flex flex-col md:hidden">
          {/* RESPONSIVE TITLE */}
          <div className="mb-8 text-center">
            <h2
              className="
                font-heading
                font-bold
                text-[#1E1E1E]
                leading-[0.95]

                text-[40px]
                md:text-[32px]
                lg:text-[40px]
              "
            >
              Our Vision & <br />
              Approach
            </h2>
          </div>

          {/* IMAGE SECTION */}
          <div className="relative w-full">
            <div className="relative w-full aspect-[1/1.05]">
              {/* BIG IMAGE */}
              <div
                className="
                  absolute
                  left-0
                  top-0
                  w-[74%]
                  h-[72%]
                  rounded-[16px]
                  overflow-hidden
                "
              >
                <Image
                  src="/vision-big.png"
                  alt="Luxury modern villa"
                  fill
                  className="object-cover"
                />
              </div>

              {/* SMALL IMAGE */}
              <div
                className="
                  absolute
                  right-0
                  bottom-[5%]
                  w-[58%]
                  h-[46%]
                  rounded-[16px]
                  overflow-hidden
                  shadow-[0_12px_40px_rgba(0,0,0,0.12)]
                  z-10
                "
              >
                <Image
                  src="/vision-small.png"
                  alt="Modern commercial facade"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* CONTENT STACK */}
          <div className="flex flex-col gap-5 mt-12">
            {/* CARD 1 */}
            <div className="bg-[#EEF4F6] rounded-[24px] p-5 flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="relative w-[24px] h-[24px]">
                  <Image
                    src="/bullet-vision.png"
                    alt="Vision Bullet"
                    fill
                    className="object-contain"
                  />
                </div>

                <h3 className="font-heading text-[18px] font-bold text-[#1E1E1E]">
                  Vision
                </h3>
              </div>

              <p
                className={`${source.className} text-[14px] leading-[1.7] text-[#333333]`}
              >
                To be a trusted real estate partner delivering long-term value
                through transparency and expertise
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-[#EEF4F6] rounded-[24px] p-5 flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="relative w-[24px] h-[24px]">
                  <Image
                    src="/bullet-approach.png"
                    alt="Approach Bullet"
                    fill
                    className="object-contain"
                  />
                </div>

                <h3 className="font-heading text-[18px] font-bold text-[#1E1E1E]">
                  Approach
                </h3>
              </div>

              <p
                className={`${source.className} text-[14px] leading-[1.7] text-[#333333]`}
              >
                We believe real estate decisions should be simple, informed, and
                stress-free
              </p>
            </div>

            {/* BULLET LIST */}
            <div className="pt-2">
              <h4 className="font-heading text-[15px] font-bold text-[#1E1E1E] mb-5">
                Our approach is built on
              </h4>

              <ul className="flex flex-col gap-3">
                {[
                  "Zero brokerage model",
                  "Honest consultation",
                  "Verified property selection",
                  "End-to-end guidance",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="
                      flex
                      items-start
                      text-[15px]
                      text-[#1E1E1E]
                      leading-[1.8]
                    "
                  >
                    <span className="text-[#5AB6E8] text-[20px] mr-3 leading-none">
                      •
                    </span>

                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
