"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Instrument_Sans, Source_Sans_3 } from "next/font/google";

const instrument = Instrument_Sans({ subsets: ["latin"] });
const source = Source_Sans_3({ subsets: ["latin"] });

export default function VisionAndApproach() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#F6F6F6] w-full pt-16 lg:pt-[120px] pb-3 lg:pb-[5px] overflow-hidden"
    >
      <div className="max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-10">
        {/* =========================
            DESKTOP LAYOUT
        ========================== */}
        {/* Changed from flex to grid for a strict shared alignment baseline */}
        <div className="hidden xl:grid grid-cols-[1.2fr_1fr] items-start gap-16 lg:gap-20">
          {/* LEFT VISUAL SECTION */}
          {/* Added sticky positioning to synchronize vertical scroll rhythm */}
          <div className="relative w-full sticky top-32 pb-12">
            {/* IMAGE COMPOSITION */}
            <div className="relative w-full max-w-[780px] aspect-[1.15/1]">
              {/* BIG IMAGE */}
              <div
                className={`
                  absolute
                  left-7
                  top-0
                  w-[66%]
                  h-[70%]
                  rounded-[18px]
                  overflow-hidden
                  ${isVisible ? "liquid-reveal delay-200" : "opacity-0"}
                `}
              >
                <Image
                  src="/vision-big.webp"
                  alt="Luxury modern villa"
                  fill
                  className="object-cover"
                  sizes="900px"
                />
              </div>

              {/* SMALL IMAGE */}
              <div
                className={`
                  absolute
                  right-[-4%]
                  bottom-[25%]
                  w-[53%]
                  h-[48%]
                  rounded-[18px]
                  overflow-hidden
                  shadow-[0_15px_35px_rgba(0,0,0,0.1),0_4px_10px_rgba(0,0,0,0.05)]
                  z-10
                  ${isVisible ? "liquid-reveal delay-600" : "opacity-0"}
                `}
              >
                <Image
                  src="/vision-small.webp"
                  alt="Modern commercial facade"
                  fill
                  className="object-cover"
                  sizes="700px"
                />
              </div>

              {/* INTERSECTION TITLE */}
              {/* Added w-max to prevent text clipping and restored original font formatting */}
              <div
                className="
                  absolute
                  z-20
                  left-[72%]
                  top-[10.5%]
                  pointer-events-none
                  w-max
                "
              >
                <h2
                  className="
                    font-heading
                    font-bold
                    text-[#1E1E1E]
                    leading-[0.95]
                    text-[40px]
                    animate-base
                    main-heading-animation
                  "
                >
                  Our Vision & <br />
                  Approach
                </h2>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT SECTION */}
          {/* Removed arbitrary pt to lock perfectly with the top edge of the left image */}
          <div className="w-full flex flex-col pt-1">
            {/* CARD 1 */}
            {/* Reduced internal padding and gaps to remove bulk */}
            <div
              className={`
                bg-[#D9F2FF4D]
                rounded-[24px]
                p-[22px_26px]
                flex
                items-start
                gap-5
                ${isVisible ? "animate-base content-animation delay-200" : "opacity-0"}
              `}
            >
              <div className="flex items-center gap-5 shrink-0 pt-1">
                <div className="relative w-[26px] h-[26px]">
                  <Image
                    src="/bullet-vision.webp"
                    alt="Vision Bullet"
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="w-[1px] h-[50px] bg-[#D9E3E7]" />
              </div>

              <div>
                <h3 className="font-heading text-[20px] font-bold text-[#1E1E1E] mb-1.5">
                  Vision
                </h3>

                <p
                  className={`${source.className} text-[15px] leading-[1.65] text-[#333333]`}
                >
                  To be a trusted real estate partner delivering long-term value
                  through transparency and expertise
                </p>
              </div>
            </div>

            {/* CARD 2 */}
            <div
              className={`
                bg-[#D9F2FF4D]
                rounded-[24px]
                p-[22px_26px]
                flex
                items-start
                gap-5
                mt-4
                ${isVisible ? "animate-base content-animation delay-300" : "opacity-0"}
              `}
            >
              <div className="flex items-center gap-5 shrink-0 pt-1">
                <div className="relative w-[26px] h-[26px]">
                  <Image
                    src="/bullet-approach.webp"
                    alt="Approach Bullet"
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="w-[1px] h-[50px] bg-[#D9E3E7]" />
              </div>

              <div>
                <h3 className="font-heading text-[20px] font-bold text-[#1E1E1E] mb-1.5">
                  Approach
                </h3>

                <p
                  className={`${source.className} text-[15px] leading-[1.65] text-[#333333]`}
                >
                  We believe real estate decisions should be simple, informed,
                  and stress-free
                </p>
              </div>
            </div>

            {/* BULLET LIST */}
            {/* Reduced top margin to integrate closer with the cards */}
            <div
              className={`mt-[32px] ml-2 ${isVisible ? "animate-base content-animation delay-400" : "opacity-0"}`}
            >
              <h4 className="font-heading text-[16px] font-bold text-[#1E1E1E] mb-4">
                Our approach is built on
              </h4>

              <ul className="flex flex-col gap-2.5">
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
                      leading-[1.7]
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
                animate-base
                main-heading-animation
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
                className={`
                  absolute
                  left-0
                  top-0
                  w-[72%]
                  h-[72%]
                  rounded-[18px]
                  overflow-hidden
                  ${isVisible ? "liquid-reveal delay-200" : "opacity-0"}
                `}
              >
                <Image
                  src="/vision-big.webp"
                  alt="Luxury modern villa"
                  fill
                  className="object-cover"
                />
              </div>

              {/* SMALL IMAGE */}
              <div
                className={`
                  absolute
                  right-[3%]
                  bottom-[4%]
                  w-[56%]
                  h-[48%]
                  rounded-[18px]
                  overflow-hidden
                  shadow-[0_12px_40px_rgba(0,0,0,0.12)]
                  z-10
                  ${isVisible ? "liquid-reveal delay-400" : "opacity-0"}
                `}
              >
                <Image
                  src="/vision-small.webp"
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
              <div className={`bg-[#EEF4F6] rounded-[28px] p-7 flex items-start gap-5 ${isVisible ? "animate-base content-animation delay-200" : "opacity-0"}`}>
                <div className="flex items-center gap-5 shrink-0 pt-1">
                  <div className="relative w-[28px] h-[28px]">
                    <Image
                      src="/bullet-vision.webp"
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
              <div className={`bg-[#EEF4F6] rounded-[28px] p-7 flex items-start gap-5 ${isVisible ? "animate-base content-animation delay-300" : "opacity-0"}`}>
                <div className="flex items-center gap-5 shrink-0 pt-1">
                  <div className="relative w-[28px] h-[28px]">
                    <Image
                      src="/bullet-approach.webp"
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
            <div className={`pt-4 ${isVisible ? "animate-base content-animation delay-400" : "opacity-0"}`}>
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
                animate-base
                main-heading-animation
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
                className={`
                  absolute
                  left-0
                  top-0
                  w-[74%]
                  h-[72%]
                  rounded-[16px]
                  overflow-hidden
                  ${isVisible ? "liquid-reveal delay-200" : "opacity-0"}
                `}              
              >
                <Image
                  src="/vision-big.webp"
                  alt="Luxury modern villa"
                  fill
                  className="object-cover"
                />
              </div>

              {/* SMALL IMAGE */}
              <div
                className={`
                  absolute
                  right-0
                  bottom-[5%]
                  w-[58%]
                  h-[46%]
                  rounded-[16px]
                  overflow-hidden
                  shadow-[0_12px_40px_rgba(0,0,0,0.12)]
                  z-10
                  ${isVisible ? "liquid-reveal delay-400" : "opacity-0"}
                `}
              >
                <Image
                  src="/vision-small.webp"
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
            <div className={`bg-[#EEF4F6] rounded-[24px] p-5 flex flex-col gap-4 ${isVisible ? "animate-base content-animation delay-200" : "opacity-0"}`}>
              <div className="flex items-center gap-4">
                <div className="relative w-[24px] h-[24px]">
                  <Image
                    src="/bullet-vision.webp"
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
            <div className={`bg-[#EEF4F6] rounded-[24px] p-5 flex flex-col gap-4 ${isVisible ? "animate-base content-animation delay-300" : "opacity-0"}`}>
              <div className="flex items-center gap-4">
                <div className="relative w-[24px] h-[24px]">
                  <Image
                    src="/bullet-approach.webp"
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
            <div className={`pt-2 ${isVisible ? "animate-base content-animation delay-400" : "opacity-0"}`}>
              <h4 className="animate-base sub-heading-animation font-heading text-[15px] font-bold text-[#1E1E1E] mb-5">
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
