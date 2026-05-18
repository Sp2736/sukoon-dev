"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Instrument_Sans, Source_Sans_3 } from "next/font/google";

const instrument = Instrument_Sans({ subsets: ["latin"] });
const source = Source_Sans_3({ subsets: ["latin"] });

export default function InvestmentNetwork() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const categories = [
    "Agricultural Land",
    "Non-Agricultural (NA) Land",
    "High-growth investment zones",
  ];

  // MASTER CONTROL PANEL
  const networkConfig = {
    trail: {
      path: "M0.441742 352.966L57.4417 245.466L122.442 184.966L194.942 132.966L270.442 85.9665L317.942 57.4665L355.442 40.9665L383.942 26.4665L423.442 11.4665L451.942 0.466461",
      mobile: "top-[245px] left-[42%] w-[280px]",
      desktop: "lg:top-[220px] lg:left-[46%] lg:w-[510px]",
    },
    pins: [
      { id: 1, label: "Kapurai", top: "47%", left: "82.7%", delay: "2.0s" },
      { id: 2, label: "Dabhoi Road", top: "62.5%", left: "69.3%", delay: "1.0s" },
      { id: 3, label: "Dabhoi", top: "104%", left: "49.3%", delay: "0s" },
    ],
  };

  return (
    <>
      {/* INJECTED STYLES: Guarantees animations run regardless of Tailwind config */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .animate-drawTrail {
          animation: drawPath 3.0s ease-out forwards;
        }
        @keyframes drawPath {
          0% { stroke-dashoffset: 1; }
          100% { stroke-dashoffset: 0; }
        }
        .animate-revealPin {
          animation: revealPin 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes revealPin {
          0% { opacity: 0; transform: translate(-50%, -80%) scale(0.9); }
          100% { opacity: 1; transform: translate(-50%, -100%) scale(1); }
        }
      `,
        }}
      />

      <section
        ref={sectionRef}
        className="bg-[#F7F7F7] w-full pt-[100px] lg:pt-[120px] pb-0 overflow-hidden flex flex-col items-center"
      >
        {/* --- TOP CONTENT AREA --- */}
        <div className="container mx-auto px-6 flex flex-col items-center text-center relative z-20">
          <div className="w-[230px] h-[125px] bg-white rounded-[24px] border border-black/5 shadow-[0_6px_18px_rgba(0,0,0,0.04)] flex items-center justify-center">
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

          <h2 className="font-heading text-[#1E1E1E] font-bold text-[36px] lg:text-[42px] leading-[1.05] tracking-[-1px] mt-[40px]">
            Our Investment Network
          </h2>

          <p className={`${source.className} font-body text-[#333333] font-normal text-[14px] lg:text-[19px] leading-[1.5] max-w-[800px] mt-[20px] mx-auto`}>
            For specialized land investment opportunities, we collaborate with
            AbbasLandVision, focusing on
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-5 lg:gap-[50px] mt-[30px] pb-[20px]">
            {categories.map((category, index) => (
              <div key={index} className="flex items-center gap-[8px]">
                <div className="relative w-[18px] h-[18px] flex-shrink-0">
                  <Image
                    src="/verified-check.png"
                    alt="Category Star"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="font-heading text-[#1E1E1E] font-semibold text-[15px] lg:text-[19px]">
                  {category}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* --- IMAGE & ANIMATION AREA --- */}
        <div className="relative w-full h-[570px] lg:h-[700px] -mt-[40px] lg:-mt-[100px] z-10">
          <Image
            src="/dabhoi-road.png"
            alt="Dabhoi Land Investment Corridor"
            fill
            className="object-cover object-center block"
            sizes="100vw"
            priority
          />

          {/* 1. The Merge & Blur Effect */}
          <div className="absolute top-0 left-0 w-full h-[250px] pointer-events-none z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-[#F7F7F7] via-[#F7F7F7]/80 to-transparent" />
            <div
              className="absolute inset-0 backdrop-blur-[8px]"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 0%, transparent 100%)",
                maskImage:
                  "linear-gradient(to bottom, black 0%, transparent 100%)",
              }}
            />
          </div>

          {/* 2. THE ADJUSTABLE SVG TRAIL WRAPPER */}
          <div
            className={`absolute z-20 pointer-events-none transition-all duration-300 ${networkConfig.trail.mobile} ${networkConfig.trail.desktop}`}
          >
            <svg
              className="w-full h-auto"
              viewBox="0 0 453 354"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <mask id="trail-mask">
                  <path
                    d={networkConfig.trail.path}
                    fill="none"
                    stroke="white"
                    strokeWidth="10"
                    pathLength="1"
                    strokeDasharray="1"
                    strokeDashoffset="1"
                    /* The class is applied conditionally here based on scroll visibility */
                    className={isVisible ? "animate-drawTrail" : ""}
                  />
                </mask>
              </defs>

              <path
                d={networkConfig.trail.path}
                fill="none"
                stroke="white"
                strokeWidth="3"
                mask="url(#trail-mask)"
                style={{
                  strokeDasharray: "15 20",
                  filter: "drop-shadow(0 0 8px rgba(255,255,255,0.8))",
                }}
              />
            </svg>
          </div>

          {/* 3. The Location Pins */}
          {networkConfig.pins.map((pin) => (
            <div
              key={pin.id}
              className={`absolute flex flex-col items-center transform -translate-x-1/2 -translate-y-full z-30 opacity-0 ${isVisible ? "animate-revealPin" : ""}`}
              style={{
                top: pin.top,
                left: pin.left,
                animationDelay: pin.delay,
                animationFillMode: "forwards",
              }}
            >
              <div className="bg-[#8F8F8F] backdrop-blur-[8px] rounded-[16px] px-[16px] py-[8px] flex items-center gap-2 shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-[12px] h-[12px] text-white"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="font-body text-white font-medium text-[15px] whitespace-nowrap">
                  {pin.label}
                </span>
              </div>
              <div className="h-[40px] lg:h-[60px] border-l-[2px] border-dashed border-[rgba(255,255,255,0.75)]"></div>
              <div className="w-[10px] h-[10px] bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)] relative -mt-[2px]"></div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
