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
      className="flex h-full w-full flex-col justify-evenly rounded-lg border"
    >
      <span className="text-lg font-bold capitalize text-custom-gray-200">
        {day}
      </span>

      <Icon className="flex w-full items-center justify-center" size={90} />

      <div className="grid gap-2">
        <div className="flex flex-col justify-center gap-4 md:flex-row">
          <span className="text-lg font-bold text-custom-gray-100">
            {minTemperature} ºc
          </span>
          <span className="text-lg font-bold text-custom-gray-400">
            {maxTemperature} ºc
          </span>
        </div>
      </div>
    </Framing>
  );
}
