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
        "h-full gap-4 rounded-lg border bg-custom-gray-700 p-5",
        className,
      )}
    >
      {title && (
        <span className="text-base font-medium text-custom-gray-400">
          {title}
        </span>
      )}
      {children}
    </Framing>
  );
}
