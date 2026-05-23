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
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        }
      },
      {
        threshold: 0.4,
      },
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
      // py-20 gives natural padding on mobile, lg:h-[967px] keeps exact desktop height
      className="relative w-full bg-white overflow-hidden py-10 lg:py-0 lg:h-[720px] flex items-center"
    >
      {/* Background Building Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-end">
        <img
          src="/constructive-animation.svg"
          alt="Building Construction Outline"
          className={`
            absolute
            bottom-0
            left-[-20px]
            w-[150%] md:w-[100%] lg:w-[85%]
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

      {/* Content Container - Adjusted width and padding for mobile */}
      <div className="relative z-10 w-full px-6 md:px-16 lg:px-0">
        {/* Positioning Wrapper: 
            Now completely transparent on all screen sizes so the SVG shows through.
            Preserves your desktop left margin.
        */}
        <div className="w-full lg:ml-[48.5%] max-w-[760px] bg-transparent p-6 md:p-8 lg:p-0">
          {/* Heading */}
          <h2
            className={`
              font-heading
              font-bold
              text-[#1F1F1F]
              text-[32px] md:text-[36px] lg:text-[40px]
              leading-[1.2] lg:leading-[1.15]
              tracking-[-0.02em]
              mb-6 lg:mb-[38px]
              ${isVisible ? "animate-base main-heading-animation delay-400" : "opacity-0"}
            `}
          >
            About Sukoon Developer
          </h2>

          {/* Body Text */}
          <div
            className={`
              ${sourceSans.className}
              text-[#1F1F1F]
              text-[16px] md:text-[18px] lg:text-[20px]
              leading-[1.6] lg:leading-[1.7]
              space-y-6 lg:space-y-[32px]
              max-w-[690px]
              ${isVisible ? "animate-base content-animation delay-600" : "opacity-0"}
            `}
          >
            <p>
              Sukoon Developer is a real estate consultancy and development
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
