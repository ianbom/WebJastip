"use client";

import { motion, type HTMLMotionProps, type Variants } from "motion/react";
import {
  staggerContainerVariant,
  staggerItemVariant,
} from "@/lib/motion";

export interface StaggerContainerProps extends Omit<HTMLMotionProps<"div">, "initial" | "whileInView"> {
  children: React.ReactNode;
  staggerChildren?: number;
  delayChildren?: number;
  amount?: number;
  margin?: string;
  once?: boolean;
  animateOnMount?: boolean;
  className?: string;
}

export function StaggerContainer({
  children,
  staggerChildren = 0.08,
  delayChildren = 0,
  amount = 0.1,
  margin = "0px 0px -40px 0px",
  once = true,
  animateOnMount = false,
  className = "",
  ...props
}: StaggerContainerProps) {
  const variants = staggerContainerVariant(staggerChildren, delayChildren);

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
      viewport={{ once, amount, margin }}
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export interface StaggerItemProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  customVariants?: Variants;
  className?: string;
}

export function StaggerItem({
  children,
  customVariants,
  className = "",
  ...props
}: StaggerItemProps) {
  return (
    <motion.div
      variants={customVariants || staggerItemVariant}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
