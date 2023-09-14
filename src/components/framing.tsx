"use client";

import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion";

interface FramingProps extends HTMLMotionProps<"div"> {
  presence?: boolean;
}

export function Framing({ children, presence = true, ...rest }: FramingProps) {
  if (!presence) return <motion.div {...rest}>{children}</motion.div>;

  return (
    <AnimatePresence>
      <motion.div {...rest}>{children}</motion.div>
    </AnimatePresence>
  );
}
