"use client";

import { revealVariants, containerVariants } from "@/lib/animations";
import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { Quote, ArrowRight } from "lucide-react";


// Sample testimonial from copywriting.md
const testimonials = [
  {
    quote: "Cogneverse gave me the platform, mentorship, and community to turn my idea into a working product. The support here is unmatched.",
    author: "Amanda Rodriguez",
    role: "Founder & CEO",
    company: "NeuralTech AI",
    avatar: "AR",
    color: "#FF6B6B",
  },
  {
    quote: "As a student, finding real-world projects to work on was always a challenge. Cogneverse connected me with teams building actual products.",
    author: "David Park",
    role: "ML Engineer",
    company: "Formerly Student at MIT",
    avatar: "DP",
    color: "#4ECDC4",
  },
  {
    quote: "The quality of collaboration here is exceptional. We've hired three team members through Cogneverse who have been outstanding.",
    author: "Sarah Mitchell",
    role: "VP of Engineering",
    company: "DataFlow Systems",
    avatar: "SM",
    color: "var(--color-nectarine)",
  },
];

export function TestimonialsSection() {
  return (
    <Section id="testimonials">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={revealVariants}
        className="text-center mb-12"
      >
        <span
          className="text-[var(--color-nectarine)] uppercase tracking-wider mb-4 block font-medium"
          style={{ fontSize: "var(--text-small)" }}
        >
          Testimonials
        </span>
        {/* Title from copywriting.md */}
        <h2
          className="text-[var(--color-ink)]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Trusted by{" "}
          <span
            className="text-[var(--color-cobalt)]"
            style={{ fontFamily: "var(--font-script)" }}
          >
            Builders
          </span>{" "}
          Worldwide
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.author}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-[var(--color-ink)]/5 relative"
            style={{ borderRadius: "12px" }}
          >
            {/* Quote Icon - Large quote mark in accent color from brandkit */}
            <Quote className="w-10 h-10 text-[var(--color-nectarine)]/30 absolute top-6 right-6" />

            {/* Quote */}
            <p
              className="text-[var(--color-ink)]/80 mb-6 relative z-10"
              style={{ lineHeight: "var(--leading-relaxed)" }}
            >
              &ldquo;{testimonial.quote}&rdquo;
            </p>

            {/* Author - Author name bold, title muted from brandkit */}
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold"
                style={{ backgroundColor: testimonial.color }}
              >
                {testimonial.avatar}
              </div>
              <div>
                <div
                  className="font-semibold text-[var(--color-ink)]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {testimonial.author}
                </div>
                <div className="text-[var(--color-ink)]/50" style={{ fontSize: "var(--text-small)" }}>
                  {testimonial.role}, {testimonial.company}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}


// Global CTA Section - From copywriting.md
export function GlobalCTASection() {
  return (
    <Section variant="primary" withNoise className="relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-[var(--color-nectarine)]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--color-cobalt)]/20 rounded-full blur-3xl" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={revealVariants}
        className="text-center relative z-10 py-12"
      >
        {/* Headline from copywriting.md */}
        <h2
          className="text-[var(--color-paper)] mb-6"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Ready to Build Something{" "}
          <span
            className="text-[var(--color-nectarine)]"
            style={{ fontFamily: "var(--font-script)" }}
          >
            That Matters?
          </span>
        </h2>
        
        {/* Subheadline from copywriting.md */}
        <p
          className="text-[var(--color-paper)]/80 max-w-2xl mx-auto mb-10"
          style={{ fontSize: "var(--text-body-lg)" }}
        >
          Join thousands of innovators shaping the future of technology. Start your journey today.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Primary CTA with pulse animation from brandkit (CTA Pulse: Scale 1 → 1.04 → 1, Loop: 6s) */}
          <a
            href="#"
            className="btn-primary px-10 py-4 animate-cta-pulse"
            style={{ fontSize: "var(--text-body)" }}
          >
            Get Started Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
          <a
            href="#"
            className="btn-ghost px-10 py-4 border-[var(--color-paper)]/30 text-[var(--color-paper)] hover:bg-[var(--color-paper)]/10 hover:text-[var(--color-paper)]"
            style={{ fontSize: "var(--text-body)" }}
          >
            Talk to Us
          </a>
        </div>
      </motion.div>
    </Section>
  );
}
