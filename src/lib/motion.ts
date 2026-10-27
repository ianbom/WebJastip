import type { Transition, Variants } from "motion/react";

/**
 * Premium Luxury Editorial Motion Constants
 * Inspired by high-end editorial experiences (Cormorant / Jost / Ramz)
 */
export const LUXURY_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
export const LUXURY_EASE_IN_OUT: [number, number, number, number] = [0.65, 0, 0.35, 1];
export const LUXURY_EASE_GENTLE: [number, number, number, number] = [0.25, 1, 0.5, 1];

// Viewport configuration optimized for natural trigger timing
export const DEFAULT_VIEWPORT = {
  once: true,
  amount: 0.12, // triggers near 12% visibility without delay
  margin: "0px 0px -40px 0px", // triggers slightly before center
} as const;

export const EARLY_VIEWPORT = {
  once: true,
  amount: 0.06,
  margin: "0px 0px -20px 0px",
} as const;

export const CARD_VIEWPORT = {
  once: true,
  amount: 0.1,
  margin: "0px 0px -30px 0px",
} as const;

/**
 * Standard animation transitions
 */
export const transitions = {
  heroHeading: {
    duration: 0.7,
    ease: LUXURY_EASE,
  } satisfies Transition,
  heroText: {
    duration: 0.6,
    ease: LUXURY_EASE,
  } satisfies Transition,
  heroButton: {
    duration: 0.45,
    ease: LUXURY_EASE,
  } satisfies Transition,
  card: {
    duration: 0.6,
    ease: LUXURY_EASE,
  } satisfies Transition,
  image: {
    duration: 0.85,
    ease: LUXURY_EASE,
  } satisfies Transition,
  text: {
    duration: 0.55,
    ease: LUXURY_EASE,
  } satisfies Transition,
  subtle: {
    duration: 0.45,
    ease: LUXURY_EASE,
  } satisfies Transition,
};

/**
 * Reusable Motion Variants
 */
export const fadeUpVariant = (distance = 20, duration = 0.6, delay = 0): Variants => ({
  hidden: {
    opacity: 0,
    y: distance,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration,
      delay,
      ease: LUXURY_EASE,
    },
  },
});

export const fadeDownVariant = (distance = 16, duration = 0.5, delay = 0): Variants => ({
  hidden: {
    opacity: 0,
    y: -distance,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration,
      delay,
      ease: LUXURY_EASE,
    },
  },
});

export const fadeLeftVariant = (distance = 20, duration = 0.6, delay = 0): Variants => ({
  hidden: {
    opacity: 0,
    x: -distance,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration,
      delay,
      ease: LUXURY_EASE,
    },
  },
});

export const fadeRightVariant = (distance = 20, duration = 0.6, delay = 0): Variants => ({
  hidden: {
    opacity: 0,
    x: distance,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration,
      delay,
      ease: LUXURY_EASE,
    },
  },
});

export const softScaleVariant = (initialScale = 0.98, duration = 0.6, delay = 0): Variants => ({
  hidden: {
    opacity: 0,
    scale: initialScale,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration,
      delay,
      ease: LUXURY_EASE,
    },
  },
});

export const imageRevealVariant: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.035,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.85,
      ease: LUXURY_EASE,
    },
  },
};

export const staggerContainerVariant = (staggerChildren = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const staggerItemVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: LUXURY_EASE,
    },
  },
};

/**
 * Alternating variants for services / editorial lists
 */
export const alternatingItemVariants: Variants[] = [
  // Card 1: from slight left-bottom
  {
    hidden: { opacity: 0, y: 16, x: -12 },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.65, ease: LUXURY_EASE },
    },
  },
  // Card 2: from straight bottom
  {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: LUXURY_EASE },
    },
  },
  // Card 3: from slight right-bottom
  {
    hidden: { opacity: 0, y: 16, x: 12 },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.65, ease: LUXURY_EASE },
    },
  },
  // Card 4: from straight bottom
  {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: LUXURY_EASE },
    },
  },
];
