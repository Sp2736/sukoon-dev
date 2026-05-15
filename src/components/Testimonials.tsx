"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

// The 3 exact profiles you requested
const baseTestimonials = [
  {
    name: "Sarah Chen",
    role: "Home Buyer",
    quote: "“Finding our dream home felt overwhelming until their team guided us through every step. The process was smooth, transparent, and stress-free.”",
    avatar: "/person-1.png"
  },
  {
    name: "Raj Mehta",
    role: "Business Owner",
    quote: "“We were looking for a commercial property in a prime location, and they delivered exactly what we needed within our budget.”",
    avatar: "/person-2.png"
  },
  {
    name: "Amit Patel",
    role: "Land Investor",
    quote: "“Their expertise in agricultural land acquisitions in Gujarat is unmatched. They provided thorough documentation and clear, honest advice from day one.”",
    avatar: "/person-3.png"
  }
];

// We duplicate the 3 items 15 times to create an array of 45 items for the endless loop.
const infiniteTestimonials = Array(15).fill(baseTestimonials).flat();

export default function Testimonials() {
  // Start right in the middle of our massive array so the user can click left or right endlessly
  const [activeIndex, setActiveIndex] = useState(21);

  const nextSlide = () => setActiveIndex((prev) => prev + 1);
  const prevSlide = () => setActiveIndex((prev) => prev - 1);

  return (
    <section className="relative w-full bg-white py-[80px] lg:py-[120px] overflow-hidden flex flex-col items-center">
      
      {/* Inject dynamic CSS variables for media-query responsive card widths. */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .carousel-track {
            --card-width: 85vw;
          }
          @media (min-width: 768px) {
            .carousel-track {
              --card-width: 560px;
            }
          }
        `
      }} />

      {/* Headings Container */}
      <div className="w-full max-w-[800px] mx-auto text-center mb-[60px] px-6">
        <h2 className="font-heading font-bold text-[#1F1F1F] text-[28 px] md:text-[32px] lg:text-[38px] leading-[1.15] mb-[24px]">
          Trusted by Property<br className="hidden md:block" /> Buyers & Investors
        </h2>
        <p className="font-body font-normal text-[#000000]/70 text-[12px] md:text-[16px] lg:text-[18px] leading-[1.6]">
          Hear from clients who found the right residential, commercial, and<br className="hidden md:block" /> land investment opportunities with us
        </p>
      </div>

      {/* Carousel Track Container */}
      <div className="relative w-full py-4">
        
        {/* Figma-style edge fades (Stronger and wider gradients, NO CSS blur) */}
        <div className="absolute top-0 bottom-0 left-0 w-[15%] md:w-[25%] lg:w-[30%] bg-gradient-to-r from-white via-white/90 to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-[15%] md:w-[25%] lg:w-[30%] bg-gradient-to-l from-white via-white/90 to-transparent z-20 pointer-events-none" />

        {/* The Sliding Track */}
        <div 
          className="carousel-track relative flex transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
          style={{
            left: '50%',
            transform: `translateX(calc(-1 * (var(--card-width) / 2) - ${activeIndex} * (var(--card-width) + 24px)))`,
            gap: '24px',
            width: 'max-content'
          }}
        >
          {infiniteTestimonials.map((test, index) => {
            return (
              <div 
                key={index}
                // All cards stay exactly the same size and opacity, creating a clean row for the gradients to fade out
                className="shrink-0 bg-[#F6FAFD] rounded-[20px] p-[32px] md:p-[40px] flex flex-col items-start transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
                style={{ width: 'var(--card-width)' }}
              >
                {/* Profile Section */}
                <div className="flex items-center gap-[16px] mb-[24px]">
                  <img 
                    src={test.avatar} 
                    alt={test.name} 
                    className="w-[48px] h-[48px] rounded-full object-cover shadow-sm" 
                  />
                  <div className="flex flex-col text-left">
                    <h4 className="font-heading font-semibold text-[16px] text-[#1F1F1F]">
                      {test.name}
                    </h4>
                    <p className="font-body font-medium text-[13px] text-[#000000]/50">
                      {test.role}
                    </p>
                  </div>
                </div>
                
                {/* Quote Text */}
                <p className="font-body font-normal text-[14px] md:text-[14px] leading-[1.7] text-[#1F1F1F]/80 text-left">
                  {test.quote}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Navigation Buttons */}
      <div className="flex items-center justify-center gap-[16px] mt-[40px] z-30 relative">
        <button 
          onClick={prevSlide}
          className="w-[50px] h-[50px] rounded-full border border-gray-200 bg-white flex items-center justify-center text-[#52B7EC] hover:bg-gray-50 transition-colors active:scale-95"
          aria-label="Previous Testimonial"
        >
          <ArrowLeft size={24} strokeWidth={1.5} />
        </button>
        
        <button 
          onClick={nextSlide}
          className="w-[50px] h-[50px] rounded-full bg-[#E5F5FD] flex items-center justify-center text-[#52B7EC] hover:brightness-95 transition-all active:scale-95"
          aria-label="Next Testimonial"
        >
          <ArrowRight size={24} strokeWidth={1.5} />
        </button>
      </div>

    </section>
  );
}