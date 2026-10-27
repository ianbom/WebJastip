"use client";

import { MotionConfig } from "motion/react";

interface MotionProviderProps {
  children: React.ReactNode;
}

/**
 * Global Motion Configuration Provider
 * Enforces reducedMotion="user" to automatically respect prefers-reduced-motion
 */
export default function MotionProvider({ children }: MotionProviderProps) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
