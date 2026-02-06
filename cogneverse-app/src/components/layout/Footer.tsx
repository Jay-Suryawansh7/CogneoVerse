"use client";

import Link from "next/link";
import { Twitter, Github, Linkedin, Youtube } from "lucide-react";

// Quick Links from copywriting.md
const footerLinks = {
  product: [
    { label: "Projects", href: "#projects" },
    { label: "Products", href: "#products" },
    { label: "Academy", href: "#academy" },
    { label: "Resources", href: "#resources" },
  ],
  community: [
    { label: "Network", href: "#community" },
    { label: "Teams", href: "#teams" },
    { label: "Events", href: "#events" },
    { label: "Hackathons", href: "#hackathons" },
  ],
  company: [
    { label: "About", href: "#about" },
    { label: "Careers", href: "#careers" },
    { label: "Partners", href: "#partnerships" },
    { label: "Support", href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookies", href: "#" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export function Footer() {
  return (
    // Dark Mode Footer from brandkit: Background Oceanic, Text Paper, Accent Nectarine
    <footer className="bg-[var(--color-onyx)] text-[var(--color-paper)]">
      <div className="container-custom py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span
                className="text-2xl font-bold text-[var(--color-paper)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Cogneverse
              </span>
            </Link>
            {/* Description from copywriting.md */}
            <p
              className="text-[var(--color-paper)]/60 mb-6 max-w-xs"
              style={{ fontSize: "var(--text-small)", lineHeight: "var(--leading-relaxed)" }}
            >
              Cogneverse is an open innovation ecosystem empowering the next generation of technology leaders.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-[var(--color-paper)]/10 flex items-center justify-center hover:bg-[var(--color-nectarine)] hover:text-[var(--color-ink)] transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4
              className="font-semibold text-[var(--color-paper)] mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Product
            </h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[var(--color-paper)]/60 hover:text-[var(--color-nectarine)] transition-colors"
                    style={{ fontSize: "var(--text-small)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Links */}
          <div>
            <h4
              className="font-semibold text-[var(--color-paper)] mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Community
            </h4>
            <ul className="space-y-3">
              {footerLinks.community.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[var(--color-paper)]/60 hover:text-[var(--color-nectarine)] transition-colors"
                    style={{ fontSize: "var(--text-small)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4
              className="font-semibold text-[var(--color-paper)] mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[var(--color-paper)]/60 hover:text-[var(--color-nectarine)] transition-colors"
                    style={{ fontSize: "var(--text-small)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4
              className="font-semibold text-[var(--color-paper)] mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[var(--color-paper)]/60 hover:text-[var(--color-nectarine)] transition-colors"
                    style={{ fontSize: "var(--text-small)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[var(--color-paper)]/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[var(--color-paper)]/40" style={{ fontSize: "var(--text-small)" }}>
            © {new Date().getFullYear()} Cogneverse. All rights reserved.
          </p>
          <p className="text-[var(--color-paper)]/40" style={{ fontSize: "var(--text-small)" }}>
            Built with{" "}
            <span className="text-[var(--color-nectarine)]">♥</span> for innovators worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
}
