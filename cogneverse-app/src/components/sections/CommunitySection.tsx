"use client";

import { revealVariants, containerVariants } from "@/lib/animations";
import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { ArrowRight, Award, MessageSquare, TrendingUp, Heart } from "lucide-react";


const communityStats = [
  { icon: Heart, value: "10,000+", label: "Active Members" },
  { icon: MessageSquare, value: "50,000+", label: "Discussions" },
  { icon: TrendingUp, value: "2,500+", label: "Projects Started" },
  { icon: Award, value: "100+", label: "Mentors" },
];

const members = [
  { initials: "SC", color: "var(--color-pink-eraser)", top: "10%", left: "5%" },
  { initials: "JW", color: "var(--color-oceanic)", top: "20%", left: "85%" },
  { initials: "PS", color: "var(--color-nectarine)", top: "45%", left: "15%" },
  { initials: "AK", color: "var(--color-cobalt)", top: "60%", left: "75%" },
  { initials: "MB", color: "var(--color-oceanic)", top: "75%", left: "40%" },
  { initials: "TL", color: "var(--color-pink-eraser)", top: "15%", left: "45%" },
  { initials: "RG", color: "var(--color-nectarine)", top: "80%", left: "10%" },
  { initials: "NK", color: "var(--color-cobalt)", top: "35%", left: "90%" },
];

export function CommunitySection() {
  return (
    <Section id="community">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left: Network Visualization */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={revealVariants}
          className="relative h-80 lg:h-96 order-2 lg:order-1"
        >
          {/* Connection lines */}
          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--color-oceanic)" stopOpacity="0.2" />
                <stop offset="100%" stopColor="var(--color-cobalt)" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            <line x1="10%" y1="15%" x2="50%" y2="20%" stroke="url(#lineGradient)" strokeWidth="1" />
            <line x1="50%" y1="20%" x2="88%" y2="25%" stroke="url(#lineGradient)" strokeWidth="1" />
            <line x1="20%" y1="50%" x2="50%" y2="20%" stroke="url(#lineGradient)" strokeWidth="1" />
            <line x1="80%" y1="62%" x2="50%" y2="20%" stroke="url(#lineGradient)" strokeWidth="1" />
            <line x1="45%" y1="78%" x2="20%" y2="50%" stroke="url(#lineGradient)" strokeWidth="1" />
            <line x1="45%" y1="78%" x2="80%" y2="62%" stroke="url(#lineGradient)" strokeWidth="1" />
          </svg>

          {/* Member avatars */}
          {members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="absolute w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold shadow-lg cursor-pointer hover:scale-110 transition-transform animate-float"
              style={{
                backgroundColor: member.color,
                top: member.top,
                left: member.left,
                animationDelay: `${index * 0.5}s`,
                fontSize: "var(--text-small)",
              }}
            >
              {member.initials}
            </motion.div>
          ))}

          {/* Central hub */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gradient-to-br from-[var(--color-oceanic)] to-[var(--color-cobalt)] flex items-center justify-center shadow-xl">
            <span className="text-[var(--color-paper)] text-2xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
              C
            </span>
          </div>
        </motion.div>

        {/* Right: Content */}
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
          className="order-1 lg:order-2"
        >
          <motion.span
            variants={revealVariants}
            className="text-[var(--color-nectarine)] uppercase tracking-wider mb-4 block font-medium"
            style={{ fontSize: "var(--text-small)" }}
          >
            Community
          </motion.span>
          
          {/* Title from copywriting.md */}
          <motion.h2
            variants={revealVariants}
            className="text-[var(--color-ink)] mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            A Network of{" "}
            <span
              className="text-[var(--color-cobalt)]"
              style={{ fontFamily: "var(--font-script)" }}
            >
              Innovators
            </span>
          </motion.h2>
          
          {/* Description from copywriting.md */}
          <motion.p
            variants={revealVariants}
            className="text-[var(--color-ink)]/70 mb-8"
            style={{ fontSize: "var(--text-body-lg)", lineHeight: "var(--leading-relaxed)" }}
          >
            Become part of a global network of students, professionals, researchers, and founders
            working on meaningful technology. Grow your profile, build credibility, and connect
            with opportunity.
          </motion.p>

          {/* Stats Grid */}
          <motion.div variants={revealVariants} className="grid grid-cols-2 gap-6 mb-8">
            {communityStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--color-oceanic)]/10 flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-[var(--color-oceanic)]" />
                </div>
                <div>
                  <div
                    className="text-xl font-bold text-[var(--color-ink)]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-[var(--color-ink)]/50" style={{ fontSize: "var(--text-small)" }}>
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA from copywriting.md */}
          <motion.div variants={revealVariants}>
            <a href="#" className="btn-primary">
              Become a Member
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
