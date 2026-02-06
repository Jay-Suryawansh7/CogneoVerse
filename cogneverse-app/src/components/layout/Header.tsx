"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Academy", href: "#academy" },
  { label: "Resources", href: "#resources" },
  { label: "Community", href: "#community" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Header - From chain-of-prompts.md: Fixed position, z-index: 1000, 80px height (60px mobile) */}
      <header
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
          isScrolled
            ? "bg-[rgba(0,63,71,0.95)] backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
        style={{ height: isScrolled ? "70px" : "80px" }}
      >
        <div className="container-custom h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span
              className={`text-2xl font-bold transition-colors ${
                isScrolled ? "text-[var(--color-paper)]" : "text-[var(--color-paper)]"
              }`}
              style={{ fontFamily: "var(--font-display)" }}
            >
              Cogneverse
            </span>
          </Link>

          {/* Desktop Navigation - Horizontal nav with underline on hover from chain-of-prompts.md */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`font-medium transition-colors relative group ${
                  isScrolled
                    ? "text-[var(--color-paper)]/80 hover:text-[var(--color-paper)]"
                    : "text-[var(--color-paper)]/80 hover:text-[var(--color-paper)]"
                }`}
                style={{ fontSize: "var(--text-small)" }}
              >
                {item.label}
                {/* Underline on hover with accent color from chain-of-prompts.md */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--color-nectarine)] group-hover:w-full transition-all duration-200" />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA - From chain-of-prompts.md: padding 12px 28px, rounded 32px */}
          <div className="hidden lg:block">
            <Link
              href="#"
              className="btn-primary"
              style={{ padding: "12px 28px" }}
            >
              Start Building
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[var(--color-paper)]"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu - Full-screen overlay from chain-of-prompts.md */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-[var(--color-oceanic)] lg:hidden"
          >
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center justify-center h-full gap-8"
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-medium text-[var(--color-paper)] hover:text-[var(--color-nectarine)] transition-colors"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8"
              >
                <Link
                  href="#"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-primary"
                >
                  Start Building
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
