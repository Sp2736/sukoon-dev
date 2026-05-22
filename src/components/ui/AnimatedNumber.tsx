"use client";

import React, { useEffect, useState, useRef } from "react";

interface AnimatedNumberProps {
  value: string; // Accepts strings like "500+" or "10"
  duration?: number; // Animation duration in milliseconds
}

export default function AnimatedNumber({
  value,
  duration = 2000,
}: AnimatedNumberProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Safely extract the numeric part and the suffix (like "+")
  const match = value.match(/(\d+)(.*)/);
  const targetNumber = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : "";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Trigger animation only when element enters the viewport
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTimestamp: number;

          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min(
              (timestamp - startTimestamp) / duration,
              1
            );

            // CHANGED: Using a Quadratic ease-out (power of 2). 
            // This stops the "hanging" effect at the end while remaining smooth.
            const easeOut = 1 - Math.pow(1 - progress, 2);

            // Use Math.round instead of Math.floor for a slightly smoother final tick
            setCount(Math.round(easeOut * targetNumber));

            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(targetNumber);
            }
          };

          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.4 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [targetNumber, duration, hasAnimated]);

  return (
    <span ref={elementRef}>
      {count}
      {suffix}
    </span>
  );
}