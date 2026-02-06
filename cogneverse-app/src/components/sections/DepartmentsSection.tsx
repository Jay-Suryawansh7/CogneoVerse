"use client";

import { revealVariants, containerVariants } from "@/lib/animations";
import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/layout/Section";
import { 
  BrainCircuit, // Mind
  Cog, // Motion
  ShieldCheck, // Aegis
  Bot, // Robotics
  Cpu, // Circuits
  Network, // Cyber
  Hammer, // Forge
  ArrowRight
} from "lucide-react";

// Department Data based on System Specification
const departments = [
  {
    id: "mind",
    name: "Mind Department",
    domain: "AI & Cognitive Systems",
    icon: BrainCircuit,
    focus: ["LLMs", "Computer Vision", "Cognitive Arch"],
    color: "var(--color-nectarine)", // Nectarine
    gradient: "from-[var(--color-nectarine)] to-[#FF8A4C]",
    delay: 0.1
  },
  {
    id: "motion",
    name: "Motion Department",
    domain: "Mechanical & Dynamics",
    icon: Cog,
    focus: ["Robotics Motion", "Control Systems", "Kinematics"],
    color: "var(--color-cobalt)", // Cobalt
    gradient: "from-[var(--color-cobalt)] to-[#4B5CD3]",
    delay: 0.2
  },
  {
    id: "aegis",
    name: "Aegis Department",
    domain: "Security & Safety Systems",
    icon: ShieldCheck,
    focus: ["Cybersecurity", "Threat Detection", "Risk Systems"],
    color: "var(--color-pink-eraser)", // Pink Eraser
    gradient: "from-[var(--color-pink-eraser)] to-[#F28B82]",
    delay: 0.3
  },
  {
    id: "robotics",
    name: "Robotics Department",
    domain: "Autonomous Systems",
    icon: Bot,
    focus: ["Autonomous Vehicles", "Drones", "Service Robots"],
    color: "var(--color-oceanic)", // Oceanic
    gradient: "from-[var(--color-oceanic)] to-[#00666F]",
    delay: 0.1
  },
  {
    id: "circuits",
    name: "Circuits Department",
    domain: "Electronics & Hardware",
    icon: Cpu,
    focus: ["PCB Design", "Embedded Systems", "Sensors"],
    color: "#D97706", // Darker Amber/Orange distinct from Nectarine but warm
    gradient: "from-[#F59E0B] to-[#D97706]",
    delay: 0.2
  },
  {
    id: "cyber",
    name: "Cyber Department",
    domain: "Software & Networks",
    icon: Network,
    focus: ["Cloud Systems", "DevOps", "Distributed Systems"],
    color: "#3B82F6", // Lighter Blue distinct from Cobalt
    gradient: "from-[#60A5FA] to-[#3B82F6]",
    delay: 0.3
  },
  {
    id: "forge",
    name: "Forge Department",
    domain: "R&D & Manufacturing",
    icon: Hammer,
    focus: ["Prototyping", "3D Printing", "Supply Chain"],
    color: "#0F172A", // Slate/Dark distinct from Oceanic
    gradient: "from-[#334155] to-[#0F172A]",
    delay: 0.2
  }
];

export function DepartmentsSection() {
  return (
    <Section id="departments" variant="default" withNoise>
      <SectionHeader
        title="Innovation Labs"
        subtitle="specialized departments driving the Cogneverse ecosystem. Each lab operates independently but shares a unified infrastructure for limitless collaboration."
      />

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {departments.map((dept) => (
          <motion.div
            key={dept.id}
            variants={revealVariants}
            className="group relative bg-white rounded-2xl p-6 shadow-sm border border-[var(--color-ink)]/5 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
          >
            {/* Top Border Accent */}
            <div 
              className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${dept.gradient} opacity-80 group-hover:opacity-100 transition-opacity`}
            />

            <div className="flex items-start justify-between mb-4">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300"
                style={{ background: `linear-gradient(135deg, ${dept.color}, ${dept.color}dd)` }}
              >
                <dept.icon className="w-6 h-6" />
              </div>
              <ArrowRight 
                className="w-5 h-5 text-[var(--color-ink)]/20 group-hover:text-[var(--color-cobalt)] group-hover:translate-x-1 transition-all" 
              />
            </div>

            <h3 
              className="text-xl font-bold text-[var(--color-ink)] mb-1"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {dept.name}
            </h3>
            
            <p 
              className="text-[var(--color-ink)]/60 text-sm font-medium mb-4 uppercase tracking-wider"
            >
              {dept.domain}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {dept.focus.map((item) => (
                <span 
                  key={item}
                  className="px-2 py-1 bg-[var(--color-paper)] rounded text-[10px] font-semibold text-[var(--color-ink)]/70 border border-[var(--color-ink)]/5"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
