"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import { imageRevealVariant } from "@/lib/motion";

export interface ImageRevealProps extends Omit<HTMLMotionProps<"div">, "initial" | "whileInView"> {
  children: React.ReactNode;
  amount?: number;
  margin?: string;
  once?: boolean;
  className?: string;
}

export function ImageReveal({
  children,
  amount = 0.12,
  margin = "0px 0px -40px 0px",
  once = true,
  className = "",
  ...props
}: ImageRevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount, margin }}
      variants={imageRevealVariant}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
