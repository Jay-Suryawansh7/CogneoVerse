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



// Tech Stack Section - Marquee Style
import Marquee from "@/components/ui/marquee";

const technologies = [
  // Databases
  { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/3178C6" },
  { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
  { name: "Redis", icon: "https://cdn.simpleicons.org/redis/DC382D" },
  { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
  { name: "Cassandra", icon: "https://cdn.simpleicons.org/apachecassandra/1287B1" },
  { name: "Supabase", icon: "https://cdn.simpleicons.org/supabase/3ECF8E" },
  
  // JS/Frameworks
  { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Next.js", icon: "https://cdn.simpleicons.org/next.js/000000" },
  { name: "Vue.js", icon: "https://cdn.simpleicons.org/vue.js/4FC08D" },
  { name: "Svelte", icon: "https://cdn.simpleicons.org/svelte/FF3E00" },
  { name: "Node.js", icon: "https://cdn.simpleicons.org/node.js/5FA04E" },
  { name: "Express", icon: "https://cdn.simpleicons.org/express/000000" },
  { name: "NestJS", icon: "https://cdn.simpleicons.org/nestjs/E0234E" },
  
  // Python
  { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
  { name: "Django", icon: "https://cdn.simpleicons.org/django/092E20" },
  { name: "Flask", icon: "https://cdn.simpleicons.org/flask/000000" },
  { name: "FastAPI", icon: "https://cdn.simpleicons.org/fastapi/009688" },
  { name: "Pandas", icon: "https://cdn.simpleicons.org/pandas/150458" },
  
  // Languages & Others
  { name: "Go", icon: "https://cdn.simpleicons.org/go/00ADD8" },
  { name: "Rust", icon: "https://cdn.simpleicons.org/rust/000000" },
  { name: "Dart", icon: "https://cdn.simpleicons.org/dart/0175C2" },
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
  { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
  { name: "Kubernetes", icon: "https://cdn.simpleicons.org/kubernetes/326CE5" },
];

export function TechStackSection() {
  const firstRow = technologies.slice(0, technologies.length / 2);
  const secondRow = technologies.slice(technologies.length / 2);

  return (
    <Section id="techstack" className="py-20 overflow-hidden bg-[var(--color-paper)]">
       <div className="container mx-auto px-4 mb-12 text-center">
            <h2 
                className="text-3xl md:text-5xl font-bold text-[var(--color-ink)] mb-6"
                style={{ fontFamily: "var(--font-display)" }}
            >
                Powered by Modern Tech
            </h2>
            <p className="text-[var(--color-ink)]/70 text-lg max-w-2xl mx-auto">
                Our ecosystem is built on a robust, scalable foundation of industry-leading technologies.
            </p>
        </div>

      <div className="relative flex flex-col gap-8">
        <Marquee pauseOnHover className="[--duration:50s]">
          {firstRow.map((tech) => (
            <TechCard key={tech.name} {...tech} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:50s]">
          {secondRow.map((tech) => (
            <TechCard key={tech.name} {...tech} />
          ))}
        </Marquee>
        
        {/* Gradients to fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[var(--color-paper)] dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[var(--color-paper)] dark:from-background"></div>
      </div>
    </Section>
  );
}

function TechCard({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="flex items-center gap-3 px-6 py-3 bg-white border border-[var(--color-ink)]/10 rounded-full shadow-sm hover:shadow-md transition-shadow cursor-default mx-2">
      <img src={icon} alt={name} className="w-6 h-6 object-contain" />
      <span className="text-sm font-semibold text-[var(--color-ink)]">{name}</span>
    </div>
  );
}

