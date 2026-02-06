"use client";

import { revealVariants, containerVariants } from "@/lib/animations";
import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { Users, Lock, Globe, ArrowRight } from "lucide-react";


const teamFeatures = [
  {
    icon: Users,
    title: "Interdisciplinary Collaboration",
    description: "Work with experts across hardware, software, design, and research to build complete solutions.",
  },
  {
    icon: Lock,
    title: "Public or Private Teams",
    description: "Create open teams for community projects or private teams for stealth mode development.",
  },
  {
    icon: Globe,
    title: "Global Talent Pool",
    description: "Connect with skilled professionals from around the world and build distributed teams.",
  },
];

const teamAvatars = [
  { name: "Sarah Chen", role: "ML Engineer", color: "#FF6B6B" },
  { name: "James Wilson", role: "Backend Dev", color: "#4ECDC4" },
  { name: "Priya Sharma", role: "UX Designer", color: "#FFE66D" },
  { name: "Alex Kim", role: "Robotics Lead", color: "#95E1D3" },
  { name: "Marcus Brown", role: "DevOps", color: "#DDA0DD" },
];

export function TeamsSection() {
  return (
    <Section id="teams" variant="dark" withNoise>
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
            Teams
          </motion.span>
          
          {/* Title from copywriting.md */}
          <motion.h2
            variants={revealVariants}
            className="text-[var(--color-paper)] mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Collaborate{" "}
            <span
              className="text-[var(--color-nectarine)]"
              style={{ fontFamily: "var(--font-script)" }}
            >
              Without
            </span>{" "}
            Limits
          </motion.h2>
          
          {/* Description from copywriting.md */}
          <motion.p
            variants={revealVariants}
            className="text-[var(--color-paper)]/70 mb-8"
            style={{ fontSize: "var(--text-body-lg)", lineHeight: "var(--leading-relaxed)" }}
          >
            Join interdisciplinary teams and work with experts across hardware, software, design,
            and research. Create private or open teams, manage workflows, and ship projects faster.
          </motion.p>

          {/* Features */}
          <div className="space-y-6 mb-8">
            {teamFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={revealVariants}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--color-nectarine)]/20 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-5 h-5 text-[var(--color-nectarine)]" />
                </div>
                <div>
                  <h4 className="text-[var(--color-paper)] font-semibold mb-1">
                    {feature.title}
                  </h4>
                  <p
                    className="text-[var(--color-paper)]/60"
                    style={{ fontSize: "var(--text-small)" }}
                  >
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA from copywriting.md */}
          <motion.div variants={revealVariants}>
            <a href="#" className="btn-primary">
              Join a Team
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Team Visualization */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={revealVariants}
          className="relative"
        >
          <div className="relative bg-[var(--color-paper)]/5 rounded-2xl p-8 border border-[var(--color-paper)]/10 backdrop-blur-sm">
            {/* Team Card */}
            <div className="bg-gradient-to-br from-[var(--color-oceanic)] to-[var(--color-cobalt)] rounded-xl p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[var(--color-paper)] font-semibold">Active Project Team</span>
                <span className="px-2 py-1 bg-[var(--color-nectarine)] text-[var(--color-ink)] font-medium rounded-full" style={{ fontSize: "var(--text-small)" }}>
                  5 members
                </span>
              </div>
              <h3 className="text-xl text-[var(--color-paper)] font-bold mb-2" style={{ fontFamily: "var(--font-display)" }}>
                NeuralVision AI
              </h3>
              <p className="text-[var(--color-paper)]/70" style={{ fontSize: "var(--text-small)" }}>
                Building next-gen computer vision for autonomous systems
              </p>
            </div>

            {/* Team Members */}
            <div className="space-y-3">
              {teamAvatars.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-[var(--color-paper)]/5 hover:bg-[var(--color-paper)]/10 transition-colors"
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold"
                    style={{ backgroundColor: member.color, fontSize: "var(--text-small)" }}
                  >
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <div className="text-[var(--color-paper)] font-medium" style={{ fontSize: "var(--text-small)" }}>{member.name}</div>
                    <div className="text-[var(--color-paper)]/50" style={{ fontSize: "12px" }}>{member.role}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-[var(--color-nectarine)]/20 rounded-full blur-2xl" />
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[var(--color-cobalt)]/20 rounded-full blur-2xl" />
        </motion.div>
      </div>
    </Section>
  );
}
