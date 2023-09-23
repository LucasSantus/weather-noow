import { Framing } from "@/components/framing";
import { bounceAnimationHorizontalDislocate } from "@/utils/animation/bounceAnimationHorizontalDislocate";
import { StructureAnimation } from "@/utils/animation/types";
import { LucideIcon } from "lucide-react";

interface WeatherDetailsToDayInfoProps {
  icon: LucideIcon;
  title: string;
  content: string;
  animation: StructureAnimation;
}

export function WeatherDetailsToDayInfo({
  icon: Icon,
  title,
  content,
  animation,
}: WeatherDetailsToDayInfoProps) {
  return (
    <Framing
      {...bounceAnimationHorizontalDislocate({ ...animation })}
      className="flex h-full w-full flex-col items-center justify-center gap-1 py-2 sm:flex-row sm:justify-between"
    >
      <div className="flex flex-col items-center justify-start gap-1 sm:flex-row sm:gap-5">
        <Icon className="h-9 w-9 stroke-custom-gray-500 dark:stroke-custom-gray-500" />
        <span className="text-md font-medium text-muted-foreground dark:font-bold dark:text-custom-gray-200">
          {title}
        </span>
      </div>

      <span className="text-2xl font-medium text-muted-foreground dark:font-bold dark:text-custom-gray-200">
        {content}
      </span>
    </Framing>
  );
}
