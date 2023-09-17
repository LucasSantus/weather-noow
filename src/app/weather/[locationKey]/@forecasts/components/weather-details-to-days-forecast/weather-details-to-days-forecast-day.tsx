import { Framing } from "@/components/framing";
import { Separator } from "@/components/ui/separator";
import { bounceAnimationVerticalDislocate } from "@/utils/animation/bounceAnimationVerticalDislocate";
import { StructureAnimation } from "@/utils/animation/types";
import { LucideIcon } from "lucide-react";

interface WeatherDetailsToDaysForecastDayProps {
  day: string;
  icon: LucideIcon;
  maxTemperature: number;
  minTemperature: number;
  description: string;
  animation: StructureAnimation;
}

export function WeatherDetailsToDaysForecastDay({
  day,
  icon: Icon,
  maxTemperature,
  minTemperature,
  description,
  animation,
}: WeatherDetailsToDaysForecastDayProps) {
  return (
    <Framing
      {...bounceAnimationVerticalDislocate({ ...animation })}
      className="flex h-full w-full flex-col justify-evenly rounded-lg border"
    >
      <span className="text-lg font-bold capitalize text-custom-gray-200">
        {day}
      </span>

      <div className="flex justify-center">
        <Icon className="flex items-center justify-center stroke-1 lg:h-14 lg:w-14 xl:h-20 xl:w-20" />
      </div>

      <span className="text-sm font-medium text-custom-gray-200">
        {description}
      </span>

      <div className="grid gap-2">
        <div className="flex flex-col-reverse justify-center xl:flex-row xl:gap-4">
          <span className="text-lg font-bold text-custom-gray-100">
            {minTemperature} ºc
          </span>
          <div className="flex justify-center xl:hidden">
            <Separator className="w-5" />
          </div>

          <span className="text-lg font-bold text-custom-gray-400">
            {maxTemperature} ºc
          </span>
        </div>
      </div>
    </Framing>
  );
}
