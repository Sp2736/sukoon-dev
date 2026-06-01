"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";

export interface MediaItem {
  url: string;
  type: "image" | "video";
}

interface WorkDetailHeroProps {
  title: string;
  category: string;
  location: string;
  status: string;
  media: MediaItem[];
}

export default function WorkDetailHero({
  title,
  category,
  location,
  status,
  media = [],
}: WorkDetailHeroProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const thumbRefs = useRef<(HTMLDivElement | null)[]>([]);

  const displayMedia =
    media.length > 0
      ? media
      : [{ url: "/sukoon-col.webp", type: "image" as const }];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % displayMedia.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prev) => (prev - 1 + displayMedia.length) % displayMedia.length,
    );
  };

  // Mount Effect
  useEffect(() => {
    // Force the page to strictly start at the very top on load
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    setIsLoaded(true);
  }, []);

  // Effect to calculate the position of the sliding "window"
  useEffect(() => {
    const updateIndicator = () => {
      const activeThumb = thumbRefs.current[activeIndex];
      if (activeThumb) {
        setIndicatorStyle({
          left: activeThumb.offsetLeft,
          width: activeThumb.offsetWidth,
        });

        // Smoothly scroll only the horizontal container without triggering a vertical page jump
        const container = activeThumb.parentElement;
        if (container) {
          const thumbCenter = activeThumb.offsetLeft + activeThumb.offsetWidth / 2;
          const containerCenter = container.offsetWidth / 2;
          container.scrollTo({
            left: thumbCenter - containerCenter,
            behavior: "smooth",
          });
        }
      }
    };

    // Timeout ensures DOM elements are rendered before calculating widths
    const timeout = setTimeout(updateIndicator, 50);
    window.addEventListener("resize", updateIndicator);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", updateIndicator);
    };
  }, [activeIndex, displayMedia]);

  return (
    <section className="w-full bg-white flex flex-col items-center">
      <div className="w-full px-6 md:px-16 lg:px-24 pt-8 md:pt-12 pb-6">
        <div
          className={`transition-all duration-700 ease-out transform ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-[#D9F2FF] text-[#52B7EC] px-3 py-1 rounded-sm text-xs font-black uppercase tracking-widest">
              {category}
            </span>
            <span
              className={`px-3 py-1 rounded-sm text-xs font-black uppercase tracking-widest ${status === "Completed" ? "bg-emerald-50 text-emerald-600" : "bg-orange-50 text-orange-600"}`}
            >
              {status}
            </span>
          </div>
          <h1 className="font-heading font-black text-3xl md:text-5xl text-[#1F1F1F] leading-tight mb-4">
            {title}
          </h1>
          <div className="flex items-center gap-2 text-[#919191]">
            <img
              src="/pin.webp"
              alt="Location"
              className="w-[18px] h-[18px] object-contain"
            />
            <span className="font-body font-medium text-sm md:text-base">
              {location}
            </span>
          </div>
        </div>
      </div>

      {/* Main Media Gallery Container - Restricted to 1024px max width to fit nicely on screen */}
      <div className="w-full max-w-[1024px] mx-auto px-6 md:px-12 lg:px-0 pb-12">
        <div
          className={`relative w-full aspect-video rounded-[24px] overflow-hidden group shadow-lg transition-all duration-1000 ease-out ${
            isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          {displayMedia[activeIndex].type === "image" ? (
            <img
              key={`img-${activeIndex}`}
              src={displayMedia[activeIndex].url}
              alt={title}
              className="w-full h-full object-cover animate-fade-in"
            />
          ) : (
            <video
              key={`vid-${activeIndex}`}
              src={displayMedia[activeIndex].url}
              controls
              autoPlay
              muted
              className="w-full h-full object-cover animate-fade-in bg-black"
            />
          )}

          {/* Navigation Controls */}
          {displayMedia.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full flex items-center justify-center text-[#1F1F1F] shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
              >
                <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full flex items-center justify-center text-[#1F1F1F] shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
              >
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </>
          )}

          <div className="absolute bottom-4 right-6 bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-bold font-body shadow-md">
            {activeIndex + 1} / {displayMedia.length}
          </div>
        </div>

        {/* Thumbnail Selector with Sliding Animated Window */}
        {displayMedia.length > 1 && (
          <div
            className={`relative flex gap-3 md:gap-4 mt-6 overflow-x-auto pb-4 items-center scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] transition-all duration-700 delay-300 ease-out ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {/* The Sliding Magic Window / Border */}
            <div
              className="absolute top-0 z-10 pointer-events-none transition-all duration-300 ease-out border-[3px] border-[#52B7EC] rounded-[10px] shadow-[0_0_15px_rgba(82,183,236,0.3)] bg-[#52B7EC]/10"
              style={{
                left: `${indicatorStyle.left}px`,
                width: `${indicatorStyle.width}px`,
                height: "calc(100% - 16px)", // Matches the height of the thumbnail (adjusts for pb-4)
              }}
            />

            {displayMedia.map((mediaItem, index) => (
              <div
                key={index}
                ref={(el) => {
                  thumbRefs.current[index] = el;
                }}
                onClick={() => setActiveIndex(index)}
                className={`relative w-24 h-16 md:w-32 md:h-20 shrink-0 rounded-[10px] overflow-hidden cursor-pointer transition-opacity duration-300 ${
                  activeIndex === index
                    ? "opacity-100"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                {mediaItem.type === "image" ? (
                  <img
                    src={mediaItem.url}
                    alt="Thumbnail"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full relative bg-stone-800">
                    <video
                      src={mediaItem.url}
                      className="w-full h-full object-cover opacity-50"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Play className="w-5 h-5 text-white" fill="white" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}