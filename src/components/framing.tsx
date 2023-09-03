"use client";

import { HTMLMotionProps, motion } from "framer-motion";

interface FramingProps extends HTMLMotionProps<"div"> {}

export function Framing({ children, ...rest }: FramingProps) {
  return <motion.div {...rest}>{children}</motion.div>;
}
