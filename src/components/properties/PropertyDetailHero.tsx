"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface PropertyDetailHeroProps {
  title: string;
  propertyType: string;
  area: string;
  location: string;
  price: string;
  bhk: string;
  images: string[];
  amenities?: string[]; // Added to accept dynamic amenities
}

// Map amenity names to their respective icons
const AMENITY_ICONS: Record<string, string> = {
  "Prime Location": "/amenities-prime.png",
  "Schools Nearby": "/amenities-school.png",
  "Hospitals Nearby": "/amenities-hospital.png",
  "Gymnasium": "/amenities-gym.webp",
  "Swimming Pool": "/amenities-pool.webp",
  "Clubhouse": "/amenities-clubhouse.webp",
  "Children Park": "/amenities-park.webp",
  "Living Room": "/amenities-living.webp",
  "Power Backup": "/amenities-power.webp",
  "Dining Area": "/amenities-dining.webp",
  "Security": "/amenities-security.webp",
  "Parking": "/amenities-parking.webp",
  "Intercom": "/amenities-intercom.webp",
  "Maintenance Staff": "/amenities-staff.webp",
};

// Fallback icon if a specific amenity icon doesn't exist
const getAmenityIcon = (name: string) => AMENITY_ICONS[name] || "/verified-check.webp";

