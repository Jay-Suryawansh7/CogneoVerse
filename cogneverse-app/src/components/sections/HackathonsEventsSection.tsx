"use client";

import { revealVariants, containerVariants } from "@/lib/animations";
import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/layout/Section";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, MapPin, Trophy, Timer } from "lucide-react";


const hackathons = [
  {
    title: "AI Innovation Challenge",
    description: "Build the next breakthrough AI application in 48 hours.",
    date: "March 15-17, 2026",
    location: "Virtual + SF Bay Area",
    prize: "$50,000",
    participants: "500+",
    status: "Registering",
    image: "🏆",
  },
  {
    title: "ClimaTech Hack",
    description: "Technology solutions for climate change and sustainability.",
    date: "April 5-7, 2026",
    location: "Virtual Global",
    prize: "$25,000",
    participants: "300+",
    status: "Coming Soon",
    image: "🌍",
  },
  {
    title: "HealthTech Buildathon",
    description: "Revolutionize healthcare with innovative tech solutions.",
    date: "May 10-12, 2026",
    location: "Virtual + Boston",
    prize: "$35,000",
    participants: "400+",
    status: "Coming Soon",
    image: "🏥",
  },
];

export function HackathonsSection() {
  return (
    <Section id="hackathons" variant="dark" withNoise>
      {/* Title and Description from copywriting.md */}
      <SectionHeader
        title="Build Under Pressure. Innovate Faster."
        subtitle="Participate in online and offline hackathons focused on solving real-world challenges. Collaborate, compete, and showcase your skills to industry leaders."
        light
      />

      <div className="grid md:grid-cols-3 gap-6">
        {hackathons.map((hackathon, index) => (
          <motion.div
            key={hackathon.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={revealVariants}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-gradient-to-b from-[var(--color-paper)]/10 to-transparent rounded-2xl p-6 border border-[var(--color-paper)]/10 hover:border-[var(--color-nectarine)]/50 transition-all card-hover"
            style={{ borderRadius: "12px" }}
          >
            {/* Status Badge */}
            <Badge
              className={`absolute top-4 right-4 ${
                hackathon.status === "Registering"
                  ? "bg-green-500 text-white"
                  : "bg-[var(--color-paper)]/20 text-[var(--color-paper)]"
              }`}
            >
              {hackathon.status}
            </Badge>

            {/* Icon */}
            <div className="text-5xl mb-4">{hackathon.image}</div>

            {/* Title */}
            <h4
              className="text-xl font-bold text-[var(--color-paper)] mb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {hackathon.title}
            </h4>

            <p
              className="text-[var(--color-paper)]/60 mb-4"
              style={{ fontSize: "var(--text-small)" }}
            >
              {hackathon.description}
            </p>

            {/* Details */}
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-[var(--color-paper)]/70" style={{ fontSize: "var(--text-small)" }}>
                <Calendar className="w-4 h-4 text-[var(--color-nectarine)]" />
                {hackathon.date}
              </div>
              <div className="flex items-center gap-2 text-[var(--color-paper)]/70" style={{ fontSize: "var(--text-small)" }}>
                <MapPin className="w-4 h-4 text-[var(--color-nectarine)]" />
                {hackathon.location}
              </div>
              <div className="flex items-center gap-2 text-[var(--color-paper)]/70" style={{ fontSize: "var(--text-small)" }}>
                <Trophy className="w-4 h-4 text-[var(--color-nectarine)]" />
                Prize Pool: {hackathon.prize}
              </div>
            </div>

            {/* CTA */}
            <button
              className="w-full btn-ghost text-[var(--color-paper)] border-[var(--color-paper)]/30 hover:bg-[var(--color-nectarine)] hover:text-[var(--color-ink)] hover:border-[var(--color-nectarine)]"
            >
              {hackathon.status === "Registering" ? "Register Now" : "Get Notified"}
            </button>
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
          Join Hackathons
          <ArrowRight className="ml-2 w-4 h-4" />
        </a>
      </motion.div>
    </Section>
  );
}


// Events Section - From copywriting.md
export function EventsSection() {
  const events = [
    {
      title: "AI Research Symposium",
      type: "Conference",
      date: "Feb 28, 2026",
      time: "10:00 AM PST",
    },
    {
      title: "React + Next.js Deep Dive",
      type: "Workshop",
      date: "Mar 5, 2026",
      time: "2:00 PM EST",
    },
    {
      title: "Startup Pitch Night",
      type: "Networking",
      date: "Mar 12, 2026",
      time: "6:00 PM PST",
    },
    {
      title: "Kubernetes for AI Workloads",
      type: "Workshop",
      date: "Mar 20, 2026",
      time: "11:00 AM EST",
    },
  ];

  return (
    <Section id="events">
      {/* Title and Description from copywriting.md */}
      <SectionHeader
        title="Connect. Learn. Lead."
        subtitle="Join technical workshops, product demos, research talks, and community meetups. Learn directly from practitioners and pioneers."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {events.map((event, index) => (
          <motion.div
            key={event.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
            transition={{ delay: index * 0.1 }}
            className="group bg-white p-5 rounded-xl shadow-md border border-[var(--color-ink)]/5 card-hover"
            style={{ borderRadius: "12px" }}
          >
            <span className="btn-secondary mb-3 inline-block">
              {event.type}
            </span>
            <h4
              className="font-semibold text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-cobalt)] transition-colors"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {event.title}
            </h4>
            <div className="flex items-center gap-2 text-[var(--color-ink)]/50" style={{ fontSize: "var(--text-small)" }}>
              <Calendar className="w-3.5 h-3.5" />
              {event.date}
            </div>
            <div className="flex items-center gap-2 text-[var(--color-ink)]/50 mt-1" style={{ fontSize: "var(--text-small)" }}>
              <Timer className="w-3.5 h-3.5" />
              {event.time}
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
        className="text-center mt-10"
      >
        <a href="#" className="btn-ghost">
          View Events
          <ArrowRight className="ml-2 w-4 h-4" />
        </a>
      </motion.div>
    </Section>
  );
}
