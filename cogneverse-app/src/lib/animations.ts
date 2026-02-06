// Shared animation variants with proper TypeScript typing for framer-motion
import type { Variants, Transition } from "framer-motion";

// Shared transition for section reveals - from brandkit.md (Section Reveal: y:40, 0.7s, power2.out)
export const revealTransition: Transition = {
  duration: 0.7,
  ease: [0.33, 1, 0.68, 1] as const,
};

// Reveal animation variants
export const revealVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: revealTransition,
  },
};

// Item variants for staggered children (same as reveal but used in containers)
export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: revealTransition,
  },
};

// Container variants with stagger (accent delay: +120ms from brandkit)
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

// Fade in variants
export const fadeVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

// Scale in variants
export const scaleVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 },
  },
};

