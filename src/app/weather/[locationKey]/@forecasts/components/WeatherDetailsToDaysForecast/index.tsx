import { Check } from "lucide-react";
import { WeatherDetailsToDaysForecastDay } from "./WeatherDetailsToDaysForecastDay";

interface WeatherDetailsToDaysForecastProps {
  locationKey: string;
}

export function WeatherDetailsToDaysForecast({
  locationKey,
}: WeatherDetailsToDaysForecastProps) {
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
