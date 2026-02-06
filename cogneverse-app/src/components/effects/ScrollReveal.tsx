"use client";

import { useGsapReveal } from "@/lib/gsap";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string; // Additional classes
  y?: number; // Vertical offset
  x?: number; // Horizontal offset
  delay?: number; // Delay in seconds
  duration?: number; // Duration in seconds
  stagger?: number; // Stagger time for children (if applicable)
  threshold?: number; // Visibility threshold (0-1)
}

export function ScrollReveal({
  children,
  className = "",
  y = 40,
  x = 0,
  delay = 0,
  duration = 0.8,
  stagger = 0,
  threshold = 0.2,
}: ScrollRevealProps) {
  // Use the GSAP hook
  const ref = useGsapReveal({
    y,
    x,
    delay,
    duration,
    stagger,
    threshold,
  });

  return (
    <div ref={ref} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
}
