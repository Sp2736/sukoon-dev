"use client";

import { useState, useEffect, useRef } from "react";
import { Source_Sans_3 } from "next/font/google";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400"],
});

export default function WhyChooseUs() {
  // Separate refs for the header and an array of refs for the features
  const headerRef = useRef<HTMLDivElement>(null);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Independent visibility states
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [visibleFeatures, setVisibleFeatures] = useState<boolean[]>([false, false, false, false]);

  useEffect(() => {
    // 1. Observer for the Top Row (Heading & Subtext)
    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHeaderVisible(true);
          headerObserver.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (headerRef.current) headerObserver.observe(headerRef.current);

    // 2. Observer for the Individual Feature Cards
    const featureObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Get the specific index of the card that just entered the screen
            const index = Number(entry.target.getAttribute("data-index"));
            
            setVisibleFeatures((prev) => {
              const newArr = [...prev];
              newArr[index] = true;
              return newArr;
            });
            
            // Stop observing this specific card once it animates
            featureObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 } // Triggers beautifully as soon as the card's top edge scrolls into view
    );

    featureRefs.current.forEach((ref) => {
      if (ref) featureObserver.observe(ref);
    });

    return () => {
      headerObserver.disconnect();
      featureObserver.disconnect();
    };
  }, []);

  const features = [
    {
      icon: (
        <img
          src="/icon-bag-of-money.webp"
          alt="Money Bag"
          className="w-[28px] h-[28px]"
        />
      ),
      title: "Zero Brokerage, 100% Transparency",
      description:
        "We don't charge brokerage. Our focus is to help you find the right property with complete clarity and no hidden costs",
    },
    {
      icon: (
        <img
          src="/icon-consultation.webp"
          alt="Consultation"
          className="w-[28px] h-[28px]"
        />
      ),
      title: "Expert Consultation You Can Trust",
      description:
        "Whether you're buying, selling, or investing, our team provides honest advice tailored to your goals",
    },
    {
      icon: (
        <img
          src="/icon-checkmark.webp"
          alt="Verified"
          className="w-[28px] h-[28px]"
        />
      ),
      title: "Verified Properties Across Gujarat",
      description:
        "From residential to industrial and land investments, every listing is carefully verified for authenticity and value",
    },
    {
      icon: (
        <img
          src="/icon-support.webp"
          alt="Support"
          className="w-[28px] h-[28px]"
        />
      ),
      title: "End-to-End Support",
      description:
        "From property selection to final deal closure, we guide you at every step to ensure a smooth experience",
    },
  ];

  return (
    <section className="w-full bg-[#FFFFFF] px-6 md:px-16 lg:px-[100px] pt-16 pb-20 lg:pt-[60px] lg:pb-[100px] overflow-hidden">
      <div className="w-full max-w-[1720px] mx-auto">
        
        {/* Top Row: Heading and Sub-text */}
        <div 
          ref={headerRef}
          className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 lg:mb-[80px] gap-4 lg:gap-0"
        >
          {/* Left Heading */}
          <h2 
            className={`
              font-heading font-bold text-[#1F1F1F] text-[28px] md:text-[32px] lg:text-[40px] leading-[1.2] max-w-[500px]
              ${isHeaderVisible ? "animate-base main-heading-animation" : "opacity-0"}
            `}
          >
            Why Choose Sukoon Developer
          </h2>

          {/* Right Sub-text */}
          <p
            className={`
              ${sourceSans.className} font-normal text-[#1F1F1F]/80 text-[16px] md:text-[18px] lg:text-[20px] leading-[1.6] lg:leading-[1.5] max-w-[450px]
              ${isHeaderVisible ? "animate-base sub-heading-animation" : "opacity-0"}
            `}
          >
            Smart property decisions start with the right{" "}
            <br className="hidden lg:block" /> guidance
          </p>
        </div>

        {/* Bottom Row: 4 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-2 lg:gap-y-0 border-gray-200">
          {features.map((feature, index) => {
            // Keep the delay for desktop synchronization
            const delayClass = index === 0 ? "delay-100" : `delay-${index * 100 + 100}`;
            
            return (
              <div
                key={index}
                // Attach the dynamic ref and data-index
                ref={(el) => { featureRefs.current[index] = el; }}
                data-index={index}
                className={`
                  flex flex-col items-start text-left 
                  py-8 lg:py-0 
                  /* Desktop Padding */
                  lg:px-8 first:lg:pl-0 last:lg:pr-0 
                  /* Borders: Clean bottom borders on mobile/tablet, right borders on desktop */
                  border-b border-gray-100 lg:border-b-0 lg:border-r lg:border-gray-200 
                  last:border-b-0 last:lg:border-r-0
                  /* Triggered by its own specific visibility state */
                  ${visibleFeatures[index] ? `animate-base content-animation ${delayClass}` : "opacity-0"}
                `}
              >
                {/* Icon Container */}
                <div className="w-[56px] h-[56px] lg:w-[64px] lg:h-[64px] rounded-full bg-[#52B7EC]/10 flex items-center justify-center mb-6 lg:mb-[32px] shrink-0">
                  {feature.icon}
                </div>

                {/* Feature Title */}
                <h3 className="font-heading font-bold text-[#1F1F1F] text-[18px] lg:text-[20px] leading-[1.4] mb-3 lg:mb-[16px] max-w-[280px]">
                  {feature.title}
                </h3>

                {/* Feature Description */}
                <p className="font-body font-normal text-[#1F1F1F]/60 text-[14px] lg:text-[12px] leading-[1.6] lg:leading-[1.7] max-w-[280px]">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}