import { TRANSITION_DURATION } from "@/constants/globals";
import { Variants } from "framer-motion";
import { StructureAnimation } from "./types";

/**
 * Defines an ease-in-out animation scale variant for Framer Motion.
 * @param delay The delay factor for the animation.
 * @param transition The transition duration for the animation.
 * @returns The variants object for the ease-in-out animation scale.
 */
export function easeInOutAnimationScale({
  delay = 1,
  transition = TRANSITION_DURATION,
}: StructureAnimation): Variants {
  return {
    initial: {
      opacity: 0,
      scale: 0.5,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: transition,
        delay: transition * delay,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.5,
      transition: {
        duration: transition,
        delay: transition * delay,
      },
    },
  };
}
