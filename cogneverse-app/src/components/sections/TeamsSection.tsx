"use client";

import { Section } from "@/components/layout/Section";

import { StaggerTestimonials } from "@/components/ui/stagger-testimonials";




export function TeamsSection() {
  return (
    <Section id="teams" className="bg-[var(--color-paper)] relative overflow-hidden py-24">
      {/* Testimonials Section */}
      <div className="container mx-auto px-4 relative z-10 pb-20 border-t border-[var(--color-ink)]/5 pt-20">
        <div className="text-center mb-16">
            <h2 
                className="text-3xl md:text-5xl font-bold text-[var(--color-ink)] mb-6"
                style={{ fontFamily: "var(--font-display)" }}
            >
                Trusted by Builders Worldwide
            </h2>
            <p className="text-[var(--color-ink)]/70 text-lg max-w-2xl mx-auto">
                Join thousands of engineers, designers, and founders building the future with Cogneverse.
            </p>
        </div>
        
        <StaggerTestimonials />
      </div>
    </Section>
  );
}

