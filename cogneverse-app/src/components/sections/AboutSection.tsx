"use client";

import { Section } from "@/components/layout/Section";
import { motion } from "framer-motion";
import { Lightbulb, Users, Rocket, Globe } from "lucide-react";
import { AbstractBlob } from "@/components/illustrations/Shapes";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { MagicTextReveal } from "@/components/ui/magic-text-reveal";
import Marquee from "@/components/ui/marquee";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const teamMembers = [
  {
    name: "Michael Reeves",
    role: "CEO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80",
    contribution: "Leading the vision of Cogneverse to bridge human creativity with AI efficiency.",
  },
  {
    name: "Sarah Donnelly",
    role: "Head of Design",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&q=80",
    contribution: "Crafting intuitive and human-centric interfaces that make complex tech accessible.",
  },
  {
    name: "James Torff",
    role: "CPO",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&q=80",
    contribution: "Defining the product roadmap and ensuring we solve real user problems effectively.",
  },
  {
    name: "Hanna Calzoni",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&q=80",
    contribution: "Architecting the scalable infrastructure that powers our global ecosystem.",
  },
  {
    name: "Alex Morgan",
    role: "Lead Engineer",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&q=80",
    contribution: "Driving core engineering excellence and mentoring the next generation of builders.",
  },
  {
    name: "Lindsey Upshutz",
    role: "CMO",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&q=80",
    contribution: "Sharing our story with the world and building a community of passionate innovators.",
  },
  {
    name: "Daniel Foster",
    role: "Growth Lead",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&q=80",
    contribution: "Expanding our reach and ensuring every user finds value in Cogneverse.",
  },
];

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
               <div className="inline-flex align-middle mx-1" style={{ height: '50px', display: 'inline-flex' }}>
                 <MagicTextReveal 
                   text="Thinkers" 
                   fontSize={40}
                   color="var(--color-cobalt)"
                   fontFamily="'Dancing Script', cursive"
                   style={{ 
                     backgroundColor: 'transparent', 
                     border: 'none',
                     backdropFilter: 'none',
                     minWidth: 'auto',
                     minHeight: 'auto',
                     width: 'auto',
                     height: '50px',
                     overflow: 'visible'
                   }}
                 />
               </div>
              {" "}and Makers
            </h2>
            
            {/* Body Copy - Updated as per user request */}
            <p
              className="text-[var(--color-ink)]/70 mb-6"
              style={{ fontSize: "var(--text-body-lg)", lineHeight: "var(--leading-relaxed)" }}
            >
              Connecting developers, students, and researchers to solve the real pains of people. Cogneverse is a collaborative platform designed for innovators to transform ideas into scalable products.
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

          {/* Right: Values Marquee */}
          <div className="relative overflow-hidden w-full lg:max-w-lg">
             <Marquee pauseOnHover className="[--duration:20s] [--gap:1.5rem]" repeat={4}>
                {values.map((value, index) => (
                  <div 
                    key={value.title + index}
                    className="bg-white p-6 rounded-[24px] shadow-sm hover:shadow-xl card-hover border border-[var(--color-ink)]/ushort h-full w-[280px] shrink-0 transition-all duration-300 mx-2"
                  >
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
                ))}
             </Marquee>
             
              {/* Gradients to fade edges */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-[var(--color-paper)] dark:from-background z-10"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-[var(--color-paper)] dark:from-background z-10"></div>
          </div>
        </div>

        {/* Meet Our People Marquee */}
        <div className="mt-20">
            <div className="text-center mb-10">
                <span className="inline-block py-1 px-3 rounded-full bg-[var(--color-nectarine)] text-[var(--color-ink)] font-semibold text-xs tracking-wide uppercase mb-4">
                    Our People
                </span>
                <h3 className="text-[var(--color-ink)] text-3xl font-bold mb-2" style={{ fontFamily: "var(--font-display)" }}>
                    Meet Our Team
                </h3>
                <p className="text-[var(--color-ink)]/60 max-w-2xl mx-auto">
                    A multidisciplinary group of dreamers and doers building the future.
                </p>
            </div>
            <div className="relative w-full overflow-hidden">
                <InfiniteMovingCards
                    items={teamMembers}
                    direction="left"
                    speed="slow"
                />
            </div>
        </div>

      </div>
    </Section>
  );
}
