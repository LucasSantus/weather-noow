import { Framing } from "@/components/framing";
import { bounceAnimationVerticalDislocate } from "@/utils/animation/bounceAnimationVerticalDislocate";
import { StructureAnimation } from "@/utils/animation/types";
import { LucideIcon } from "lucide-react";

interface WeatherDetailsToDaysForecastDayProps {
  day: string;
  icon: LucideIcon;
  maxTemperature: number;
  minTemperature: number;
  animation: StructureAnimation;
}

export function WeatherDetailsToDaysForecastDay({
  day,
  icon: Icon,
  maxTemperature,
  minTemperature,
  animation,
}: WeatherDetailsToDaysForecastDayProps) {
  return (
    <Framing
      {...bounceAnimationVerticalDislocate({ ...animation })}
      className="flex h-full flex-col justify-evenly p-8"
    >
      <span className="text-custom-gray-200 text-lg font-bold capitalize">
        {day}
      </span>

      <Icon className="flex w-full items-center justify-center" size={90} />

      <div className="grid gap-2">
        <div className="flex justify-center gap-4">
          <span className="text-custom-gray-100 text-lg font-bold">
            {minTemperature} ºc
          </span>
          <span className="text-custom-gray-400 text-lg font-bold">
            {maxTemperature} ºc
          </span>
        </div>
      </div>
    </Framing>
  );
}
