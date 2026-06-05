// src/components/ui/AnimatedBackground.tsx
'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// We dynamically import the Lottie player to prevent SSR (Server-Side Rendering) mismatch issues,
// ensuring the animation only triggers once the component is safely mounted in the browser.
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export default function AnimatedBackground() {
  const [animationData, setAnimationData] = useState<any>(null);

  // Fetch the JSON file from the public folder on mount
  useEffect(() => {
    fetch('/cityscape.json')
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Failed to load background animation", err));
  }, []);

  if (!animationData) return null;

  return (
    // 1. 'fixed inset-0' pins the container to all 4 corners of the viewport, ignoring scroll.
    // 2. 'z-[-1]' pushes it behind all your page content.
    // 3. 'pointer-events-none' ensures users can't accidentally click or interact with the background.
    // 4. 'flex items-center justify-center' keeps the graphic perfectly centered in the viewport.
    <div className="fixed inset-0 z-[-1] pointer-events-none flex items-center justify-center overflow-hidden">
        
      {/* This inner wrapper controls the exact visual styling:
        - 'w-full max-w-[1920px]' ensures it stretches across the screen but caps at ultra-wide sizes.
        - 'opacity-[0.04]' (4% opacity) makes it extremely faint, so your white background remains bright.
        - 'grayscale' strips any baked-in colors from the Lottie file, forcing it into a pure grey tone.
        - 'animate-fade-in' gives it a soft entrance as it loads.
      */}
      <div className="w-full min-w-[1200px] max-w-[1920px] opacity-[0.1] grayscale mix-blend-multiply transition-opacity duration-1000">
        <Lottie
          animationData={animationData}
          loop={true}
          autoplay={true}
        />
      </div>
    </div>
  );
}