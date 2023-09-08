"use client";

import { RequestDetailsReturnResponse } from "@/app/api/weather/details/types/return";
import { Droplet, Eye, SunMedium, Thermometer, Wind } from "lucide-react";
import { WeatherDetailsToDayInfo } from "./WeatherDetailsToDayInfo";

interface WeatherDetailsToDayProps {
  data: RequestDetailsReturnResponse;
}

export function WeatherDetailsToDay({ data }: WeatherDetailsToDayProps) {
  return (
    <div className="grid h-full items-center divide-y divide-custom-gray-600">
      <WeatherDetailsToDayInfo
        icon={Thermometer}
        title="Sensação térmica"
        content={`${data.thermalSensation.toFixed(0)} ºc`}
        animation={{
          delay: 0.6,
        }}
      />
      <WeatherDetailsToDayInfo
        icon={Eye}
        title="Visibilidade"
        content={`${data.visibility.toFixed(0)} km`}
        animation={{
          delay: 0.8,
        }}
      />
      <WeatherDetailsToDayInfo
        icon={Wind}
        title="Velocidade do vento"
        content={`${data.windSpeed.toFixed(0)} km/h`}
        animation={{
          delay: 1,
        }}
      />
      <WeatherDetailsToDayInfo
        icon={Droplet}
        title="Umidade do ar"
        content={`${data.humidity} %`}
        animation={{
          delay: 1.2,
        }}
      />
      <WeatherDetailsToDayInfo
        icon={SunMedium}
        title="Índice UV"
        content={`${data.uvIndex}`}
        animation={{
          delay: 1.4,
        }}
      />
    </div>
  );
}
