"use client";

import { useMemo } from "react";
import { motion, type HTMLMotionProps, type Variants } from "motion/react";
import {
  fadeDownVariant,
  fadeLeftVariant,
  fadeRightVariant,
  fadeUpVariant,
  softScaleVariant,
  LUXURY_EASE,
} from "@/lib/motion";

export type RevealDirection = "up" | "down" | "left" | "right" | "scale" | "fade";

export interface ScrollRevealProps extends Omit<HTMLMotionProps<"div">, "initial" | "whileInView" | "animate"> {
  children: React.ReactNode;
  direction?: RevealDirection;
  distance?: number;
  delay?: number;
  duration?: number;
  amount?: number;
  margin?: string;
  once?: boolean;
  animateOnMount?: boolean;
  className?: string;
}

export function ScrollReveal({
  children,
  direction = "up",
  distance = 20,
  delay = 0,
  duration = 0.6,
  amount = 0.12,
  margin = "0px 0px -40px 0px",
  once = true,
  animateOnMount = false,
  className = "",
  ...props
}: ScrollRevealProps) {
  const variants: Variants = useMemo(() => {
    switch (direction) {
      case "up":
        return fadeUpVariant(distance, duration, delay);
      case "down":
        return fadeDownVariant(distance, duration, delay);
      case "left":
        return fadeLeftVariant(distance, duration, delay);
      case "right":
        return fadeRightVariant(distance, duration, delay);
      case "scale":
        return softScaleVariant(0.98, duration, delay);
      case "fade":
      default:
        return {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { duration, delay, ease: LUXURY_EASE },
          },
        };
    }
  }, [direction, distance, duration, delay]);

  const viewportConfig = useMemo(
    () => ({
      once,
      amount,
      margin,
    }),
    [once, amount, margin]
  );

  if (animateOnMount) {
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
