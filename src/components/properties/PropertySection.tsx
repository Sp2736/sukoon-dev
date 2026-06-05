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
  
  const [isExpanded, setIsExpanded] = useState(false);
  const [showExpandedCards, setShowExpandedCards] = useState(false);
  
  const sectionRef = useRef<HTMLElement>(null);

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
      setIsExpanded(true);
      setTimeout(() => {
        setShowExpandedCards(true);
      }, 50);
    } else {
      setShowExpandedCards(false);
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
      // CHANGED: bg-transparent for default, bg-[#F9FAFB]/60 for alternate rows to let the background show through
      className={`w-full py-[40px] md:py-[50px] px-5 md:px-8 lg:px-[48px] xl:px-[64px] ${
        isAlternateBg ? "bg-[#F9FAFB]/60" : "bg-transparent"
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
            const cardIsVisible = index < 4 ? isVisible : showExpandedCards;
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