"use client";

import { useState, useEffect, useRef } from "react";
import PropertyCard from "./PropertyCard";

interface PropertyItem {
  id: string;
  image: string;
  title: string;
  location: string;
  details: string;
  price: string;
  category?: string;
  amenities?: string[];
}

interface PropertySectionProps {
  title: string;
  properties: PropertyItem[];
  isAlternateBg?: boolean;
}

export default function PropertySection({
  title,
  properties,
  isAlternateBg = false,
}: PropertySectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  
  // Track if the cards are in the DOM
  const [isExpanded, setIsExpanded] = useState(false);
  // Track if the newly added cards should trigger their visibility animation
  const [showExpandedCards, setShowExpandedCards] = useState(false);
  
  const sectionRef = useRef<HTMLElement>(null);

  // Trigger animation when section scrolls into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 } 
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleToggleExpand = () => {
    if (!isExpanded) {
      // 1. Mount the elements in the DOM immediately (in hidden state)
      setIsExpanded(true);
      // 2. Trigger the CSS transition shortly after mount so it animates smoothly
      setTimeout(() => {
        setShowExpandedCards(true);
      }, 50);
    } else {
      // 1. Trigger the CSS transition to hide them smoothly
      setShowExpandedCards(false);
      // 2. Wait for the PropertyCard transition (700ms) to finish before removing from DOM
      setTimeout(() => {
        setIsExpanded(false);
      }, 700); 
    }
  };

  const visibleProperties = isExpanded ? properties : properties.slice(0, 4);
  const showToggleButton = properties.length > 3;

  const viewAllClasses = `font-heading font-semibold cursor-pointer text-[15px] md:text-[16px] text-[#52B7EC] hover:text-[#3da0d6] items-center underline gap-1.5 transition-all duration-700 ease-out group shrink-0 ${
    !isExpanded && properties.length === 4 ? "flex md:hidden xl:flex" : "flex"
  } ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`;

  return (
    <section
      ref={sectionRef}
      className={`w-full py-[40px] md:py-[50px] px-5 md:px-8 lg:px-[48px] xl:px-[64px] ${
        isAlternateBg ? "bg-[#F9FAFB]" : "bg-white"
      } overflow-hidden transition-all duration-700`}
    >
      <div className="w-full flex flex-col">
        {/* TOP ROW */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 overflow-hidden py-2">
          <h2
            className={`font-heading font-bold text-[32px] md:text-[40px] text-[#1F1F1F] leading-tight transition-all duration-700 ease-out transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {title}
          </h2>

          {showToggleButton && (
            <button
              onClick={handleToggleExpand}
              style={{ transitionDelay: "150ms" }}
              className={viewAllClasses}
            >
              {isExpanded ? "View Less" : "View All"}
            </button>
          )}
        </div>

        {/* BOTTOM ROW: The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 transition-all duration-700">
          {visibleProperties.map((prop, index) => {
            // First 4 properties use the scroll observer. Newly expanded ones use the button state.
            const cardIsVisible = index < 4 ? isVisible : showExpandedCards;
            
            // Reset the animation delay index for newly expanded items so they don't take forever to appear
            // (e.g., Index 4 -> 0 delay, Index 5 -> 1 delay)
            const animationIndex = index < 4 ? index : index - 4;

            return (
              <div
                key={prop.id || index}
                className={!isExpanded && index === 3 ? "hidden md:block xl:hidden" : ""}
              >
                <PropertyCard
                  id={prop.id}
                  image={prop.image}
                  title={prop.title}
                  location={prop.location}
                  details={prop.details}
                  price={prop.price}
                  category={prop.category}
                  amenities={prop.amenities}
                  isVisible={cardIsVisible}
                  index={animationIndex}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}