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
      className="flex h-full w-full items-center justify-between"
    >
      <div className="flex items-center justify-start gap-5">
        <Icon className="stroke-custom-gray-500 h-9 w-9" />
        <span className="text-md text-custom-gray-200 font-bold">{title}</span>
      </div>

      <span className="text-custom-gray-200 text-2xl font-bold">{content}</span>
    </Framing>
  );
}
