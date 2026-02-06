"use client";

import { cn } from "@/lib/utils";
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  ArrowUp,
  Send
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[var(--color-paper)] dark:bg-[var(--color-onyx)] pt-32 pb-10 overflow-hidden">
      <div className="container px-4 mx-auto relative z-10">
        
        {/* Newsletter Card */}
        <div className="bg-white dark:bg-[var(--color-oceanic)] rounded-[2rem] p-8 md:p-12 shadow-xl mb-24 border border-[var(--color-ink)]/5 dark:border-[var(--color-paper)]/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-oceanic)] dark:text-[var(--color-paper)] mb-2" style={{ fontFamily: "var(--font-display)" }}>
                Join our Global Digest
              </h3>
              <p className="text-[var(--color-ink)]/70 dark:text-[var(--color-paper)]/70 max-w-md">
                Join thousands of innovators shaping the future of technology. Get updates on new tools, hackathons, and research.
              </p>
            </div>
            
            <div className="w-full md:w-auto flex-1 max-w-lg">
              <form className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="email@company.com" 
                  className="w-full flex-1 px-6 py-4 rounded-full bg-[var(--color-paper)] dark:bg-[var(--color-onyx)] border border-[var(--color-ink)]/10 dark:border-[var(--color-paper)]/10 focus:outline-hidden focus:ring-2 focus:ring-[var(--color-nectarine)] transition-all"
                />
                <button 
                  type="button"
                  className="px-8 py-4 rounded-full bg-[var(--color-cobalt)] hover:bg-[var(--color-oceanic)] text-white font-medium transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
                >
                  Subscribe
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>

            <div className="flex items-center gap-4">
               <div className="flex gap-2">
                 {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                    <a key={i} href="#" className="w-10 h-10 rounded-full bg-[var(--color-ink)]/5 dark:bg-[var(--color-paper)]/10 flex items-center justify-center hover:bg-[var(--color-nectarine)] dark:hover:bg-[var(--color-nectarine)] hover:text-white transition-all group">
                      <Icon className="w-4 h-4 text-[var(--color-oceanic)] dark:text-[var(--color-paper)] group-hover:text-white" />
                    </a>
                  ))}
               </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6">
               <span className="text-3xl font-bold text-[var(--color-oceanic)] dark:text-[var(--color-paper)]" style={{ fontFamily: "var(--font-display)" }}>
                CogneoVerse
              </span>
            </Link>
            <p className="text-[var(--color-ink)]/70 dark:text-[var(--color-paper)]/70 mb-8 max-w-sm leading-relaxed">
              The world's leading open innovation ecosystem empowering the next generation of technology leaders. Trusted by builders globally.
            </p>
            
            <div className="flex gap-8">
              <div>
                <h4 className="font-bold text-sm uppercase tracking-wider text-[var(--color-oceanic)] dark:text-[var(--color-paper)] mb-2">Support</h4>
                <a href="mailto:support@cogneoverse.org" className="text-[var(--color-cobalt)] dark:text-[var(--color-nectarine)] font-medium hover:underline">
                  support@cogneoverse.org
                </a>
              </div>
              <div>
                <h4 className="font-bold text-sm uppercase tracking-wider text-[var(--color-oceanic)] dark:text-[var(--color-paper)] mb-2">Location</h4>
                <span className="text-[var(--color-ink)]/70 dark:text-[var(--color-paper)]/70">
                  San Francisco, CA
                </span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Products */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-[var(--color-ink)]/40 dark:text-[var(--color-paper)]/40 mb-6">Products</h4>
              <ul className="space-y-4">
                {["Web Builder", "CMS Pro", "Marketing AI", "E-commerce Engine", "Analytics Suite"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-[var(--color-oceanic)] dark:text-[var(--color-paper)] font-medium hover:text-[var(--color-cobalt)] dark:hover:text-[var(--color-nectarine)] transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-[var(--color-ink)]/40 dark:text-[var(--color-paper)]/40 mb-6">Solutions</h4>
              <ul className="space-y-4">
                {["Small Business", "Agencies", "Enterprise", "Non-Profits", "Startups", "Education"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-[var(--color-oceanic)] dark:text-[var(--color-paper)] font-medium hover:text-[var(--color-cobalt)] dark:hover:text-[var(--color-nectarine)] transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-[var(--color-ink)]/40 dark:text-[var(--color-paper)]/40 mb-6">Resources</h4>
              <ul className="space-y-4">
                {["Help Center", "Community Forum", "Developer Portal", "System Status", "Video Tutorials", "Case Studies"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-[var(--color-oceanic)] dark:text-[var(--color-paper)] font-medium hover:text-[var(--color-cobalt)] dark:hover:text-[var(--color-nectarine)] transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Marketplace */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-[var(--color-ink)]/40 dark:text-[var(--color-paper)]/40 mb-6">Marketplace</h4>
              <ul className="space-y-4">
                {["App Directory", "Theme Store", "Expert Services", "Partner Program", "Template Gallery", "Affiliate"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-[var(--color-oceanic)] dark:text-[var(--color-paper)] font-medium hover:text-[var(--color-cobalt)] dark:hover:text-[var(--color-nectarine)] transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[var(--color-ink)]/10 dark:border-[var(--color-paper)]/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-[var(--color-ink)]/50 dark:text-[var(--color-paper)]/50 font-medium">
            © 2025 COGNEOVERSE INC. ALL RIGHTS RESERVED.
          </p>
          
          <div className="flex gap-8 text-xs font-bold uppercase tracking-wider text-[var(--color-ink)]/50 dark:text-[var(--color-paper)]/50">
            <Link href="#" className="hover:text-[var(--color-oceanic)] dark:hover:text-[var(--color-paper)] transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-[var(--color-oceanic)] dark:hover:text-[var(--color-paper)] transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-[var(--color-oceanic)] dark:hover:text-[var(--color-paper)] transition-colors">SLA</Link>
            <Link href="#" className="hover:text-[var(--color-oceanic)] dark:hover:text-[var(--color-paper)] transition-colors">Security</Link>
          </div>

          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm font-bold text-[var(--color-oceanic)] dark:text-[var(--color-paper)] hover:text-[var(--color-cobalt)] dark:hover:text-[var(--color-nectarine)] transition-colors"
          >
            Back to Top
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
