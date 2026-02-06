"use client";

import { revealVariants, containerVariants } from "@/lib/animations";
import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/layout/Section";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MapPin, Briefcase, Clock } from "lucide-react";


const jobs = [
  {
    title: "Senior ML Engineer",
    department: "AI Platform",
    location: "San Francisco, CA",
    type: "Full-time",
    remote: true,
  },
  {
    title: "Full-Stack Developer",
    department: "Product",
    location: "New York, NY",
    type: "Full-time",
    remote: true,
  },
  {
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Austin, TX",
    type: "Full-time",
    remote: true,
  },
  {
    title: "UX/UI Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    remote: true,
  },
];

export function CareersSection() {
  return (
    <Section id="careers">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
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
            Careers
          </motion.span>
          
          {/* Title from copywriting.md */}
          <motion.h2
            variants={revealVariants}
            className="text-[var(--color-ink)] mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Build Your Career{" "}
            <span
              className="text-[var(--color-cobalt)]"
              style={{ fontFamily: "var(--font-script)" }}
            >
              With Us
            </span>
          </motion.h2>
          
          {/* Description from copywriting.md */}
          <motion.p
            variants={revealVariants}
            className="text-[var(--color-ink)]/70 mb-8"
            style={{ fontSize: "var(--text-body-lg)", lineHeight: "var(--leading-relaxed)" }}
          >
            Join our core team or partner organizations through internships, fellowships,
            and full-time roles. Work on real products with real impact.
          </motion.p>
          
          {/* CTA from copywriting.md */}
          <motion.div variants={revealVariants}>
            <a href="#" className="btn-primary">
              View Openings
              <Briefcase className="ml-2 w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Job Listings */}
        <div className="space-y-4">
          {jobs.map((job, index) => (
            <motion.div
              key={job.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealVariants}
              transition={{ delay: index * 0.1 }}
              className="group bg-white p-5 rounded-xl shadow-md border border-[var(--color-ink)]/5 card-hover cursor-pointer"
              style={{ borderRadius: "12px" }}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h4
                    className="font-semibold text-[var(--color-ink)] group-hover:text-[var(--color-cobalt)] transition-colors"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {job.title}
                  </h4>
                  <p className="text-[var(--color-ink)]/50 mt-1" style={{ fontSize: "var(--text-small)" }}>
                    {job.department}
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-[var(--color-ink)]/30 group-hover:text-[var(--color-cobalt)] group-hover:translate-x-1 transition-all" />
              </div>
              <div className="flex items-center gap-4 mt-4 text-[var(--color-ink)]/50" style={{ fontSize: "var(--text-small)" }}>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {job.location}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {job.type}
                </span>
                {job.remote && (
                  <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full" style={{ fontSize: "var(--text-small)" }}>
                    Remote OK
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}


// Partnerships Section - From copywriting.md
export function PartnershipsSection() {
  const partners = [
    "Google", "Microsoft", "AWS", "NVIDIA", "Meta", "OpenAI",
    "Stanford", "MIT", "Berkeley", "Harvard",
  ];

  return (
    <Section id="partnerships" variant="accent">
      {/* Title and Description from copywriting.md */}
      <SectionHeader
        title="Partner With Purpose"
        subtitle="We collaborate with universities, startups, enterprises, and research institutions to scale innovation. Let's build the future together."
      />

      {/* Partner Logos */}
      <div className="flex flex-wrap justify-center gap-8 mb-12">
        {partners.map((partner, index) => (
          <motion.div
            key={partner}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="px-6 py-4 bg-white rounded-xl shadow-md border border-[var(--color-ink)]/5 text-[var(--color-ink)]/40 font-semibold hover:text-[var(--color-oceanic)] hover:shadow-lg transition-all card-hover"
            style={{ fontFamily: "var(--font-display)", borderRadius: "12px" }}
          >
            {partner}
          </motion.div>
        ))}
      </div>

      {/* CTA from copywriting.md */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={revealVariants}
        className="text-center"
      >
        <a href="#" className="btn-primary">
          Become a Partner
          <ArrowRight className="ml-2 w-4 h-4" />
        </a>
      </motion.div>
    </Section>
  );
}
