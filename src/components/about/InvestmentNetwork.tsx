"use client";

import React, { useEffect, useRef, useState } from "react";
import { Instrument_Sans, Source_Sans_3 } from "next/font/google";

const instrument = Instrument_Sans({ subsets: ["latin"] });
const source = Source_Sans_3({ subsets: ["latin"] });

export default function InvestmentNetwork() {
  const [isVisible, setIsVisible] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const categories = [
    "Agricultural Land",
    "Non-Agricultural (NA) Land",
    "High-growth investment zones",
  ];

  return (
    <>
      {/* GLOBAL SVG ANIMATIONS */}
      <style
        dangerouslySetInnerHTML={{
          __html: `

            .animate-trailReveal {
              animation: revealTrail 3.2s linear forwards;
            }

            @keyframes revealTrail {
              from {
                stroke-dashoffset: 1;
              }

              to {
                stroke-dashoffset: 0;
              }
            }

            .animate-pinReveal {
              animation: revealPin 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }

            @keyframes revealPin {

              0% {
                opacity: 0;
                transform: translateY(20px) scale(0.92);
              }

              100% {
                opacity: 1;
                transform: translateY(0px) scale(1);
              }

            }

          `,
        }}
      />

      <section
        ref={sectionRef}
        className="bg-[#F7F7F7] w-full pt-[40px] lg:pt-[60px] pb-0 overflow-hidden flex flex-col items-center"
      >
        {/* TOP CONTENT */}
        <div className="max-w-[1400px] mx-auto px-6 text-center relative z-20">
          {/* LOGO */}
          <div className="mx-auto w-[230px] h-[125px] bg-white rounded-[24px] border border-black/5 shadow-[0_6px_18px_rgba(0,0,0,0.04)] flex items-center justify-center">
            <img
              src="/abbas-logo-about.png"
              alt="Abbas Land Vision"
              className="w-[180px] object-contain"
            />
          </div>

          {/* HEADING */}
          <h2
            className="
              font-heading
              text-[#1E1E1E]
              font-bold
              text-[36px]
              lg:text-[42px]
              leading-[1.05]
              tracking-[-1px]
              mt-[40px]
            "
          >
            Our Investment Network
          </h2>

          {/* DESCRIPTION */}
          <p
            className={`
              ${source.className}
              text-[#333333]
              text-[14px]
              lg:text-[19px]
              leading-[1.5]
              max-w-[850px]
              mt-[20px]
              mx-auto
            `}
          >
            For specialized land investment opportunities, we collaborate with
            AbbasLandVision, focusing on
          </p>

          {/* CATEGORY LIST */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-5 lg:gap-[50px] mt-[30px] pb-[20px]">
            {categories.map((category, index) => (
              <div key={index} className="flex items-center gap-[8px]">
                <img
                  src="/verified-check.png"
                  alt="check"
                  className="w-[18px] h-[18px] object-contain"
                />

                <span className="font-heading text-[#1E1E1E] font-semibold text-[15px] lg:text-[19px]">
                  {category}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* SVG MASTER SCENE */}
        <div className="relative w-full -mt-[40px] lg:-mt-[100px]">
          <svg
            viewBox="0 0 1920 1080"
            className="w-full h-auto block"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              {/* TRAIL MASK */}
              <mask id="trail-mask">
                {/* Hidden Background */}
                <rect width="100%" height="100%" fill="black" />

                {/* Animated Reveal Path */}
                <path
                  d="M2.50067 599.501L34.5007 512.001L92.0007 415.501L170.001 334.001L259.501 256.501L342.501 205.501L398.501 170.001L462.501 126.001L532.001 85.5006L606.501 50.0006L639.001 31.5006L677.501 21.0006L722.001 8.50058L747.001 2.50058"
                  fill="none"
                  stroke="white"
                  strokeWidth="36"
                  strokeLinecap="round"
                  pathLength="1"
                  strokeDasharray="1"
                  strokeDashoffset="1"
                  className={isVisible ? "animate-trailReveal" : ""}
                />
              </mask>

              {/* GLOW */}
              <filter
                id="trailGlow"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
              >
                <feGaussianBlur stdDeviation="6" result="blur" />

                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* TOP BLUR FADE */}
              <linearGradient id="topFade" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#F7F7F7" stopOpacity="1" />
                <stop offset="45%" stopColor="#F7F7F7" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#F7F7F7" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* BACKGROUND IMAGE */}
            <image
              href="/dabhoi-road.png"
              x="0"
              y="0"
              width="1920"
              height="1080"
              preserveAspectRatio="xMidYMid slice"
            />

            {/* TOP FADE OVERLAY */}
            <rect x="0" y="0" width="1920" height="260" fill="url(#topFade)" />

            {/* MAIN DASHED TRAIL */}
            <path
              d="M2.50067 599.501L34.5007 512.001L92.0007 415.501L170.001 334.001L259.501 256.501L342.501 205.501L398.501 170.001L462.501 126.001L532.001 85.5006L606.501 50.0006L639.001 31.5006L677.501 21.0006L722.001 8.50058L747.001 2.50058"
              fill="none"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="10 18"
              mask="url(#trail-mask)"
              /* ADD THIS: Shifts the entire line (X, Y) */
              transform="translate(885, 345)"
            />

            {/* PIN 1 */}
            <g
              className={isVisible ? "animate-pinReveal" : ""}
              style={{
                animationDelay: "0.0s",
                opacity: 0,
              }}
            >
              <line
                x1="890"
                y1="935"
                x2="890"
                y2="825"
                stroke="rgba(255,255,255,0.75)"
                strokeWidth="2"
                strokeDasharray="6 6"
              />

              <circle cx="890" cy="940" r="8" fill="white" />

              <rect
                x="810"
                y="800"
                width="160"
                height="54"
                rx="18"
                fill="rgb(143, 143, 143)"
              />

              <image
                href="/location-marker-white.png"
                x="833"
                y="815"
                width="24"
                height="24"
              />

              <text
                x="910"
                y="834"
                fill="white"
                textAnchor="middle"
                fontSize="22"
                fontFamily="sans-serif"
                fontWeight="500"
              >
                Dabhoi
              </text>
            </g>

            {/* PIN 2 */}
            <g
              className={isVisible ? "animate-pinReveal" : ""}
              style={{
                animationDelay: "1.0s",
                opacity: 0,
              }}
            >
              <line
                x1="1265"
                y1="520"
                x2="1265"
                y2="370"
                stroke="rgba(255,255,255,0.75)"
                strokeWidth="2"
                strokeDasharray="6 6"
              />

              <circle cx="1266" cy="525" r="8" fill="white" />

              <rect
                x="1155"
                y="320"
                width="220"
                height="54"
                rx="18"
                fill="rgb(143, 143, 143)"
              />

              <image
                href="/location-marker-white.png"
                x="1180"
                y="335"
                width="24"
                height="24"
              />

              <text
                x="1285"
                y="355"
                fill="white"
                textAnchor="middle"
                fontSize="22"
                fontFamily="sans-serif"
                fontWeight="500"
              >
                Dabhoi Road
              </text>
            </g>

            {/* PIN 3 */}
            <g
              className={isVisible ? "animate-pinReveal" : ""}
              style={{
                animationDelay: "2.0s",
                opacity: 0,
              }}
            >
              <line
                x1="1640"
                y1="350"
                x2="1640"
                y2="240"
                stroke="rgba(255,255,255,0.75)"
                strokeWidth="2"
                strokeDasharray="6 6"
              />

              <circle cx="1640" cy="345" r="8" fill="white" />

              <rect
                x="1560"
                y="185"
                width="160"
                height="54"
                rx="18"
                fill="rgb(143, 143, 143)"
              />

              <image
                href="/location-marker-white.png"
                x="1582"
                y="200"
                width="24"
                height="24"
              />

              <text
                x="1656"
                y="220"
                fill="white"
                textAnchor="middle"
                fontSize="22"
                fontFamily="sans-serif"
                fontWeight="500"
              >
                Kapurai
              </text>
            </g>
          </svg>
        </div>
      </section>
    </>
  );
}
