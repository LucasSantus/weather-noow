import { TRANSITION_DURATION } from "@/constants/globals";
import { Variants } from "framer-motion";
import { StructureAnimation } from "./types";

/**
 * Generates a bounce animation with vertical dislocation.
 * @param delay The delay factor for the animation.
 * @param transition The duration of the animation transition.
 * @returns Animation variants object for bounce animation with vertical dislocation.
 */
export function bounceAnimationVerticalDislocate({
  delay = 1,
  transition = TRANSITION_DURATION,
}: StructureAnimation): Variants {
  return {
    initial: { y: 100, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 5,
        duration: transition,
        delay: transition * delay,
      },
    },
    exit: { y: 100, opacity: 0 },
  };
}
