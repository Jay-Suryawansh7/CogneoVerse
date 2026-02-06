"use client";

import { revealVariants, containerVariants } from "@/lib/animations";
import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/layout/Section";
import { ArrowRight, Clock, User, ArrowUpRight } from "lucide-react";


const blogPosts = [
  {
    title: "The Future of AI-Assisted Engineering",
    excerpt: "How AI copilots are transforming the way engineers write code, design systems, and solve complex problems.",
    author: "Sarah Chen",
    date: "Feb 2, 2026",
    readTime: "8 min read",
    category: "AI & ML",
    image: "🤖",
  },
  {
    title: "Building Resilient Microservices at Scale",
    excerpt: "Lessons learned from deploying hundreds of microservices in production environments.",
    author: "James Wilson",
    date: "Jan 28, 2026",
    readTime: "12 min read",
    category: "Architecture",
    image: "🏗️",
  },
  {
    title: "Web3 and the New Creator Economy",
    excerpt: "Exploring how blockchain technology is reshaping digital ownership and creative monetization.",
    author: "Priya Sharma",
    date: "Jan 20, 2026",
    readTime: "6 min read",
    category: "Blockchain",
    image: "⛓️",
  },
];

export function BlogSection() {
  return (
    <Section id="blog" variant="accent">
      {/* Title and Description from copywriting.md */}
      <SectionHeader
        title="Ideas, Insights, and Innovation"
        subtitle="Read deep dives, tutorials, case studies, and opinion pieces from our community and core team. Stay informed about emerging technologies and industry trends."
      />

      <div className="grid md:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <motion.article
            key={post.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
            transition={{ delay: index * 0.1 }}
            className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-[var(--color-ink)]/5 card-hover cursor-pointer"
            style={{ borderRadius: "12px" }}
          >
            {/* Image */}
            <div className="h-40 bg-gradient-to-br from-[var(--color-oceanic)] to-[var(--color-cobalt)] flex items-center justify-center text-6xl relative">
              {post.image}
              <span
                className="absolute top-4 left-4 font-medium bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-full"
                style={{ fontSize: "var(--text-small)" }}
              >
                {post.category}
              </span>
            </div>

            {/* Content */}
            <div className="p-6">
              <h4
                className="font-bold text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-cobalt)] transition-colors line-clamp-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {post.title}
              </h4>
              <p
                className="text-[var(--color-ink)]/60 mb-4 line-clamp-2"
                style={{ fontSize: "var(--text-small)" }}
              >
                {post.excerpt}
              </p>

              {/* Meta */}
              <div className="flex items-center justify-between text-[var(--color-ink)]/50" style={{ fontSize: "var(--text-small)" }}>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5" />
                    {post.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[var(--color-cobalt)]" />
              </div>
            </div>
          </motion.article>
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
          Read the Blog
          <ArrowRight className="ml-2 w-4 h-4" />
        </a>
      </motion.div>
    </Section>
  );
}


// Tech Stack Section - From copywriting.md
export function TechStackSection() {
  // Stack Categories from copywriting.md
  const techCategories = [
    {
      name: "Frontend",
      techs: ["React", "Next.js", "Tailwind CSS"],
    },
    {
      name: "Backend",
      techs: ["Node.js", "Python", "FastAPI"],
    },
    {
      name: "AI/ML",
      techs: ["PyTorch", "TensorFlow", "OpenAI APIs"],
    },
    {
      name: "DevOps",
      techs: ["Docker", "Kubernetes", "GitHub Actions"],
    },
    {
      name: "Cloud",
      techs: ["AWS", "GCP", "Vercel"],
    },
    {
      name: "Database",
      techs: ["PostgreSQL", "Redis", "MongoDB"],
    },
  ];

  return (
    <Section id="techstack">
      {/* Title and Description from copywriting.md */}
      <SectionHeader
        title="Built on Modern Engineering"
        subtitle="Cogneverse is powered by a scalable, secure, and high-performance technology stack."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {techCategories.map((category, index) => (
          <motion.div
            key={category.name}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-xl shadow-md border border-[var(--color-ink)]/5"
            style={{ borderRadius: "12px" }}
          >
            <h4
              className="font-semibold text-[var(--color-oceanic)] mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {category.name}
            </h4>
            <div className="flex flex-wrap gap-2">
              {category.techs.map((tech) => (
                <span
                  key={tech}
                  className="btn-secondary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
