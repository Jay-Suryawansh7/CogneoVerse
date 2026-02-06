"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  variant?: "default" | "primary" | "dark" | "accent";
  withNoise?: boolean;
}

const variantStyles = {
  default: "bg-[var(--color-paper)]",
  primary: "gradient-hero text-[var(--color-paper)]",
  dark: "bg-[var(--color-onyx)] text-[var(--color-paper)]",
  accent: "bg-[var(--color-nectarine)]/10",
};

export function Section({
  id,
  children,
  className = "",
  variant = "default",
  withNoise = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`section-padding relative overflow-hidden ${variantStyles[variant]} ${
        withNoise ? "noise-overlay" : ""
      } ${className}`}
    >
      <div className="container-custom relative z-10">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  accentWord?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeader({
  title,
  subtitle,
  accentWord,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  const titleParts = accentWord ? title.split(accentWord) : [title];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`mb-12 md:mb-16 ${centered ? "text-center" : ""}`}
    >
      <h2
        className={`mb-4 ${light ? "text-[var(--color-paper)]" : "text-[var(--color-ink)]"}`}
        style={{ fontFamily: "var(--font-display)" }}
      >
        {accentWord ? (
          <>
            {titleParts[0]}
            <span
              className="text-[var(--color-nectarine)]"
              style={{ fontFamily: "var(--font-script)" }}
            >
              {accentWord}
            </span>
            {titleParts[1]}
          </>
        ) : (
          title
        )}
      </h2>
      {subtitle && (
        <p
          className={`text-lg max-w-2xl ${centered ? "mx-auto" : ""} ${
            light ? "text-[var(--color-paper)]/80" : "text-[var(--color-ink)]/70"
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
