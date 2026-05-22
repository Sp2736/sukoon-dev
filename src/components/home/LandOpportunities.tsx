"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const highlights = [
  { title: "Long-Term Returns", icon: "/icon-long-term.webp" },
  { title: "Secure Investment", icon: "/icon-secure.webp" },
  { title: "Prime Locations", icon: "/icon-prime.webp" },
  { title: "Strong Growth Potential", icon: "/icon-growth.webp" },
];

export default function LandOpportunities() {
  const abbasLogoSrc = "/abbas-logo-cropped.svg";

  const trackRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const progressRef = useRef(0);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [trackHeight, setTrackHeight] = useState(0);
  const [stickyTop, setStickyTop] = useState(0);

  // ── Measure: Top-Locking Strategy ─────────────────────────────────────────
  useEffect(() => {
    const calculate = () => {
      if (!stickyRef.current) return;
      const vh = window.innerHeight;
      const contentHeight = stickyRef.current.scrollHeight;

      // Dynamically set the lock position based on screen size.
      // On mobile (vh < 768), we lock higher (e.g., 60px) to keep the logo tight.
      // On desktop, we lock at 80px to accommodate the navbar.
      const lockPosition = vh < 768 ? 60 : 80;
      setStickyTop(lockPosition);

      // Increase the runway height specifically for mobile to
      // prevent the animation from feeling too fast or "scrolling through" too quickly.
      const runwayMultiplier = vh < 768 ? 6 : 4;
      setTrackHeight(contentHeight + vh * runwayMultiplier);
    };

    calculate();
    window.addEventListener("resize", calculate);
    return () => window.removeEventListener("resize", calculate);
  }, []);

  // ── Scroll → progress (0→1 over 4×vh after fully visible) ───────────────
  useEffect(() => {
    if (!trackHeight) return;
    const handleScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        if (!trackRef.current || !stickyRef.current) return;

        const { top } = trackRef.current.getBoundingClientRect();
        const vh = window.innerHeight;

        // the "locked" phase begins exactly when the track's top reaches 80px.
        const lockPosition = 80;
        const animScrolled = lockPosition - top;

        const animTotal = vh * 4;

        // Calculate progress (clamped safely between 0 and 1)
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

  // ── Animation timeline ───────────────────────────────────────────────────
  const norm = (p: number, start: number, end: number) =>
    Math.max(0, Math.min(1, (p - start) / (end - start)));

  const overlayP = norm(scrollProgress, 0.0, 0.22);
  const headingP = norm(scrollProgress, 0.22, 0.38);
  const subP = norm(scrollProgress, 0.38, 0.54);
  const bulletP = (idx: number) =>
    norm(scrollProgress, 0.54 + idx * 0.05, 0.66 + idx * 0.05);
  const cardP = norm(scrollProgress, 0.75, 1.0);

  // Reusable style builder — opacity + translateY, fully scroll-driven
  const revealStyle = (p: number, yOffset = 22): React.CSSProperties => ({
    opacity: p,
    transform: `translateY(${(1 - p) * yOffset}px)`,
    transition: "none",
  });

  return (
    <div
      ref={trackRef}
      className="relative w-full"
      style={{ height: trackHeight ? `${trackHeight}px` : "auto" }}
    >
      <section
        ref={stickyRef}
        className="sticky w-full py-10 lg:py-0 lg:min-h-[800px] flex items-center overflow-hidden bg-white"
        style={{ top: `${stickyTop}px` }}
      >
        {/* ── BACKGROUND LAYERS ── */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/land-opportunities-bg.webp')" }}
        />
        <div
          className="absolute inset-0 z-0 bg-white/20"
          style={{ opacity: overlayP }}
        />
        <div
          className="absolute left-0 inset-y-0 w-full lg:w-[80%] z-0 bg-gradient-to-r from-white via-white/90 to-transparent"
          style={{ opacity: overlayP }}
        />
        <div
          className="absolute top-0 left-0 w-full h-[80px] z-0 bg-gradient-to-b from-white via-white/30 to-transparent"
          style={{ opacity: overlayP }}
        />
        <div
          className="absolute bottom-0 left-0 w-full h-[150px] z-0 bg-gradient-to-t from-white via-white/30 to-transparent"
          style={{ opacity: overlayP }}
        />

        {/* ── CONTENT ── */}
        <div className="relative z-10 w-full max-w-[1920px] mx-auto px-6 md:px-16 lg:px-[100px] pt-2 lg:pt-[50px] pb-6 lg:pb-[100px] flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 lg:gap-12">
          {/* LEFT COLUMN */}
          <div className="w-full max-w-[750px] flex flex-col items-start text-left">
            {/* Logo */}
            <div
              className="mb-6 lg:mb-[40px] flex items-center"
              style={revealStyle(headingP)}
            >
              <img
                src={abbasLogoSrc}
                alt="Abbas Land Vision"
                className="h-10 lg:h-15 w-auto object-contain transition-all duration-300"
              />
            </div>

            {/* Heading */}
            <h2
              className="font-heading font-bold text-[#1F1F1F] text-[26px] md:text-[36px] lg:text-[42px] leading-[1.15] lg:leading-[1.1] mb-[16px] lg:mb-[24px]"
              style={revealStyle(headingP)}
            >
              Invest in High-Potential Land Opportunities
            </h2>

            {/* Subheading */}
            <p
              className="font-body font-normal text-[#1F1F1F]/80 text-[14px] md:text-[16px] lg:text-[18px] leading-[1.5] lg:leading-[1.6] mb-6 lg:mb-[40px] max-w-[650px]"
              style={revealStyle(subP)}
            >
              Explore agricultural and non-agricultural land options with strong
              growth potential and long-term returns. Ideal for investors
              looking to secure future value
            </p>

            {/* Button */}
            <Link
              href="/contact"
              className="inline-block bg-[#52B7EC] text-white px-6 py-3 rounded-full font-heading font-semibold text-[14px] hover:brightness-110 transition-colors mb-8 lg:mb-[60px]"
              style={revealStyle(subP)}
            >
              Talk to an Expert
            </Link>

            {/* Highlights grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 lg:gap-y-8 gap-x-12">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 lg:gap-4"
                  style={revealStyle(bulletP(idx))}
                >
                  <div className="w-[36px] h-[36px] lg:w-[48px] lg:h-[48px] rounded-full bg-[#52B7EC]/10 flex items-center justify-center shrink-0">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="w-[18px] h-[18px] lg:w-[24px] lg:h-[24px] object-contain"
                    />
                  </div>
                  <span className="font-heading font-semibold text-[15px] lg:text-[18px] text-[#1F1F1F]">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN — Glass card */}
          <div
            className="w-full lg:w-auto flex justify-start lg:justify-end mt-2 lg:mt-0"
            style={revealStyle(cardP, 30)}
          >
            <div className="bg-black/60 lg:bg-white/20 backdrop-blur-md border border-white/20 lg:border-white/40 rounded-[16px] p-5 lg:p-6 max-w-[550px] shadow-lg flex items-start gap-4">
              <div className="shrink-0 mt-1">
                <img
                  src="/location-marker-white.webp"
                  alt="location"
                  className="w-[24px] h-[24px] lg:w-[30px] lg:h-[30px] object-contain opacity-95"
                />
              </div>
              <p className="font-body font-medium text-[14px] lg:text-[19px] text-white leading-[1.5] lg:leading-[1.6]">
                In collaboration with{" "}
                <span className="font-bold">AbbasLandVision</span>, specializing
                in land investments in{" "}
                <span className="font-bold">
                  Vadodara (Dabhoi Road, from Kapurai to Dabhoi)
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
