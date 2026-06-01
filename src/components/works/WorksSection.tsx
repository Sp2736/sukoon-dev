"use client";

import { useState, useEffect, useRef } from "react";
import WorkCard from "./WorkCard";

interface WorkItem {
  id: string | number;
  title: string;
  location: string;
  image: string;
  type: "image" | "video";
  category?: string;
}

interface WorksSectionProps {
  title: string;
  works: WorkItem[];
  isAlternateBg?: boolean;
}

export default function WorksSection({
  title,
  works,
  isAlternateBg = false,
}: WorksSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`w-full flex justify-center py-[40px] md:py-[60px] px-6 md:px-16 lg:px-24 overflow-hidden ${
        isAlternateBg ? "bg-[#F2F8FB]" : "bg-white"
      }`}
    >
      <div className="w-full flex flex-col">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4 overflow-hidden py-2">
          <h2
            className={`font-heading font-bold text-[32px] md:text-[40px] text-[#1F1F1F] leading-tight transition-all duration-700 ease-out transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {works.map((work, index) => (
            <div key={work.id}>
              <WorkCard
                id={work.id}
                image={work.image}
                title={work.title}
                location={work.location}
                type={work.type}
                category={work.category}
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