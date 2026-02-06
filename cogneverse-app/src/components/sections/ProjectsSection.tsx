"use client";

import { useState, useRef, useEffect } from 'react';
import { revealVariants, containerVariants } from "@/lib/animations";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, GitFork, Plus, FolderOpen, Code, Rocket, X, Users, MousePointer2, MessageSquare, Zap } from "lucide-react";
import { EmptyState } from "@/components/ui/interactive-empty-state";

// --- Data ---
const projects = [
  {
    title: "NeuralVision AI",
    description: "Computer vision framework for real-time object detection on edge devices.",
    tags: ["AI/ML", "Vision"],
    stars: "2.3k",
    collaborators: 12,
    icon: <Zap className="w-6 h-6 text-white" />,
    color: "from-orange-400 to-pink-500" // Fallback/Tailwind colors mapped to brand later if needed or kept for vibrancy
  },
  {
    title: "SecureChain",
    description: "Decentralized identity verification using zero-knowledge proofs.",
    tags: ["Blockchain", "Security"],
    stars: "1.8k",
    collaborators: 8,
    icon: <Code className="w-6 h-6 text-white" />,
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "RoboArm SDK",
    description: "Open control library for industrial automation and robotics.",
    tags: ["Robotics", "C++"],
    stars: "1.5k",
    collaborators: 24,
    icon: <Rocket className="w-6 h-6 text-white" />,
    color: "from-purple-500 to-indigo-500"
  },
  {
    title: "DataFlow Pro",
    description: "Real-time orchestration tool for modern data engineering.",
    tags: ["Data", "Go"],
    stars: "1.2k",
    collaborators: 5,
    icon: <FolderOpen className="w-6 h-6 text-white" />,
    color: "from-emerald-400 to-teal-500"
  },
];

// --- Visual Components ---

