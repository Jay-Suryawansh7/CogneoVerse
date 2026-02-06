"use client";

import { revealVariants, containerVariants } from "@/lib/animations";
import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/layout/Section";
import { ArrowRight, FileText, Code, Database, BookOpen, Puzzle, Settings } from "lucide-react";


const resources = [
  {
    icon: FileText,
    title: "Documentation",
    description: "Comprehensive guides and API references for all Cogneverse products.",
    count: "500+ docs",
  },
  {
    icon: Code,
    title: "Code Samples",
    description: "Production-ready examples and starter templates across languages.",
    count: "200+ samples",
  },
  {
    icon: Database,
    title: "Datasets",
    description: "Curated datasets for ML training, research, and benchmarking.",
    count: "100+ datasets",
  },
  {
    icon: BookOpen,
    title: "Tutorials",
    description: "Step-by-step guides from basics to advanced implementations.",
    count: "150+ tutorials",
  },
  {
    icon: Puzzle,
    title: "Components",
    description: "Reusable UI components and design system elements.",
    count: "300+ components",
  },
  {
    icon: Settings,
    title: "APIs",
    description: "RESTful and GraphQL APIs with full documentation and SDKs.",
    count: "50+ APIs",
  },
];

export function ResourcesSection() {
  return (
    <Section id="resources" variant="accent">
      {/* Title and Description from copywriting.md */}
      <SectionHeader
        title="Learn. Build. Deploy."
        subtitle="Access documentation, APIs, datasets, templates, and open-source libraries to power your projects. All resources are curated, peer-reviewed, and continuously updated."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource, index) => (
          <motion.div
            key={resource.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={revealVariants}
            transition={{ delay: index * 0.1 }}
            className="group bg-white p-6 rounded-xl shadow-md border border-[var(--color-ink)]/5 card-hover cursor-pointer"
            style={{ borderRadius: "12px" }}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-oceanic)]/10 flex items-center justify-center group-hover:bg-[var(--color-oceanic)] transition-colors">
                <resource.icon className="w-6 h-6 text-[var(--color-oceanic)] group-hover:text-white transition-colors" />
              </div>
              <span
                className="font-medium text-[var(--color-cobalt)] bg-[var(--color-cobalt)]/10 px-2 py-1 rounded-full"
                style={{ fontSize: "var(--text-small)" }}
              >
                {resource.count}
              </span>
            </div>
            <h4
              className="text-lg font-semibold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-cobalt)] transition-colors"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {resource.title}
            </h4>
            <p
              className="text-[var(--color-ink)]/60"
              style={{ fontSize: "var(--text-small)", lineHeight: "var(--leading-relaxed)" }}
            >
              {resource.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* CTA from copywriting.md */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={revealVariants}
        className="text-center mt-12"
      >
        <a href="#" className="btn-ghost">
          Access Resources
          <ArrowRight className="ml-2 w-4 h-4" />
        </a>
      </motion.div>
    </Section>
  );
}
