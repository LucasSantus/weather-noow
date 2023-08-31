import { Check } from "lucide-react";
import { WeatherDetailsToDaysForecastDay } from "./WeatherDetailsToDaysForecastDay";

interface WeatherDetailsToDaysForecastProps {}

export function WeatherDetailsToDaysForecast({}: WeatherDetailsToDaysForecastProps) {
  return (
    <div className="grid h-full grid-cols-5 text-center">
      <WeatherDetailsToDaysForecastDay
        day="Amanhã"
        icon={Check}
        weatherDescription="Ensolarado"
        maxTemperature={32}
        minTemperature={26}
      />

      <WeatherDetailsToDaysForecastDay
        day="Amanhã"
        icon={Check}
        weatherDescription="Ensolarado"
        maxTemperature={32}
        minTemperature={26}
      />

      <WeatherDetailsToDaysForecastDay
        day="Amanhã"
        icon={Check}
        weatherDescription="Ensolarado"
        maxTemperature={32}
        minTemperature={26}
      />

      <WeatherDetailsToDaysForecastDay
        day="Amanhã"
        icon={Check}
        weatherDescription="Ensolarado"
        maxTemperature={32}
        minTemperature={26}
      />

      <WeatherDetailsToDaysForecastDay
        day="Amanhã"
        icon={Check}
        weatherDescription="Ensolarado"
        maxTemperature={32}
        minTemperature={26}
      />
    </div>
  );
}
