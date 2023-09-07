"use client";

import { RequestDetailsReturnResponse } from "@/app/api/weather/details/types/return";
import { CardCoverLoading } from "@/components/card-cover-loading";
import WeatherAPI from "@/lib/api/weather";
import { useQuery } from "@tanstack/react-query";
import { Droplet, Eye, SunMedium, Thermometer, Wind } from "lucide-react";
import { WeatherDetailsToDayInfo } from "./WeatherDetailsToDayInfo";

interface WeatherDetailsToDayProps {
  details: RequestDetailsReturnResponse;
  locationKey: string;
}

export function WeatherDetailsToDay({
  details,
  locationKey,
}: WeatherDetailsToDayProps) {
  const { data, isLoading } = useQuery({
    queryKey: ["details"],
    queryFn: async () => WeatherAPI.getDetails({ locationKey }),
    initialData: details,
  });

  if (isLoading) return <CardCoverLoading />;

  return (
    <div className="divide-custom-gray-600 grid h-full items-center divide-y">
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
