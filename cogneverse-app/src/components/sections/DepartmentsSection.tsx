"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/layout/Section";
import { 
  BrainCircuit, Cog, ShieldCheck, Bot, Cpu, Network, Hammer, 
  ArrowRight, PlusIcon, ShieldCheckIcon
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BorderTrail } from "@/components/ui/border-trail";
import { revealVariants } from "@/lib/animations";

// Department Data
const departments = [
  {
    id: "mind",
    name: "Mind",
    fullName: "Mind Department",
    domain: "AI & Cognitive Systems",
    icon: BrainCircuit,
    description: "Architecting the neural pathways of tomorrow's intelligence.",
    stats: { members: 120, projects: 14 },
    color: "var(--color-nectarine)",
    delay: 0.1,
    highlight: "Core Intelligence"
  },
  {
    id: "motion",
    name: "Motion",
    fullName: "Motion Department",
    domain: "Mechanical & Dynamics",
    icon: Cog,
    description: "Engineering fluid movement and advanced kinematics systems.",
    stats: { members: 65, projects: 9 },
    color: "var(--color-cobalt)",
    delay: 0.15,
    highlight: "Kinematics"
  },
  {
    id: "aegis",
    name: "Aegis",
    fullName: "Aegis Department",
    domain: "Security & Safety",
    icon: ShieldCheck,
    description: "Ensuring robustness and safety in all cognitive deployments.",
    stats: { members: 45, projects: 5 },
    color: "var(--color-pink-eraser)",
    delay: 0.2,
    highlight: "System Safety"
  },
  {
    id: "robotics",
    name: "Robotics",
    fullName: "Robotics Department",
    domain: "Autonomous Systems",
    icon: Bot,
    description: "Building autonomous agents that navigate the physical world.",
    stats: { members: 85, projects: 8 },
    color: "var(--color-oceanic)",
    delay: 0.25,
    highlight: "Physical AI"
  },
  {
    id: "circuits",
    name: "Circuits",
    fullName: "Circuits Department",
    domain: "Electronics & Hardware",
    icon: Cpu,
    description: "Developing next-gen sensors and embedded computation layers.",
    stats: { members: 55, projects: 11 },
    color: "#D97706",
    delay: 0.3,
    highlight: "Hardware"
  },
  {
    id: "cyber",
    name: "Cyber",
    fullName: "Cyber Department",
    domain: "Software & Networks",
    icon: Network,
    description: "Orchestrating distributed cloud systems and low-latency networks.",
    stats: { members: 90, projects: 16 },
    color: "#3B82F6",
    delay: 0.35,
    highlight: "Network"
  },
  {
    id: "forge",
    name: "Forge",
    fullName: "Forge Department",
    domain: "R&D & Manufacturing",
    icon: Hammer,
    description: "Rapid prototyping and advanced manufacturing techniques.",
    stats: { members: 40, projects: 7 },
    color: "#0F172A",
    delay: 0.4,
    highlight: "R&D"
  }
];

export function DepartmentsSection() {
  return (
    <Section id="departments" variant="default" className="py-24" withNoise>
      <SectionHeader
        title="Innovation Labs"
        subtitle="Specialized departments driving the Cogneverse ecosystem. Each lab operates independently but shares a unified infrastructure."
      />

      <div className="relative w-full mt-12 overflow-hidden">
        {/* Horizontal Scroll Container */}
        {/* Horizontal Scroll Container */}
        <motion.div 
          className="flex overflow-x-auto pb-12 px-4 md:px-8 gap-6 snap-x snap-mandatory scrollbar-hide -mx-4 md:mx-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {departments.map((dept, index) => (
            <motion.div
              key={dept.id}
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: { 
                    opacity: 1, 
                    x: 0,
                    transition: { duration: 0.5, ease: "easeOut" }
                }
              }}
              className="relative group h-full flex-shrink-0 w-[85vw] md:w-[350px] snap-center"
            >
              {/* Card Container */}
              <div className="relative h-full flex flex-col bg-white rounded-xl border border-[var(--color-ink)]/10 p-6 shadow-sm hover:shadow-xl transition-shadow duration-500 overflow-hidden min-h-[420px]">
                
                {/* Decorative Corners */}
                <PlusIcon className="absolute -top-2 -left-2 w-4 h-4 text-[var(--color-ink)]/20" />
                <PlusIcon className="absolute -top-2 -right-2 w-4 h-4 text-[var(--color-ink)]/20" />
                <PlusIcon className="absolute -bottom-2 -left-2 w-4 h-4 text-[var(--color-ink)]/20" />
                <PlusIcon className="absolute -bottom-2 -right-2 w-4 h-4 text-[var(--color-ink)]/20" />

                {/* Animated Border Trail on Hover */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <BorderTrail
                    style={{
                        boxShadow: `0px 0px 60px 30px ${dept.color}40, 0 0 100px 60px ${dept.color}20`,
                        backgroundColor: dept.color
                    }}
                    size={80}
                    />
                </div>

                {/* Header */}
                <div className="space-y-4 mb-6 relative z-10">
                  <div className="flex items-center justify-between">
                    <div className={`p-2 rounded-lg bg-[var(--color-paper)] border border-[var(--color-ink)]/5 text-[var(--color-ink)]`}>
                        <dept.icon className="w-5 h-5" style={{ color: dept.color }} />
                    </div>
                    {dept.highlight && (
                        <Badge variant="secondary" className="bg-[var(--color-paper)] text-[var(--color-ink)] text-[10px] uppercase tracking-wider border border-[var(--color-ink)]/10">
                            {dept.highlight}
                        </Badge>
                    )}
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-[var(--color-ink)]" style={{ fontFamily: "var(--font-display)" }}>
                        {dept.name}
                    </h3>
                    <p className="text-xs font-bold text-[var(--color-oceanic)] uppercase tracking-wider mt-1 opacity-80">
                        {dept.domain}
                    </p>
                  </div>

                  <p className="text-sm text-[var(--color-ink)]/70 leading-relaxed min-h-[3rem]">
                    {dept.description}
                  </p>
                </div>

                {/* Metrics / Pricing Style Info */}
                <div className="mt-auto space-y-4 relative z-10 pt-4 border-t border-[var(--color-ink)]/5">
                  <div className="flex items-end gap-1">
                    <span className="text-3xl font-extrabold text-[var(--color-ink)] tabular-nums tracking-tight">
                        {dept.stats.members}
                    </span>
                    <span className="text-sm text-[var(--color-ink)]/50 mb-1 font-medium">Research Members</span>
                  </div>

                  <Button className="w-full group/btn" variant="outline">
                    <span className="group-hover/btn:mr-2 transition-all">Explore Lab</span>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover/btn:opacity-100 transition-all -ml-4 group-hover/btn:ml-0" />
                  </Button>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Access Note */}
        <div className="mt-4 text-center flex items-center justify-center gap-2 text-sm text-[var(--color-ink)]/50">
           <ShieldCheckIcon className="w-4 h-4" />
           <span>Unified infrastructure access across all departments</span>
        </div>

      </div>
    </Section>
  );
}
