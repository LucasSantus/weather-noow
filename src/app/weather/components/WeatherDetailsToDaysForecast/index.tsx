import { WeatherDetailsToDaysForecastDay } from "./WeatherDetailsToDaysForecastDay";

interface WeatherDetailsToDaysForecastProps {}

export function WeatherDetailsToDaysForecast({}: WeatherDetailsToDaysForecastProps) {
  return (
    <div className="grid h-full grid-cols-5 text-center">
      <WeatherDetailsToDaysForecastDay />
    </div>
  );
}
