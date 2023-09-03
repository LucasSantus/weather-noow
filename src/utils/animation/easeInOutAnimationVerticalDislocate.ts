import { TRANSITION_DURATION } from "@/constants/globals";
import { Variants } from "framer-motion";
import { StructureAnimation } from "./types";

/**
 * Defines an ease-in-out animation for vertical dislocation using framer-motion.
 * @param delay The delay factor for the animation.
 * @param transition The duration of the animation transition.
 * @returns The variants object representing the animation for framer-motion.
 */
export function easeInOutAnimationVerticalDislocate({
  delay = 1,
  transition = TRANSITION_DURATION,
}: StructureAnimation): Variants {
  return {
    initial: {
      opacity: 0,
      y: 30,
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: transition,
        delay: transition * delay,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      y: 30,
      transition: {
        duration: transition,
        delay: transition * delay,
      },
    },
  };
}