const FloatingCursor = ({ name, color, x, y, delay }: { name: string, color: string, x: number | string, y: number | string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, x: 0, y: 0 }}
    animate={{ opacity: 1, x, y }}
    transition={{ duration: 2, delay, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
    className="absolute z-20 pointer-events-none"
    style={{ left: "50%", top: "50%" }}
  >
    <MousePointer2 className="w-4 h-4 fill-current rotate-12" style={{ color }} />
    <div className="ml-3 px-2 py-0.5 rounded-full text-[10px] font-bold text-white whitespace-nowrap" style={{ backgroundColor: color }}>
      {name}
    </div>
  </motion.div>
);

const AvatarStack = () => (
  <div className="flex -space-x-2">
    {["var(--color-oceanic)", "var(--color-nectarine)", "var(--color-cobalt)", "var(--color-pink-eraser)"].map((color, i) => (
      <div key={i} className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold text-white relative z-10" style={{ backgroundColor: color }}>
        {String.fromCharCode(65 + i)}
      </div>
    ))}
     <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-500 relative z-0">
        +5
      </div>
  </div>
);

// --- Main Component ---

export function ProjectsSection() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown logic
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <Section id="projects" className="bg-[var(--color-paper)] overflow-hidden">
      
      {/* --- Intro / Header --- */}
      <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
        
        {/* Left Text */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="relative z-10"
        >
            <motion.div variants={revealVariants} className="w-12 h-12 rounded-xl bg-[var(--color-oceanic)]/10 flex items-center justify-center mb-6">
                 <Users className="w-6 h-6 text-[var(--color-oceanic)]" />
            </motion.div>

            <motion.h2 
                variants={revealVariants} 
                className="text-4xl md:text-5xl font-bold text-[var(--color-ink)] mb-6 leading-[1.1]"
                style={{ fontFamily: 'var(--font-display)' }}
            >
                Build and ship <br/>
                <span className="text-[var(--color-oceanic)]">innovation together</span>
            </motion.h2>

            <motion.p variants={revealVariants} className="text-xl text-[var(--color-ink)]/70 mb-8 max-w-lg leading-relaxed">
                All the tools needed for seamless collaboration ensuring your team stays in sync.
            </motion.p>

            {/* Call to Actions */}
            <motion.div variants={revealVariants} className="flex flex-wrap gap-4" ref={dropdownRef}>
                <div className="relative">
                    <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="btn-primary flex items-center gap-2 group"
                    >
                         <Plus className={`w-5 h-5 transition-transform duration-300 ${isDropdownOpen ? 'rotate-45' : ''}`} />
                         Create Project
                    </button>

                    {/* Dropdown */}
                    <AnimatePresence>
                        {isDropdownOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.95, x: 0 }}
                                animate={{ opacity: 1, y: 0, scale: 1, x: 0 }}
                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                className="absolute top-14 left-0 w-[320px] md:w-[400px] z-50 bg-white rounded-2xl shadow-xl border border-[var(--color-ink)]/5 p-2 origin-top-left"
                            >
                                 <EmptyState
                                    theme="light"
                                    title="New Project"
                                    variant="subtle"
                                    size="sm"
                                    description="Start your journey."
                                    icons={[<Code key="1" className="w-5 h-5"/>, <Rocket key="2" className="w-5 h-5"/>]}
                                    action={{ label: "Initialize Repo", onClick: () => console.log("Init"), icon: <ArrowRight className="w-3" /> }}
                                    className="bg-transparent"
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <button className="px-6 py-3 rounded-full border border-[var(--color-ink)]/10 text-[var(--color-ink)] font-medium hover:bg-[var(--color-ink)]/5 transition-colors">
                    Explore Docs
                </button>
            </motion.div>
        </motion.div>

        {/* Right Visuals */}
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[300px] md:h-[400px] bg-[var(--color-ink)]/5 rounded-3xl border border-[var(--color-ink)]/5 p-8 flex flex-col justify-center items-center overflow-hidden"
        >
             {/* Floating UI Elements matching reference */}
             <div className="absolute top-8 right-8 bg-white/80 backdrop-blur shadow-sm p-2 rounded-full border border-white/20 animate-pulse">
                <div className="w-8 h-2 bg-[var(--color-oceanic)] rounded-full" />
             </div>

             <div className="bg-white rounded-2xl shadow-xl border border-[var(--color-ink)]/5 p-4 flex items-center gap-4 z-10 w-full max-w-xs transform md:-translate-x-8 md:-translate-y-8">
                <AvatarStack />
                <div className="h-8 w-[1px] bg-gray-200" />
                <span className="text-2xl font-bold text-[var(--color-ink)]">5</span>
                <span className="text-xs text-[var(--color-ink)]/50 uppercase font-semibold tracking-wider">Active<br/>Users</span>
             </div>

             <FloatingCursor name="Sarah" color="#FF5F5F" x={100} y={-40} delay={0} />
             <FloatingCursor name="Dev3" color="#3B82F6" x={-80} y={60} delay={1.5} />
             
             {/* Abstract Badge */}
             <div className="absolute bottom-8 left-8 py-2 px-4 bg-[var(--color-cobalt)] text-white rounded-lg shadow-lg flex items-center gap-2 transform rotate-3">
                 <Rocket className="w-4 h-4" />
                 <span className="text-sm font-bold">Shipping v2.0</span>
             </div>
        </motion.div>

      </div>

      {/* --- Projects Grid --- */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project, i) => (
            <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group h-full"
            >
                <div className="h-full bg-white rounded-2xl p-6 border border-[var(--color-ink)]/5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1">
                    
                    {/* Icon Header */}
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br ${project.color} shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                        {project.icon}
                    </div>

                    <h3 className="text-lg font-bold text-[var(--color-ink)] mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                        {project.title}
                    </h3>

                    <p className="text-sm text-[var(--color-ink)]/60 mb-6 leading-relaxed line-clamp-3">
                        {project.description}
                    </p>

                    <div className="mt-auto pt-6 border-t border-[var(--color-ink)]/5 flex items-center justify-between text-xs font-medium text-[var(--color-ink)]/50">
                        <div className="flex items-center gap-4">
                            <span className="flex items-center gap-1.5 hover:text-[var(--color-nectarine)] transition-colors">
                                <Star className="w-3.5 h-3.5" />
                                {project.stars}
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Users className="w-3.5 h-3.5" />
                                {project.collaborators}
                            </span>
                        </div>
                        { i === 0 && (
                             <span className="text-[var(--color-cobalt)] flex items-center gap-1">
                                <Zap className="w-3 h-3" /> Trending
                             </span>
                        )}
                    </div>
                </div>
            </motion.div>
        ))}
      </div>

    </Section>
  );
}
