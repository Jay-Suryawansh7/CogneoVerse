"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    name: string;
    role: string;
    image: string;
    contribution: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  
  const [start, setStart] = useState(false);
  
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };
  
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[350px] max-w-full relative rounded-2xl border border-[var(--color-ink)]/10 flex-shrink-0 bg-white px-8 py-6 md:w-[450px]"
            style={{
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
            key={item.name + idx}
          >
            <div className="flex flex-col h-full relative z-20">
                <div className="flex items-center gap-4 mb-4">
                     <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[var(--color-oceanic)]/10">
                        <Image 
                            src={item.image} 
                            alt={item.name}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <h4 className="text-lg font-bold text-[var(--color-oceanic)]" style={{ fontFamily: "var(--font-display)" }}>
                            {item.name}
                        </h4>
                        <span className="text-sm text-[var(--color-ink)]/60 font-medium uppercase tracking-wider">
                            {item.role}
                        </span>
                    </div>
                </div>
              
                <blockquote className="mt-2">
                    <p className="relative z-20 text-sm leading-[1.6] text-[var(--color-ink)]/80 italic">
                    "{item.contribution}"
                    </p>
                </blockquote>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