export default function PropertyDetailHero({
  title,
  propertyType,
  area,
  location,
  price,
  bhk,
  images = [],
  amenities = [], // Default to empty array
}: PropertyDetailHeroProps) {
  const router = useRouter();

  const [activeIndex, setActiveIndex] = useState(0);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const thumbRefs = useRef<(HTMLImageElement | null)[]>([]);
  
  // Animation state
  const [isLoaded, setIsLoaded] = useState(false);

  // Fallback if no images are provided
  const displayImages = images.length > 0 ? images : ["/sukoon-col.webp"];

  // Logic for displaying amenities (Mandatory + Dynamic for Residential)
  const isResidential = propertyType === "Residential";
  const mandatoryAmenities = ["Prime Location", "Schools Nearby", "Hospitals Nearby"];
  const displayAmenities = isResidential 
    ? [...mandatoryAmenities, ...amenities] 
    : amenities;

  // Navigation Logic with Looping
  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % displayImages.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prev) => (prev - 1 + displayImages.length) % displayImages.length,
    );
  };

  // Effect to calculate the position of the sliding "window"
  useEffect(() => {
    // Trigger mount animations
    setIsLoaded(true);

    const updateIndicator = () => {
      const activeThumb = thumbRefs.current[activeIndex];
      if (activeThumb) {
        // Update the slider box to perfectly match the active thumbnail's position and width
        setIndicatorStyle({
          left: activeThumb.offsetLeft,
          width: activeThumb.offsetWidth,
        });

        // Smoothly scroll the thumbnail list to keep the active item in view
        activeThumb.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    };

    updateIndicator();

    // Recalculate if the window size changes
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeIndex, displayImages]);

  return (  
    <section className="w-full bg-white px-6 md:px-16 lg:px-[100px] pb-[80px]">
      <div className="max-w-[1920px] mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* LEFT COLUMN: Image Gallery (Approx 55% width) */}
        <div 
          className={`w-full lg:w-[55%] flex flex-col gap-4 transition-all duration-1000 ease-out transform ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Main Giant Image */}
          <div className="w-[100%] h-[300px] md:h-[400px] lg:h-[450px] rounded-[15px] overflow-hidden bg-gray-100 relative">
            {displayImages.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`${title} - Photo ${idx + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                  idx === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              />
            ))}
          </div>

          {/* Bottom Thumbnails & Controls */}
          <div className="flex items-center gap-3 md:gap-4 w-full h-auto md:h-[120px]">
            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] shrink-0 rounded-full border border-gray-200 flex items-center justify-center text-[#1F1F1F] hover:bg-gray-50 transition-colors z-10"
            >
              <ArrowLeft size={20} />
            </button>

            {/* Scrollable Thumbnails Container */}
            <div className="flex-1 relative h-full overflow-hidden">
              <div className="flex gap-3 md:gap-4 h-full w-full overflow-x-auto overflow-y-hidden scroll-smooth relative items-center [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {/* The Sliding Magic Window / Border */}
                <div
                  className="absolute top-0 bottom-0 z-10 pointer-events-none transition-all duration-300 ease-out border-[3px] border-[#52B7EC] rounded-[5px] shadow-[0_0_15px_rgba(82,183,236,0.3)] bg-[#52B7EC]/10"
                  style={{
                    left: `${indicatorStyle.left}px`,
                    width: `${indicatorStyle.width}px`,
                    height: "100%", // This naturally perfectly matches the image dimensions
                  }}
                />

                {/* Thumbnail Images */}
                {displayImages.map((src, idx) => (
                  <img
                    key={idx}
                    ref={(el) => {
                      thumbRefs.current[idx] = el;
                    }}
                    src={src}
                    alt={`Thumbnail ${idx + 1}`}
                    onClick={() => setActiveIndex(idx)}
                    className={`
                      /* Mobile: Exactly 2 visible (50% minus half gap), perfectly square */
                      w-[calc(50%-6px)] aspect-square 
                      /* Desktop: Exactly 3 visible (33% minus gap distribution), stretch height to 120px */
                      md:w-[calc(33.333%-10.66px)] md:aspect-auto md:h-full 
                      shrink-0 object-cover rounded-[5px] cursor-pointer transition-opacity duration-300 
                      ${
                        activeIndex !== idx
                          ? "opacity-60 hover:opacity-100"
                          : "opacity-100"
                      }
                    `}
                  />
                ))}
              </div>
            </div>

            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] shrink-0 rounded-full bg-[#D9F2FF] flex items-center justify-center text-[#52B7EC] hover:brightness-95 transition-all z-10"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
        
        {/* RIGHT COLUMN: Property Details Card (Approx 45% width) */}
        <div 
          className={`w-full lg:w-[45%] bg-[#D9F2FF80] border border-[#D9F2FF]/50 rounded-[16px] p-7 md:p-8 flex flex-col transition-all duration-1000 delay-200 ease-out transform ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h1 
            className={`font-heading font-bold text-[27px] md:text-[38px] text-[#1F1F1F] leading-tight mb-5 transition-all duration-700 delay-300 ease-out transform ${
              isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            {title}
          </h1>

          <div className="flex flex-col w-full">
            {/* Row 1: Property Type */}
            <div 
              style={{ transitionDelay: "400ms" }}
              className={`flex justify-between items-center py-4 border-b border-[#D9F2FF] transition-all duration-700 ease-out transform ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div className="flex items-center gap-3 text-[#919191]">
                <img
                  src="/details-type.webp"
                  alt="Property Type"
                  className="w-[18px] h-[18px] object-contain opacity-80 shrink-0"
                />

                <span className="font-body text-[14px]">Property Type :</span>
              </div>

              <span className="font-heading font-medium text-[17px] lg:text-[20px] text-[#1F1F1F] text-right">
                {propertyType}
              </span>
            </div>

            {/* Row 2: Area */}
            <div 
              style={{ transitionDelay: "500ms" }}
              className={`flex justify-between items-center py-4 border-b border-[#D9F2FF] transition-all duration-700 ease-out transform ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div className="flex items-center gap-3 text-[#919191]">
                <img
                  src="/details-area.webp"
                  alt="Area"
                  className="w-[18px] h-[18px] object-contain opacity-80 shrink-0"
                />{" "}
                <span className="font-body text-[14px]">Area (sq ft) :</span>
              </div>
              <span className="font-heading font-medium text-[17px] lg:text-[20px] text-[#1F1F1F] text-right">
                {area}
              </span>
            </div>

            {/* Row 3: Location */}
            <div 
              style={{ transitionDelay: "600ms" }}
              className={`flex justify-between items-center py-4 border-b border-[#D9F2FF] transition-all duration-700 ease-out transform ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div className="flex items-center gap-3 text-[#919191]">
                <img
                  src="/details-location.webp"
                  alt="Location"
                  className="w-[18px] h-[18px] object-contain opacity-80 shrink-0"
                />{" "}
                <span className="font-body text-[14px]">Location :</span>
              </div>
              <span className="font-heading font-medium text-[17px] lg:text-[20px] text-[#1F1F1F] text-right">
                {location}
              </span>
            </div>

            {/* Row 4: Expected Price */}
            <div 
              style={{ transitionDelay: "700ms" }}
              className={`flex justify-between items-center py-4 border-b border-[#D9F2FF] transition-all duration-700 ease-out transform ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div className="flex items-center gap-3 text-[#919191]">
                <img
                  src="/details-price.webp"
                  alt="Price"
                  className="w-[18px] h-[18px] object-contain opacity-80 shrink-0"
                />{" "}
                <span className="font-body text-[14px]">Expected Price :</span>
              </div>
              <span className="font-heading font-medium text-[17px] lg:text-[20px] text-[#1F1F1F] text-right">
                {price}
              </span>
            </div>

            {/* Row 5: BHK Type */}
            <div 
              style={{ transitionDelay: "800ms" }}
              className={`flex justify-between items-center py-4 border-b border-[#D9F2FF] transition-all duration-700 ease-out transform ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div className="flex items-center gap-3 text-[#919191]">
                <img
                  src="/details-bhk.webp"
                  alt="BHK Type"
                  className="w-[18px] h-[18px] object-contain opacity-80 shrink-0"
                />{" "}
                <span className="font-body text-[14px]">BHK Type :</span>
              </div>
              <span className="font-heading font-medium text-[17px] lg:text-[20px] text-[#1F1F1F] text-right">
                {bhk}
              </span>
            </div>
          </div>

          {/* Dynamic Project Amenities */}
          {displayAmenities.length > 0 && (
            <div 
              style={{ transitionDelay: "900ms" }}
              className={`mt-4 transition-all duration-700 ease-out transform ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <h3 className="font-heading font-bold text-[18px] text-[#1F1F1F] mb-5">
                Project Amenities :
              </h3>

              <div className="flex flex-wrap justify-start items-start w-full gap-y-6 gap-x-4 md:gap-x-4.5">
                {displayAmenities.map((amenity, idx) => (
                  <div 
                    key={idx}
                    style={{ transitionDelay: `${1000 + (idx * 100)}ms` }}
                    className={`flex flex-col items-center gap-2 shrink-0 transition-all duration-700 ease-out transform ${
                      isLoaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95"
                    }`}
                  >
                    <div className="w-[45px] h-[45px] md:w-[50px] md:h-[50px] rounded-full border border-[#919191]/50 flex items-center justify-center text-[#919191] bg-white/30">
                      <img
                        src={getAmenityIcon(amenity)}
                        alt={amenity}
                        className="w-[18px] h-[18px] md:w-[20px] md:h-[20px] object-contain opacity-80"
                      />
                    </div>
                    {/* Fixed max-width ensures items don't take up too much horizontal space */}
                    <span className="font-body text-[11px] md:text-[12px] font-medium text-[#1F1F1F] text-center w-full max-w-[65px] md:max-w-[70px] leading-tight">
                      {amenity}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}