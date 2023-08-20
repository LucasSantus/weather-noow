import { LucideIcon } from "lucide-react";

interface WeatherDetailsToDaysForecastDayProps {
  day: string;
  icon: LucideIcon;
  weatherDescription: string;
  maxTemperature: number;
  minTemperature: number;
}

export function WeatherDetailsToDaysForecastDay({
  day,
  icon: Icon,
  weatherDescription,
  maxTemperature,
  minTemperature,
}: WeatherDetailsToDaysForecastDayProps) {
  return (
    <div className="flex h-full flex-col justify-evenly p-8">
      <span className="text-lg font-bold text-custom-gray-200">{day}</span>

      <Icon className="flex w-full items-center justify-center" size={90} />

      <div className="grid gap-2">
        <span className="text-md font-normal text-custom-gray-200">
          {weatherDescription}
        </span>
        <div className="flex justify-center gap-4">
          <span className="text-lg font-bold text-custom-gray-100">
            {minTemperature} ºc
          </span>
          <span className="text-lg font-bold text-custom-gray-400">
            {maxTemperature} ºc
          </span>
        </div>
      </div>
    </div>
  );
}
