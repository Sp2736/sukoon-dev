"use client";

import { useState, useEffect, useRef } from "react";
import PropertyCard from "./PropertyCard";
import { ArrowRight } from "lucide-react";

interface PropertyItem {
  id: string;
  image: string;
  title: string;
  location: string;
  details: string;
  price: string;
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
      { threshold: 0.15 } // Triggers when 15% of the section is visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Max items needed across any viewport is 4 (for tablet's 2x2 grid)
  const visibleProperties = properties.slice(0, 4);
  const showViewAll = properties.length > 3;

  const viewAllClasses = `font-heading font-semibold text-[15px] md:text-[16px] text-[#52B7EC] hover:text-[#3da0d6] items-center underline gap-1.5 transition-all duration-700 ease-out group shrink-0 ${
    properties.length === 4 ? "flex md:hidden xl:flex" : "flex"
  } ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`;

  return (
    <section
      ref={sectionRef}
      className={`w-full py-[40px] md:py-[50px] px-5 md:px-8 lg:px-[48px] xl:px-[64px] ${
        isAlternateBg ? "bg-[#F9FAFB]" : "bg-white"
      } overflow-hidden`}
    >
      <div className="w-full flex flex-col">
        {/* TOP ROW: Heading Left, Link Right */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 overflow-hidden py-2">
          <h2
            className={`font-heading font-bold text-[32px] md:text-[40px] text-[#1F1F1F] leading-tight transition-all duration-700 ease-out transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {title}
          </h2>

          {showViewAll && (
            <a
              href="#"
              style={{ transitionDelay: "150ms" }}
              className={viewAllClasses}
            >
              View All
            </a>
          )}
        </div>

        {/* BOTTOM ROW: The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {visibleProperties.map((prop, index) => (
            <div
              key={index}
              className={index === 3 ? "hidden md:block xl:hidden" : ""}
            >
              <PropertyCard
                id={prop.id}
                image={prop.image}
                title={prop.title}
                location={prop.location}
                details={prop.details}
                price={prop.price}
                isVisible={isVisible}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}