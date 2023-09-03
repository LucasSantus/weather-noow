import { TRANSITION_DURATION } from "@/constants/globals";
import { Variants } from "framer-motion";
import { StructureAnimation } from "./types";

/**
 * Generates a bounce animation with horizontal dislocation.
 * @param delay The delay factor for the animation.
 * @param transition The duration of the animation transition.
 * @returns Animation variants object for bounce animation with horizontal dislocation.
 */
export function bounceAnimationHorizontalDislocate({
  delay = 1,
  transition = TRANSITION_DURATION,
}: StructureAnimation): Variants {
  return {
    initial: { x: 100, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        // damping: 20,
        duration: transition,
        delay: transition * delay,
      },
    },
    exit: { x: 100, opacity: 0 },
  };
}
