"use client";

import { ReactNode } from "react";
import { ReactLenis } from "lenis/react";

interface Props {
  children: ReactNode;
}

export default function SmoothScroll({ children }: Props) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.5,
        smoothWheel: true,
        // PERFORMANCE OPTIMIZATION:
        // Explicitly disables JS scrolling on touch devices.
        // Mobile OS native scrolling is already perfectly smooth,
        // so disabling this saves massive amounts of battery and CPU load.
        syncTouch: false,
      }}
    >
      {children}
    </ReactLenis>
  );
}
