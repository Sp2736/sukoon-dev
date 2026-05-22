"use client";

import { useState, useEffect, useRef } from "react";

const categories = [
  { title: "Residential", image: "/residential.webp" },
  { title: "Commercial", image: "/commercial.webp" },
  { title: "Industrial", image: "/industrial.webp" },
  { title: "Open Land – Agricultural", image: "/agri-land.webp" },
  { title: "Open Land – Non Agricultural", image: "/non-agri-land.webp" },
];

export default function InvestmentCategories() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once it appears
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
      className="relative w-full bg-[#FFFFFF] flex flex-col items-center py-16 lg:py-[100px] overflow-hidden"
    >
      {/* Heading */}
      <h2
        className={`
        font-heading font-bold text-[#1F1F1F] text-[28px] md:text-[34px] lg:text-[40px] leading-[1.2] lg:leading-[1.1] text-center mb-4 lg:mb-[20px] px-6
        ${isVisible ? "animate-base main-heading-animation" : "opacity-0"}
      `}
      >
        What Are You Investing In?
      </h2>

      {/* Subheading */}
      <p
        className={`
        font-body font-normal text-[#1F1F1F] text-[14px] md:text-[16px] lg:text-[18px] leading-[1.6] text-center w-full max-w-[725px] px-6 mb-10 lg:mb-[80px]
        ${isVisible ? "animate-base sub-heading-animation" : "opacity-0"}
      `}
      >
        From premium residential developments to high-return land{" "}
        <br className="hidden lg:block" />
        investments two trusted names, one vision of excellence in Gujarat.
      </p>

      {/* Cards Grid */}
      <div className="w-full max-w-[1720px] px-6 md:px-12 lg:px-[100px] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-[20px]">
        {categories.map((cat, index) => {
          // Dynamically assign delays based on index (0, 100, 200, etc.)
          const delayClass = index === 0 ? "" : `delay-${index * 100}`;

          return (
            <div
              key={index}
              className={`
                relative w-full aspect-[328/362] rounded-[16px] lg:rounded-[20px] overflow-hidden shadow-sm
                /* Trigger animation with dynamic delay */
                ${isVisible ? `animate-base card-reveal-animation ${delayClass}` : "opacity-0"}
              `}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-105"
                style={{ backgroundImage: `url('${cat.image}')` }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, #000000 100%)",
                }}
              />
              <h3 className="absolute bottom-[12px] lg:bottom-[16px] left-0 w-full text-center font-heading font-semibold text-white text-[15px] md:text-[17px] lg:text-[19px] z-10 px-2 leading-tight">
                {cat.title}
              </h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}
