"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Phone, Mail } from "lucide-react";

export default function Footer() {

  const footerRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={footerRef} className="relative w-full overflow-hidden bg-white">
      {/* ========================================================= */}
      {/* MAIN SECTION */}
      {/* ========================================================= */}

      <div className="relative w-full h-[760px] overflow-hidden">
        {/* ========================================================= */}
        {/* BACKGROUND IMAGE */}
        {/* ========================================================= */}
        <div className="absolute top-0 left-0 w-full h-[220px] z-[0] backdrop-blur-[12px]" />

        {/* DESKTOP IMAGE (Hidden on mobile) */}
        <img
          src="/footer-bg-3.jpg"
          alt="Sukoon Property Desktop"
          className={`hidden md:block absolute bottom-0 left-0 w-full h-full object-[center_74%] scale-y-120 brightness-[0.65] contrast-[0.85] saturate-[0.90] blur-[0.4px] ease-out bg-slow-fade delay-1000 ${isVisible ? "opacity-100 blur-0 brightness-100" : "opacity-0 blur-md brightness-75"}`}
        />

        {/* MOBILE IMAGE (Hidden on desktop) 
            Note: I removed the scale-y-120 here assuming your new mobile 
            image is already perfectly proportioned for portrait screens! 
        */}
        <img
          src="/footer-bg-mobile.jpg"
          alt="Sukoon Property Mobile"
          className={`block md:hidden absolute bottom-0 left-0 w-full h-full object-cover object-bottom brightness-[0.65] contrast-[0.85] saturate-[0.90] blur-[0.4px] ease-out bg-slow-fade delay-1000 ${isVisible ? "opacity-100 blur-0 brightness-100" : "opacity-0 blur-md brightness-75"}`}
        />

        {/* ========================================================= */}
        {/* ATMOSPHERIC TOP MERGE */}
        {/* ========================================================= */}

        <div className="absolute inset-0 z-[1] pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-[75%] bg-gradient-to-b from-[#F7F8FA] via-[#F7F8FA]/95 via-[35%] to-transparent" />
        </div>

        {/* ========================================================= */}
        {/* BOTTOM DARK OVERLAY */}
        {/* ========================================================= */}

        <div className="absolute bottom-0 left-0 w-full h-[34%] bg-gradient-to-t from-black via-black/55 to-transparent z-[1]" />

        {/* ========================================================= */}
        {/* CONTENT LAYER */}
        {/* ========================================================= */}

        <div className="relative z-10 h-full flex flex-col">
          {/* ===================================================== */}
          {/* CTA SECTION */}
          {/* ===================================================== */}

          <div className="w-full flex flex-col items-center text-center pt-[70px] px-6">
            <h2 className={`font-heading font-bold text-[#1F1F1F] text-[32px] md:text-[40px] leading-[1.15] tracking-[-0.02em] mb-[16px] max-w-[820px] ${isVisible ? "animate-base main-heading-animation" : "opacity-0"}`}>
              Ready to Invest in the Right Property?
            </h2>

            <p className={`font-body font-normal text-[#1F1F1F]/80 text-[16px] md:text-[18px] leading-[1.7] max-w-[650px] mb-[32px] ${isVisible ? "animate-base sub-heading-animation" : "opacity-0"}`}>
              Explore verified residential, commercial, and land opportunities
              <br className="hidden md:block" />
              tailored to your investment goals
            </p>

            <Link
              href="/properties"
              className={`animate-base content-animation inline-flex items-center justify-center bg-[#52B7EC] text-white px-6 h-[40px] rounded-full font-heading font-normal text-[12px] hover:brightness-110 transition-all duration-300 ${isVisible ? "animate-base scale-pop-animation delay-200" : "opacity-0"}`}
            >
              Explore Properties
            </Link>
            <div className="h-[90px]" />
          </div>

          {/* ===================================================== */}
          {/* FLEX SPACER */}
          {/* ===================================================== */}

          <div className="flex-1" />

          {/* ===================================================== */}
          {/* FOOTER CONTENT */}
          {/* ===================================================== */}

          <div className="relative z-10 w-full max-w-[1920px] mx-auto px-8 md:px-16 lg:px-[100px] pb-[34px]">
            {/* ================================================= */}
            {/* TOP ROW */}
            {/* ================================================= */}

            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-[72px] md:mb-[80px]">
              {/* LOGO */}

              <div className={`${isVisible ? "animate-base form-animation delay-300" : "opacity-0"}`}>
                <img
                  src="/logo-white.webp"
                  alt="Sukoon Developer"
                  className="h-[48px] md:h-[56px] w-auto object-contain"
                />
              </div>

              {/* NAVIGATION */}

              <nav className={`flex flex-wrap gap-10 md:gap-15 font-body text-white/90 text-[15px] ${isVisible ? "animate-base content-animation delay-400" : "opacity-0"}`}>
                <Link
                  href="/"
                  className="hover:text-white transition-colors duration-300"
                >
                  Home
                </Link>

                <Link
                  href="/about"
                  className="hover:text-white transition-colors duration-300"
                >
                  About Us
                </Link>

                <Link
                  href="/properties"
                  className="hover:text-white transition-colors duration-300"
                >
                  Property listing
                </Link>
              </nav>
            </div>

            {/* ================================================= */}
            {/* BOTTOM ROW */}
            {/* ================================================= */}

            <div className={`relative flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-white/80 text-[14px] font-body ${isVisible ? "animate-base content-animation delay-500" : "opacity-0"}`}>
              {/* CONTACT INFO */}

              <div className="flex flex-col sm:flex-row gap-5 sm:gap-8">
                <a
                  href="tel:+919825444603"
                  className="flex items-center gap-2 hover:text-white transition-colors duration-300"
                >
                  <Phone size={16} fill="currentColor" strokeWidth={0} />
                  +91 98254 44603
                </a>

                <a
                  href="mailto:info@sukoon.in"
                  className="flex items-center gap-2 hover:text-white transition-colors duration-300"
                >
                  <Mail size={16} fill="currentColor" strokeWidth={0} />
                  info@sukoon.in
                </a>
              </div>

              {/* COPYRIGHT */}

              <p className="md:absolute md:left-1/2 md:-translate-x-1/2 whitespace-nowrap">
                © 2026 Sukoon, All Rights Reserved
              </p>

              {/* SOCIAL ICONS */}

              <div className="flex items-center gap-6 text-white">
                {/* X */}

                <a
                  href="#"
                  className="hover:text-[#52B7EC] transition-colors duration-300"
                  aria-label="X"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                {/* FACEBOOK */}

                <a
                  href="#"
                  className="hover:text-[#52B7EC] transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>

                {/* INSTAGRAM */}

                <a
                  href="#"
                  className="hover:text-[#52B7EC] transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
