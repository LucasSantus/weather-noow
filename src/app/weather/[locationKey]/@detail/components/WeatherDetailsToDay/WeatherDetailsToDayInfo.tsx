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
      className="flex h-full w-full flex-col items-center justify-center py-4 xs:flex-row xs:justify-between sm:py-2"
    >
      <div className="flex items-center justify-start gap-5">
        <Icon className="h-9 w-9 stroke-custom-gray-500" />
        <span className="text-md font-bold text-custom-gray-200">{title}</span>
      </div>

      <span className="text-2xl font-bold text-custom-gray-200">{content}</span>
    </Framing>
  );
}
