import {
  CloudRainWind,
  Droplet,
  SunMedium,
  Thermometer,
  Wind,
} from "lucide-react";
import { WeatherDetailsToDayInfo } from "./WeatherDetailsToDayInfo";

interface WeatherDetailsToDayProps {}

export function WeatherDetailsToDay({}: WeatherDetailsToDayProps) {
  return (
    <div className="grid h-full items-center divide-y divide-custom-gray-600">
      <WeatherDetailsToDayInfo
        icon={Thermometer}
        title="Sensação térmica"
        content="26ºc"
      />
      <WeatherDetailsToDayInfo
        icon={CloudRainWind}
        title="Probabilidade de chuva"
        content="0%"
      />
      <WeatherDetailsToDayInfo
        icon={Wind}
        title="Velocidade do vento"
        content="8 km/h"
      />
      <WeatherDetailsToDayInfo
        icon={Droplet}
        title="Umidade do ar"
        content="40%"
      />
      <WeatherDetailsToDayInfo icon={SunMedium} title="Índice UV" content="5" />
    </div>
  );
}
