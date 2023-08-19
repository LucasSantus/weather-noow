import { SnowNight } from "@/components/icons/SnowNight";

interface WeatherDetailsToDaysForecastDayProps {}

export function WeatherDetailsToDaysForecastDay({}: WeatherDetailsToDaysForecastDayProps) {
  return (
    <div className="flex h-full flex-col justify-around p-8">
      <span className="text-lg font-bold text-custom-gray-200">Amanhâ</span>

      <SnowNight className="flex w-full justify-center" />

      <div className="grid gap-2">
        <span className="text-md font-normal text-custom-gray-200">
          Temporal
        </span>
        <div className="flex justify-center gap-4">
          <span className="text-lg font-bold text-custom-gray-100">32ºc</span>
          <span className="text-lg font-bold text-custom-gray-400">26ºc</span>
        </div>
      </div>
    </div>
  );
}
