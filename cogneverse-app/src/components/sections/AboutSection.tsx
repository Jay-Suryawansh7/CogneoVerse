"use client";

import { Section } from "@/components/layout/Section";
import { motion } from "framer-motion";
import { Lightbulb, Users, Rocket, Globe } from "lucide-react";
import { AbstractBlob } from "@/components/illustrations/Shapes";
import { ScrollReveal } from "@/components/effects/ScrollReveal";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We push boundaries and challenge conventions to create breakthrough technologies.",
  },
  {
    icon: Users,
    title: "Collaborative Spirit",
    description: "Great things happen when brilliant minds work together across disciplines.",
  },
  {
    icon: Rocket,
    title: "Ship & Iterate",
    description: "We believe in rapid prototyping, learning from feedback, and continuous improvement.",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Our community spans continents, bringing diverse perspectives to every project.",
  },
];

export function AboutSection() {
  return (
    <Section id="about" className="relative bg-[var(--color-paper)]">
      {/* Decorative Blob */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.08 }}
        viewport={{ once: true }}
        className="absolute -right-32 top-0 w-96 h-96 pointer-events-none"
      >
        <AbstractBlob variant="blob2" />
      </motion.div>

      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Left: Content - GSAP Reveal */}
          <ScrollReveal x={-40} y={0} duration={1}>
            <span
              className="text-[var(--color-nectarine)] uppercase tracking-wider mb-4 block font-medium"
              style={{ fontSize: "var(--text-small)" }}
            >
              About Us
            </span>
            
            {/* Section Title from copywriting.md */}
            <h2
              className="text-[var(--color-ink)] mb-6 heading-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              A Universe for{" "}
              <span
                className="text-[var(--color-cobalt)]"
                style={{ fontFamily: "var(--font-script)" }}
              >
                Thinkers
              </span>{" "}
              and Makers
            </h2>
            
            {/* Body Copy from copywriting.md */}
            <p
              className="text-[var(--color-ink)]/70 mb-6"
              style={{ fontSize: "var(--text-body-lg)", lineHeight: "var(--leading-relaxed)" }}
            >
              Cogneverse is a collaborative platform designed for innovators, engineers, designers,
              and problem-solvers. We bring together technology, creativity, and community to
              transform ideas into scalable products.
            </p>
            <p
              className="text-[var(--color-ink)]/70"
              style={{ lineHeight: "var(--leading-relaxed)" }}
            >
              From open-source research to startup-ready systems, Cogneverse supports every stage
              of innovation. Whether you&apos;re a student exploring AI, a professional building
              robotics, or a founder launching your next venture—this is your home.
            </p>
          </ScrollReveal>

          {/* Right: Values Grid - Staggered GSAP Reveal */}
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <ScrollReveal
                key={value.title}
                delay={index * 0.1}
                y={30}
                threshold={0.1}
                className="h-full"
              >
                <div className="bg-white p-6 rounded-[24px] shadow-sm hover:shadow-xl card-hover border border-[var(--color-ink)]/5 h-full transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-oceanic)]/5 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-[var(--color-oceanic)]" />
                  </div>
                  <h4
                    className="text-[var(--color-ink)] font-semibold mb-2 text-lg"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {value.title}
                  </h4>
                  <p
                    className="text-[var(--color-ink)]/60 text-sm"
                    style={{ lineHeight: "var(--leading-relaxed)" }}
                  >
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
