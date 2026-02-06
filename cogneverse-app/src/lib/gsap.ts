"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

// Register generic ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Hook for scroll reveal animations
export function useGsapReveal(
  config: {
    y?: number;
    x?: number;
    opacity?: number;
    duration?: number;
    delay?: number;
    stagger?: number;
    threshold?: number; // 0-1, how much of element visible to trigger
    ease?: string;
  } = {}
) {
  const ref = useRef<HTMLDivElement>(null);
  const {
    y = 40,
    x = 0,
    opacity = 0,
    duration = 0.8,
    delay = 0,
    stagger = 0,
    threshold = 0.2, // Trigger when 20% visible
    ease = "power3.out",
  } = config;

  useGSAP(
    () => {
      const element = ref.current;
      if (!element) return;

      // Initial state
      gsap.set(element, { 
        y: y, 
        x: x, 
        opacity: opacity 
      });

      // Animate to visible
      gsap.to(element, {
        y: 0,
        x: 0,
        opacity: 1,
        duration: duration,
        delay: delay,
        ease: ease,
        stagger: stagger,
        scrollTrigger: {
          trigger: element,
          start: `top ${100 - threshold * 100}%`, // Calculate start position
          toggleActions: "play none none reverse", // Play on enter, reverse on leave back
        },
      });
    },
    { scope: ref }
  );

  return ref;
}

// Hook for parallax effect
export function useParallax(speed: number = 0.5) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const element = ref.current;
      if (!element) return;

      gsap.to(element, {
        y: (i, target) => -ScrollTrigger.maxScroll(window) * speed * 0.1,
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 0,
        },
      });
    },
    { scope: ref }
  );

  return ref;
}

// Hook for split text reveal (simulate char/word reveal)
export function useSplitTextReveal() {
    const ref = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const element = ref.current;
        if (!element) return;
        
        // Simple fade/slide for now without external SplitText plugin (paid)
        gsap.fromTo(element, 
            { opacity: 0, y: 20 },
            { 
                opacity: 1, 
                y: 0, 
                duration: 1, 
                stagger: 0.05,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: element,
                    start: "top 85%",
                }
            }
        );
    }, { scope: ref });

    return ref;
}
