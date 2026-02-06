"use client";

import { revealVariants, containerVariants } from "@/lib/animations";
import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/layout/Section";
import { ArrowRight, Cpu, Bot, Zap, BarChart3 } from "lucide-react";


const products = [
  {
    icon: Bot,
    title: "AI Co-Engineer",
    description: "An intelligent coding assistant that understands your codebase and helps you build faster with context-aware suggestions.",
    features: ["Context-aware completion", "Code review automation", "Test generation"],
    gradient: "from-[var(--color-nectarine)] to-[#FF8A4C]",
  },
  {
    icon: Cpu,
    title: "Edge ML Runtime",
    description: "Deploy machine learning models to edge devices with optimized inference and minimal latency.",
    features: ["Model optimization", "Multi-platform support", "Real-time inference"],
    gradient: "from-[var(--color-cobalt)] to-[#4B5CD3]",
  },
  {
    icon: Zap,
    title: "Rapid Prototyper",
    description: "Go from idea to working prototype in hours with our automated scaffolding and component library.",
    features: ["Template library", "Auto-configuration", "One-click deploy"],
    gradient: "from-[var(--color-oceanic)] to-[#00666F]",
  },
  {
    icon: BarChart3,
    title: "Analytics Engine",
    description: "Track project metrics, team performance, and community engagement with real-time dashboards.",
    features: ["Custom dashboards", "Team insights", "Engagement metrics"],
    gradient: "from-[#8B5CF6] to-[#A78BFA]",
  },
];

export function ProductsSection() {
  return (
    <Section id="products">
      {/* Title and Description from copywriting.md */}
      <SectionHeader
        title="Tools Built by Builders"
        subtitle="Our in-house products and platforms are designed to accelerate engineering workflows, automate research, and enable rapid prototyping. From AI co-engineers to automation systems, every product is built with performance, scalability, and usability in mind."
      />

      <div className="grid md:grid-cols-2 gap-8">
        {products.map((product, index) => (
          <motion.div
            key={product.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={revealVariants}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-white rounded-xl p-8 shadow-lg border border-[var(--color-ink)]/5 card-hover overflow-hidden"
            style={{ borderRadius: "12px" }}
          >
            {/* Top accent bar - Featured Card style from brandkit */}
            <div
              className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${product.gradient}`}
            />

            {/* Icon */}
            <div
              className={`w-14 h-14 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-6`}
            >
              <product.icon className="w-7 h-7 text-white" />
            </div>

            {/* Content */}
            <h3
              className="text-xl font-bold text-[var(--color-ink)] mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {product.title}
            </h3>
            <p
              className="text-[var(--color-ink)]/70 mb-6"
              style={{ lineHeight: "var(--leading-relaxed)" }}
            >
              {product.description}
            </p>

            {/* Features */}
            <ul className="space-y-2 mb-6">
              {product.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-2 text-[var(--color-ink)]/60"
                  style={{ fontSize: "var(--text-small)" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-nectarine)]" />
                  {feature}
                </li>
              ))}
            </ul>

            {/* Link */}
            <a
              href="#"
              className="inline-flex items-center font-medium text-[var(--color-cobalt)] hover:text-[var(--color-oceanic)] transition-colors group/link"
              style={{ fontSize: "var(--text-small)" }}
            >
              Learn more
              <ArrowRight className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        ))}
      </div>

      {/* CTA - From copywriting.md */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={revealVariants}
        className="text-center mt-12"
      >
        <a href="#" className="btn-primary">
          View Products
          <ArrowRight className="ml-2 w-4 h-4" />
        </a>
      </motion.div>
    </Section>
  );
}
