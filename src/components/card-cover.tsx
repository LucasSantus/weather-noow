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
        "bg-custom-gray-700 h-full gap-4 rounded-lg border p-5",
        className,
      )}
    >
      {title && (
        <span className="text-custom-gray-400 text-base font-medium">
          {title}
        </span>
      )}
      {children}
    </Framing>
  );
}
