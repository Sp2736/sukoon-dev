"use client";

import { useState, useEffect, useRef } from "react";
import { Source_Sans_3 } from "next/font/google";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400"],
});

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When 50% of the section is visible, trigger the animation
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Unobserve once triggered so it doesn't replay awkwardly if they scroll up and down
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        }
      },
      {
        threshold: 0.5, // 0.5 means 50% of the section must be in the viewport
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full bg-white overflow-hidden h-[967px] flex items-center"
    >
      {/* Background Building Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/constructive-animation.svg"
          alt="Building Construction Outline"
          className={`
            absolute
            bottom-0
            left-[-20px]
            w-full
            lg:w-[85%]
            h-auto
            object-contain
            object-bottom-left
            origin-bottom-left
            scale-x-120
            scale-y-120
            transition-opacity
            duration-500
            ${isVisible ? "animate-construct opacity-100" : "opacity-0"}
          `}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full">
        {/* Positioning Wrapper */}
        <div className="ml-[48.5%] max-w-[760px]">
          {/* Heading */}
          <h2
            className="
              font-heading
              font-bold
              text-[#1F1F1F]
              text-[40px]
              leading-[1.15]
              tracking-[-0.02em]
              mb-[38px]
            "
          >
            About Sukoon Developers
          </h2>

          {/* Body Text */}
          <div
            className={`
              ${sourceSans.className}
              text-[#1F1F1F]
              text-[20px]
              leading-[1.7]
              space-y-[32px]
              max-w-[690px]
            `}
          >
            <p>
              Sukoon Developers is a real estate consultancy and development
              firm helping individuals and businesses make confident property
              decisions across Gujarat
            </p>

            <p>
              We work across residential, commercial, industrial, and land
              segments—offering guidance in construction, development,
              redevelopment, and property investments
            </p>

            <p>
              Our focus is simple: to provide clear direction, reliable
              opportunities, and a smooth experience from start to finish
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}