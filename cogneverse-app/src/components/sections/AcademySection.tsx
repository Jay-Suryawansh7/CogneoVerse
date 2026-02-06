"use client";

import { revealVariants, containerVariants } from "@/lib/animations";
import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/layout/Section";
import { Clock, Users, Star, BookOpen } from "lucide-react";


const courses = [
  {
    title: "Machine Learning Engineering",
    description: "From fundamentals to production-ready ML systems. Build real models, deploy at scale.",
    level: "Intermediate",
    duration: "12 weeks",
    students: "2,340",
    rating: "4.9",
    image: "🤖",
    tags: ["Python", "TensorFlow", "MLOps"],
  },
  {
    title: "Full-Stack Web Development",
    description: "Modern web development with React, Node.js, and cloud-native architecture.",
    level: "Beginner",
    duration: "16 weeks",
    students: "5,120",
    rating: "4.8",
    image: "🌐",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    title: "Blockchain Development",
    description: "Build decentralized applications, smart contracts, and Web3 integrations.",
    level: "Advanced",
    duration: "10 weeks",
    students: "1,890",
    rating: "4.7",
    image: "⛓️",
    tags: ["Solidity", "Ethereum", "DeFi"],
  },
  {
    title: "Robotics & Automation",
    description: "Design, program, and deploy autonomous systems using ROS and embedded systems.",
    level: "Intermediate",
    duration: "14 weeks",
    students: "1,560",
    rating: "4.8",
    image: "🦾",
    tags: ["ROS", "Python", "C++"],
  },
];

const levelColors: Record<string, string> = {
  Beginner: "bg-green-100 text-green-700",
  Intermediate: "bg-[var(--color-nectarine)]/20 text-[var(--color-ink)]",
  Advanced: "bg-[var(--color-pink-eraser)]/30 text-[var(--color-ink)]",
};

export function AcademySection() {
  return (
    <Section id="academy">
      {/* Title and Description from copywriting.md */}
      <SectionHeader
        title="Engineering Education for the Real World"
        subtitle="Industry-aligned courses, hands-on labs, and guided programs designed to make you job-ready and startup-ready. Learn by building, not by memorizing."
      />

      <div className="grid md:grid-cols-2 gap-6">
        {courses.map((course, index) => (
          <motion.div
            key={course.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={revealVariants}
            transition={{ delay: index * 0.1 }}
            className="group bg-white rounded-2xl shadow-lg border border-[var(--color-ink)]/5 overflow-hidden card-hover"
            style={{ borderRadius: "12px" }}
          >
            <div className="flex flex-col sm:flex-row">
              {/* Course Image/Icon */}
              <div className="sm:w-32 h-24 sm:h-auto bg-gradient-to-br from-[var(--color-oceanic)] to-[var(--color-cobalt)] flex items-center justify-center text-5xl flex-shrink-0">
                {course.image}
              </div>

              {/* Course Content */}
              <div className="flex-1 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={`font-medium px-2 py-0.5 rounded-full ${levelColors[course.level]}`}
                    style={{ fontSize: "var(--text-small)" }}
                  >
                    {course.level}
                  </span>
                  <span className="flex items-center gap-1 text-[var(--color-ink)]/50" style={{ fontSize: "var(--text-small)" }}>
                    <Star className="w-3 h-3 fill-[var(--color-nectarine)] text-[var(--color-nectarine)]" />
                    {course.rating}
                  </span>
                </div>

                <h4
                  className="text-lg font-bold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-cobalt)] transition-colors"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {course.title}
                </h4>

                <p
                  className="text-[var(--color-ink)]/60 mb-4 line-clamp-2"
                  style={{ fontSize: "var(--text-small)" }}
                >
                  {course.description}
                </p>

                {/* Tags - Using btn-secondary style */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {course.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-[var(--color-paper)] text-[var(--color-ink)]/70 px-2 py-0.5 rounded border border-[var(--color-ink)]/10"
                      style={{ fontSize: "var(--text-small)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Meta */}
                <div className="flex items-center gap-4 text-[var(--color-ink)]/50" style={{ fontSize: "var(--text-small)" }}>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5" />
                    {course.students} students
                  </span>
                </div>
              </div>
            </div>
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
        <a href="#" className="btn-primary">
          Explore Courses
          <BookOpen className="ml-2 w-4 h-4" />
        </a>
      </motion.div>
    </Section>
  );
}
