import { cn } from "@/lib/utils";
import { bounceAnimationVerticalDislocate } from "@/utils/animation/bounceAnimationVerticalDislocate";
import { StructureAnimation } from "@/utils/animation/types";
import { PropsWithChildren } from "react";
import { Framing } from "./framing";

interface CardCoverProps extends PropsWithChildren {
  title?: string;
  className?: string;
  animation: StructureAnimation;
}

export function CardCover({
  children,
  title,
  className,
  animation,
}: CardCoverProps) {
  return (
    <Framing
      {...bounceAnimationVerticalDislocate({
        ...animation,
      })}
      className={cn(
        "h-full gap-4 rounded-lg bg-custom-gray-100 p-5 shadow-md dark:border dark:border-custom-gray-500 dark:bg-custom-gray-700",
        className,
      )}
    >
      {title && (
        <span className="text-base font-bold text-custom-gray-500/80 dark:font-medium dark:text-custom-gray-400">
          {title}
        </span>
      )}
      {children}
    </Framing>
  );
}
