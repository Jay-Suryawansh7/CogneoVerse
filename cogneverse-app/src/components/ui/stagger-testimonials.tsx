"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  {
    tempId: 0,
    testimonial: "Cogneverse gave me the platform, mentorship, and community to turn my idea into a working product.",
    by: "Alex, Founder at AI-X",
    imgSrc: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop&crop=faces"
  },
  {
    tempId: 1,
    testimonial: "The collaborative tools here are unmatched. We built our entire robotics stack with help from the community.",
    by: "Sarah, Lead Engineer at Roboto",
    imgSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces"
  },
  {
    tempId: 2,
    testimonial: "The best place to find real-world projects to contribute to. I landed my dream job because of my portfolio here.",
    by: "David, Full Stack Dev",
    imgSrc: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=faces"
  },
  {
    tempId: 3,
    testimonial: "A universe for thinkers indeed. The resources and courses accelerated my learning by 10x.",
    by: "Emily, Student Researcher",
    imgSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=faces"
  },
  {
    tempId: 4,
    testimonial: "Finally, a community that values deep tech and hard engineering. No fluff, just builders.",
    by: "Michael, Systems Architect",
    imgSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces"
  },
];

interface TestimonialCardProps {
  position: number;
  testimonial: typeof testimonials[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  position, 
  testimonial, 
  handleMove, 
  cardSize 
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border p-8 transition-all duration-500 ease-in-out flex flex-col justify-between",
        isCenter 
          ? "z-10 bg-[var(--color-oceanic)] text-white border-[var(--color-oceanic)]" 
          : "z-0 bg-white text-[var(--color-ink)] border-[var(--color-ink)]/10 hover:border-[var(--color-oceanic)]/30"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        // clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`, // Simplified shape
        borderRadius: "24px",
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -20 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
          scale(${isCenter ? 1 : 0.9})
        `,
        boxShadow: isCenter ? "0px 12px 32px rgba(0, 63, 71, 0.25)" : "0px 4px 12px rgba(0,0,0,0.05)"
      }}
    >
      <div className="relative z-10">
        <div 
          className={cn(
            "mb-6 relative w-16 h-16 rounded-full overflow-hidden border-2",
             isCenter ? "border-[var(--color-nectarine)]" : "border-[var(--color-ink)]/10"
          )}
        >
            <Image
                src={testimonial.imgSrc}
                alt={testimonial.by}
                fill
                className="object-cover"
            />
        </div>
        
        <h3 className={cn(
          "text-lg sm:text-xl font-medium leading-relaxed mb-4",
          isCenter ? "text-white" : "text-[var(--color-ink)]"
        )} style={{ fontFamily: "var(--font-display)" }}>
          "{testimonial.testimonial}"
        </h3>
      </div>

      <div className={cn(
        "mt-auto text-sm font-medium tracking-wide uppercase",
        isCenter ? "text-[var(--color-nectarine)]" : "text-[var(--color-oceanic)]"
      )}>
        — {testimonial.by}
      </div>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 320 : 260); // Adjusted size
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: 500 }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        {testimonialsList.map((testimonial, index) => {
            const position = testimonialsList.length % 2
            ? index - (testimonialsList.length + 1) / 2
            : index - testimonialsList.length / 2;
            
            // Only render visible cards to improve performance and visuals
            if (Math.abs(position) > 2) return null;

            return (
            <TestimonialCard
                key={testimonial.tempId}
                testimonial={testimonial}
                handleMove={handleMove}
                position={position}
                cardSize={cardSize}
            />
            );
        })}
      </div>
      
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-4 z-20">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300",
            "bg-white border border-[var(--color-ink)]/10 text-[var(--color-oceanic)] hover:bg-[var(--color-oceanic)] hover:text-white shadow-sm hover:shadow-md"
          )}
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300",
            "bg-white border border-[var(--color-ink)]/10 text-[var(--color-oceanic)] hover:bg-[var(--color-oceanic)] hover:text-white shadow-sm hover:shadow-md"
          )}
          aria-label="Next testimonial"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};
