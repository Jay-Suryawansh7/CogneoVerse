"use client";

import { revealVariants, containerVariants, itemVariants } from "@/lib/animations";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Compass } from "lucide-react";
import { AbstractBlob, GridPattern, WavePattern } from "@/components/illustrations/Shapes";
import { ParticleBackground } from "@/components/effects/ParticleBackground";
import { useParallax, useSplitTextReveal } from "@/lib/gsap";

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  // GSAP Hooks
  const illustrationRef = useParallax(0.2); // Slower parallax for shapes
  
  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero"
    >
      {/* WebGL Particle Background - Phase 6 Addition */}
      <ParticleBackground />

      {/* Background Pattern */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 opacity-10 pointer-events-none"
      >
        <GridPattern />
      </motion.div>

      {/* Decorative Blobs with GSAP Parallax */}
      <div ref={illustrationRef} className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="absolute top-20 -left-20 w-80 h-80 lg:w-[500px] lg:h-[500px] animate-float"
          style={{ animationDelay: "0s" }}
        >
          <AbstractBlob variant="blob1" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.12, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="absolute bottom-40 -right-20 w-72 h-72 lg:w-[400px] lg:h-[400px] animate-float"
          style={{ animationDelay: "2s" }}
        >
          <AbstractBlob variant="blob2" />
        </motion.div>
      </div>

      {/* Main Content */}
      <motion.div
        style={{ opacity }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container-custom relative z-10 text-center pt-20"
      >
        {/* Brand Tag */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8"
        >
          <Compass className="w-4 h-4 text-[var(--color-nectarine)]" />
          <span className="text-sm font-medium text-[var(--color-paper)]">
            Open Innovation Ecosystem
          </span>
        </motion.div>

        {/* Headline - From copywriting.md */}
        <motion.h1
          variants={itemVariants}
          className="text-[var(--color-paper)] mb-6 max-w-4xl mx-auto"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-hero)",
            lineHeight: "var(--leading-tight)",
            letterSpacing: "var(--tracking-tight)",
          }}
        >
          Build the{" "}
          <span
            className="text-[var(--color-nectarine)] inline-block relative"
            style={{ fontFamily: "var(--font-script)" }}
          >
            Future.
            {/* Subtle underline SVG for emphasis */}
            <svg 
              className="absolute w-full h-3 -bottom-1 left-0 text-[var(--color-nectarine)] opacity-60" 
              viewBox="0 0 100 10" 
              preserveAspectRatio="none"
            >
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </span>{" "}
          Together.
        </motion.h1>

        {/* Subheadline - From copywriting.md */}
        <motion.p
          variants={itemVariants}
          className="text-[var(--color-paper)]/90 max-w-2xl mx-auto mb-10"
          style={{
            fontSize: "var(--text-body-lg)",
            lineHeight: "var(--leading-relaxed)",
          }}
        >
          An open innovation ecosystem where engineers, designers, and AI builders 
          collaborate to turn ideas into real-world technology.
        </motion.p>

        {/* CTAs - From copywriting.md */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          {/* Primary CTA with pulse animation */}
          <a
            href="#projects"
            className="btn-primary animate-cta-pulse"
          >
            Start Building
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
          {/* Secondary CTA */}
          <a
            href="#projects"
            className="btn-ghost text-[var(--color-paper)] border-[var(--color-paper)]/30 hover:bg-[var(--color-paper)]/10 hover:text-[var(--color-paper)]"
          >
            <Compass className="mr-2 w-5 h-5" />
            Explore Projects
          </a>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 max-w-3xl mx-auto pt-8 border-t border-[var(--color-paper)]/10"
        >
          {[
            { value: "10K+", label: "Builders" },
            { value: "2,500+", label: "Projects" },
            { value: "100+", label: "Partners" },
            { value: "50+", label: "Countries" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.12, duration: 0.5 }}
              className="text-center"
            >
              <div
                className="text-3xl lg:text-4xl font-bold text-[var(--color-paper)] mb-1"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {stat.value}
              </div>
              <div className="text-sm text-[var(--color-paper)]/60">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom Wave Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 lg:h-32 translate-y-1">
        <WavePattern />
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-32 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-[var(--color-paper)]/30 rounded-full flex items-start justify-center p-1"
        >
          <motion.div className="w-1.5 h-2.5 bg-[var(--color-nectarine)] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
