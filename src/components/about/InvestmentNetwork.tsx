"use client";

import React, { useEffect, useRef, useState } from "react";
import { Instrument_Sans, Source_Sans_3 } from "next/font/google";

const instrument = Instrument_Sans({ subsets: ["latin"] });
const source = Source_Sans_3({ subsets: ["latin"] });

export default function InvestmentNetwork() {
  const trackRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const svgWrapRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const progressRef = useRef(0);

  const [isTextVisible, setIsTextVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [stickyTop, setStickyTop] = useState(0);
  const [trackHeight, setTrackHeight] = useState(0);

  useEffect(() => {
    const calculate = () => {
      if (!stickyRef.current || !svgWrapRef.current) return;

      const vh = window.innerHeight;
      const contentHeight = stickyRef.current.scrollHeight;

      // The SVG viewBox is 1920×1080.
      // Dabhoi pin circle is at cy=940. We want to stop just below it —
      // so we add a small extra gap (~30px in viewBox units below cy=940).
      // Target viewBox Y = 970. That's 970/1080 = ~89.8% down the viewBox.
      // The rendered SVG height in px:
      const svgRenderedHeight =
        svgWrapRef.current.getBoundingClientRect().height;
      // Pixels from SVG top to our target stop point:
      const stopFraction = 975 / 1080; // just below Dabhoi circle (cy=940) + small gap
      const stopPxFromSVGTop = svgRenderedHeight * stopFraction;
      // Pixels from SVG top to content bottom:
      const svgOffsetTop = svgWrapRef.current.offsetTop; // SVG wrapper top within stickyRef
      // Total px from stickyRef top to our stop point:
      const stopPxFromContentTop = svgOffsetTop + stopPxFromSVGTop;
      // How much to shift: we want the viewport bottom to land at stopPxFromContentTop
      // Normal overhang pins viewport bottom at contentHeight.
      // We want it at stopPxFromContentTop instead.
      // So top = -(stopPxFromContentTop - vh)
      const adjustedTop = -(stopPxFromContentTop - vh);

      setStickyTop(adjustedTop);
      // Track height: enough for the full content to arrive + 3×vh animation runway
      // Use contentHeight (not stopPx) so nothing gets cut from layout
      setTrackHeight(contentHeight + vh * 3);
    };

    calculate();
    window.addEventListener("resize", calculate);
    return () => window.removeEventListener("resize", calculate);
  }, []);

  // ── Entrance observer ─────────────────────────────────────────────────────
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTextVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 },
    );
    if (trackRef.current) observer.observe(trackRef.current);
    return () => observer.disconnect();
  }, []);

  // ── Scroll → progress ─────────────────────────────────────────────────────
  useEffect(() => {
    if (!trackHeight) return;
    const handleScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        if (!trackRef.current || !stickyRef.current || !svgWrapRef.current)
          return;

        const { top } = trackRef.current.getBoundingClientRect();
        const vh = window.innerHeight;
        const contentH = stickyRef.current.scrollHeight;
        const svgRenderedHeight =
          svgWrapRef.current.getBoundingClientRect().height;
        const stopFraction = 975 / 1080;
        const stopPxFromSVGTop = svgRenderedHeight * stopFraction;
        const svgOffsetTop = svgWrapRef.current.offsetTop;
        const stopPxFromContentTop = svgOffsetTop + stopPxFromSVGTop;
        const overhang = Math.max(0, stopPxFromContentTop - vh);

        const scrolled = -top;
        const animScrolled = scrolled - overhang;
        const animTotal = vh * 3;
        const p = Math.max(0, Math.min(1, animScrolled / animTotal));
        if (p !== progressRef.current) {
          progressRef.current = p;
          setScrollProgress(p);
        }
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [trackHeight]);

  const categories = [
    "Agricultural Land",
    "Non-Agricultural (NA) Land",
    "High-growth investment zones",
  ];

  // ── Animation helpers ─────────────────────────────────────────────────────
  const norm = (p: number, start: number, end: number) =>
    Math.max(0, Math.min(1, (p - start) / (end - start)));

  const pinStyle = (
    fadeStart: number,
    fadeEnd: number,
  ): React.CSSProperties => {
    const p = norm(scrollProgress, fadeStart, fadeEnd);
    return {
      opacity: p,
      transform: `translateY(${(1 - p) * 18}px) scale(${0.92 + p * 0.08})`,
      transition: "none",
    };
  };

  const trailProgress = (() => {
    const seg1 = norm(scrollProgress, 0.08, 0.3) * 0.33;
    const seg2 = norm(scrollProgress, 0.38, 0.62) * 0.34;
    const seg3 = norm(scrollProgress, 0.7, 1.0) * 0.33;
    return seg1 + seg2 + seg3;
  })();

  const trailOffset = 1 - trailProgress;

  return (
    <div
      ref={trackRef}
      className="relative w-full bg-[#F7F7F7]"
      style={{ height: trackHeight ? `${trackHeight}px` : "auto" }}
    >
      <div
        ref={stickyRef}
        className="sticky w-full overflow-hidden flex flex-col items-center pt-[3px] lg:pt-[5px]"
        style={{ top: `${stickyTop}px` }}
      >
        {/* TOP CONTENT — untouched */}
        <div className="max-w-[1400px] mx-auto px-6 text-center relative z-20">
          <div
            className={`mx-auto w-[230px] h-[125px] bg-white rounded-[24px] border border-black/5 shadow-[0_6px_18px_rgba(0,0,0,0.04)] flex items-center justify-center ${isTextVisible ? "animate-base scale-pop-animation" : "opacity-0"}`}
          >
            <img
              src="/abbas-logo-about.webp"
              alt="Abbas Land Vision"
              className="w-[180px] object-contain"
            />
          </div>

          <h2
            className={`font-heading text-[#1E1E1E] font-bold text-[36px] lg:text-[42px] leading-[1.05] tracking-[-1px] mt-[40px] ${isTextVisible ? "animate-base main-heading-animation delay-100" : "opacity-0"}`}
          >
            Our Investment Network
          </h2>

          <p
            className={`${source.className} text-[#333333] text-[14px] lg:text-[19px] leading-[1.5] max-w-[850px] mt-[20px] mx-auto ${isTextVisible ? "animate-base sub-heading-animation delay-200" : "opacity-0"}`}
          >
            For specialized land investment opportunities, we collaborate with
            AbbasLandVision, focusing on
          </p>

          <div
            className={`flex flex-col md:flex-row justify-center items-center gap-5 lg:gap-[50px] mt-[30px] pb-[20px] ${isTextVisible ? "animate-base content-animation delay-300" : "opacity-0"}`}
          >
            {categories.map((category, index) => (
              <div key={index} className="flex items-center gap-[8px]">
                <img
                  src="/verified-check.webp"
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
        <div
          ref={svgWrapRef}
          className="relative w-full -mt-[40px] lg:-mt-[100px]"
        >
          <svg
            viewBox="0 0 1920 1080"
            className="w-full h-auto block"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <mask id="trail-mask">
                <rect width="100%" height="100%" fill="black" />
                <path
                  d="M2.50067 599.501L34.5007 512.001L92.0007 415.501L170.001 334.001L259.501 256.501L342.501 205.501L398.501 170.001L462.501 126.001L532.001 85.5006L606.501 50.0006L639.001 31.5006L677.501 21.0006L722.001 8.50058L747.001 2.50058"
                  fill="none"
                  stroke="white"
                  strokeWidth="36"
                  strokeLinecap="round"
                  pathLength="1"
                  strokeDasharray="1"
                  strokeDashoffset={trailOffset}
                />
              </mask>

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

              <linearGradient id="topFade" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#F7F7F7" stopOpacity="1" />
                <stop offset="45%" stopColor="#F7F7F7" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#F7F7F7" stopOpacity="0" />
              </linearGradient>
            </defs>

            <image
              href="/dabhoi-road.webp"
              x="0"
              y="0"
              width="1920"
              height="1080"
              preserveAspectRatio="xMidYMid slice"
            />
            <rect x="0" y="0" width="1920" height="260" fill="url(#topFade)" />

            <path
              d="M2.50067 599.501L34.5007 512.001L92.0007 415.501L170.001 334.001L259.501 256.501L342.501 205.501L398.501 170.001L462.501 126.001L532.001 85.5006L606.501 50.0006L639.001 31.5006L677.501 21.0006L722.001 8.50058L747.001 2.50058"
              fill="none"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="10 18"
              mask="url(#trail-mask)"
              transform="translate(885, 345)"
            />

            {/* PIN 1 — Dabhoi */}
            <g style={pinStyle(0.0, 0.08)}>
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
                fill="rgb(143,143,143)"
              />
              <image
                href="/location-marker-white.webp"
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

            {/* PIN 2 — Dabhoi Road */}
            <g style={pinStyle(0.3, 0.38)}>
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
                fill="rgb(143,143,143)"
              />
              <image
                href="/location-marker-white.webp"
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

            {/* PIN 3 — Kapurai */}
            <g style={pinStyle(0.62, 0.7)}>
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
                fill="rgb(143,143,143)"
              />
              <image
                href="/location-marker-white.webp"
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
      </div>
    </div>
  );
}
