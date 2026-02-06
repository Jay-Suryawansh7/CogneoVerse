"use client";

import { revealVariants, containerVariants } from "@/lib/animations";
import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/layout/Section";
import { AbstractBlob } from "@/components/illustrations/Shapes";
import { Lightbulb, Users, Rocket, Globe } from "lucide-react";

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
    <Section id="about" className="relative">
      {/* Decorative Blob */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.08 }}
        viewport={{ once: true }}
        className="absolute -right-32 top-0 w-96 h-96"
      >
        <AbstractBlob variant="blob2" />
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left: Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.12 },
            },
          }}
        >
          <motion.span
            variants={revealVariants}
            className="text-[var(--color-nectarine)] uppercase tracking-wider mb-4 block font-medium"
            style={{ fontSize: "var(--text-small)" }}
          >
            About Us
          </motion.span>
          
          {/* Section Title from copywriting.md */}
          <motion.h2
            variants={revealVariants}
            className="text-[var(--color-ink)] mb-6"
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
          </motion.h2>
          
          {/* Body Copy from copywriting.md */}
          <motion.p
            variants={revealVariants}
            className="text-[var(--color-ink)]/70 mb-6"
            style={{ fontSize: "var(--text-body-lg)", lineHeight: "var(--leading-relaxed)" }}
          >
            Cogneverse is a collaborative platform designed for innovators, engineers, designers,
            and problem-solvers. We bring together technology, creativity, and community to
            transform ideas into scalable products.
          </motion.p>
          <motion.p
            variants={revealVariants}
            className="text-[var(--color-ink)]/70"
            style={{ lineHeight: "var(--leading-relaxed)" }}
          >
            From open-source research to startup-ready systems, Cogneverse supports every stage
            of innovation. Whether you&apos;re a student exploring AI, a professional building
            robotics, or a founder launching your next venture—this is your home.
          </motion.p>
        </motion.div>

        {/* Right: Values Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={revealVariants}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg card-hover border border-[var(--color-ink)]/5"
            >
              <div className="w-12 h-12 rounded-lg bg-[var(--color-oceanic)]/10 flex items-center justify-center mb-4">
                <value.icon className="w-6 h-6 text-[var(--color-oceanic)]" />
              </div>
              <h4
                className="text-[var(--color-ink)] font-semibold mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {value.title}
              </h4>
              <p
                className="text-[var(--color-ink)]/60"
                style={{ fontSize: "var(--text-small)", lineHeight: "var(--leading-relaxed)" }}
              >
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
