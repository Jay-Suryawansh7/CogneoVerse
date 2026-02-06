"use client";

import { revealVariants, containerVariants } from "@/lib/animations";
import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/layout/Section";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, GitFork } from "lucide-react";


const projects = [
  {
    title: "NeuralVision AI",
    description: "Computer vision framework for real-time object detection and tracking in edge devices.",
    tags: ["AI/ML", "Computer Vision", "Python"],
    stars: 2345,
    forks: 456,
    image: "🧠",
  },
  {
    title: "SecureChain",
    description: "Decentralized identity verification system using blockchain and zero-knowledge proofs.",
    tags: ["Blockchain", "Security", "Rust"],
    stars: 1890,
    forks: 312,
    image: "🔐",
  },
  {
    title: "RoboArm SDK",
    description: "Open-source robotics control library for industrial and research automation projects.",
    tags: ["Robotics", "IoT", "C++"],
    stars: 1567,
    forks: 289,
    image: "🤖",
  },
  {
    title: "DataFlow Pro",
    description: "Real-time data pipeline orchestration tool for modern data engineering workflows.",
    tags: ["Data Engineering", "Apache Kafka", "Go"],
    stars: 1234,
    forks: 198,
    image: "📊",
  },
  {
    title: "QuantumSim",
    description: "Quantum computing simulator for algorithm development and educational purposes.",
    tags: ["Quantum", "Research", "Julia"],
    stars: 987,
    forks: 156,
    image: "⚛️",
  },
  {
    title: "CloudNative Kit",
    description: "Kubernetes operators and helm charts for deploying AI workloads at scale.",
    tags: ["DevOps", "Kubernetes", "YAML"],
    stars: 876,
    forks: 134,
    image: "☁️",
  },
];

export function ProjectsSection() {
  return (
    <Section id="projects" variant="accent">
      <SectionHeader
        title="Explore Real-World Innovation"
        subtitle="Discover community-built projects across AI, robotics, cybersecurity, IoT, blockchain, and advanced engineering. Build, fork, collaborate, and publish your work with complete documentation and version control."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={revealVariants}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full card-hover bg-white border-[var(--color-ink)]/5 overflow-hidden group">
              {/* Project Icon/Image - 300px height as per chain-of-prompts.md */}
              <div className="h-32 bg-gradient-to-br from-[var(--color-oceanic)] to-[var(--color-cobalt)] flex items-center justify-center text-5xl group-hover:scale-105 transition-transform duration-300">
                {project.image}
              </div>

              <CardHeader className="pb-2">
                <CardTitle
                  className="text-lg group-hover:text-[var(--color-cobalt)] transition-colors"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {project.title}
                </CardTitle>
                <CardDescription className="line-clamp-2">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                {/* Tags - Secondary Button Style */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="btn-secondary text-xs py-1 px-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center gap-4 text-sm text-[var(--color-ink)]/50">
                  <span className="flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    {project.stars.toLocaleString()}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-4 h-4" />
                    {project.forks}
                  </span>
                </div>
              </CardContent>
            </Card>
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
        <a href="#" className="btn-ghost">
          Browse Projects
          <ArrowRight className="ml-2 w-4 h-4" />
        </a>
      </motion.div>
    </Section>
  );
}
