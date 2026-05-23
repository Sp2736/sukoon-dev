"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Review {
  id: string;
  name: string;
  quote: string;
}

// 1. Inject the raw data directly (no avatars needed)
const rawData = [
  {
    id: "13681203-458b-4f15-9405-80acbdbb4aff",
    name: "Amit Patel",
    quote:
      "Their expertise in agricultural land acquisitions in Gujarat is unmatched. They provided thorough documentation and clear, honest advice from day one.",
  },
  {
    id: "28ffc523-0d5d-4304-832b-f833d6d71b8d",
    name: "Raj Mehta",
    quote:
      "We were looking for a commercial property in a prime location, and they delivered exactly what we needed within our budget.",
  },
  {
    id: "a499e889-25dc-4278-ac59-acd670cf50a0",
    name: "Sarah Chen",
    quote:
      "Finding our dream home felt overwhelming until their team guided us through every step. The process was smooth, transparent, and stress-free.",
  },
];

const formattedData: Review[] = rawData.map((item) => ({
  id: item.id,
  name: item.name,
  quote: item.quote,
}));

// 2. Create the infinite loop array
const infiniteTestimonials = Array(15).fill(formattedData).flat();
const initialActiveIndex = Math.floor((15 * formattedData.length) / 2);

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const nextSlide = () => setActiveIndex((prev) => prev + 1);
  const prevSlide = () => setActiveIndex((prev) => prev - 1);

  // Handle scroll reveal animation
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

  if (formattedData.length === 0) {
    return null;
  }

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white py-16 lg:pt-[100px] lg:pb-[80px] overflow-hidden flex flex-col items-center"
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .carousel-track {
            --card-width: 85vw;
          }
          @media (min-width: 768px) {
            .carousel-track {
              --card-width: 560px;
            }
          }
        `,
        }}
      />

      {/* Headings Container */}
      <div className="w-full max-w-[800px] mx-auto text-center mb-10 lg:mb-[60px] px-6">
        <h2
          className={`font-heading font-bold text-[#1F1F1F] text-[28px] md:text-[32px] lg:text-[38px] leading-[1.2] lg:leading-[1.15] mb-4 lg:mb-[24px] ${isVisible ? "animate-base main-heading-animation" : "opacity-0"}`}
        >
          Trusted by Property
          <br className="hidden md:block" /> Buyers & Investors
        </h2>
        <p
          className={`font-body font-normal text-[#000000]/70 text-[14px] md:text-[16px] lg:text-[18px] leading-[1.6] ${isVisible ? "animate-base sub-heading-animation" : "opacity-0"}`}
        >
          Hear from clients who found the right residential, commercial, and
          <br className="hidden md:block" /> land investment opportunities with
          us
        </p>
      </div>

      {/* Carousel Track Container */}
      <div
        className={`relative w-full py-4 ${isVisible ? "animate-base content-animation delay-400" : "opacity-0"}`}
      >
        <div className="absolute top-0 bottom-0 left-0 w-[15%] md:w-[25%] lg:w-[30%] bg-gradient-to-r from-white via-white/90 to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-[15%] md:w-[25%] lg:w-[30%] bg-gradient-to-l from-white via-white/90 to-transparent z-20 pointer-events-none" />

        <div
          className="carousel-track relative flex transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
          style={{
            left: "50%",
            transform: `translateX(calc(-1 * (var(--card-width) / 2) - ${activeIndex} * (var(--card-width) + 24px)))`,
            gap: "24px",
            width: "max-content",
          }}
        >
          {infiniteTestimonials.map((test, index) => {
            return (
              <div
                key={`${test.id}-${index}`}
                className="shrink-0 bg-[#F6FAFD] rounded-[20px] p-[24px] md:p-[40px] flex flex-col items-start transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
                style={{ width: "var(--card-width)" }}
              >
                <div className="mb-4 lg:mb-[24px]">
                  <h4 className="font-heading font-semibold text-[15px] lg:text-[16px] text-[#1F1F1F] text-left">
                    {test.name}
                  </h4>
                </div>

                <p className="font-body font-normal text-[14px] md:text-[14px] leading-[1.6] lg:leading-[1.7] text-[#1F1F1F]/80 text-left">
                  {test.quote}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div
        className={`flex items-center justify-center gap-[16px] mt-[30px] lg:mt-[40px] z-30 relative ${isVisible ? "animate-base content-animation delay-1000" : "opacity-0"}`}
      >
        <button
          onClick={prevSlide}
          className="w-[44px] h-[44px] lg:w-[50px] lg:h-[50px] rounded-full border border-gray-200 bg-white flex items-center justify-center text-[#52B7EC] hover:bg-gray-50 transition-colors active:scale-95 cursor-pointer"
          aria-label="Previous Testimonial"
        >
          <ArrowLeft size={20} strokeWidth={1.5} />
        </button>

        <button
          onClick={nextSlide}
          className="w-[44px] h-[44px] lg:w-[50px] lg:h-[50px] rounded-full bg-[#E5F5FD] flex items-center justify-center text-[#52B7EC] hover:brightness-95 transition-all active:scale-95 cursor-pointer"
          aria-label="Next Testimonial"
        >
          <ArrowRight size={20} strokeWidth={1.5} />
        </button>
      </div>
    </section>
  );
}
