"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {
  CloudRainWind,
  Droplet,
  SunMedium,
  Thermometer,
  Wind,
} from "lucide-react";
import { WeatherDetailsToDayInfo } from "./WeatherDetailsToDayInfo";

interface WeatherDetailsToDayProps {
  locationKey: string;
}

export function WeatherDetailsToDay({ locationKey }: WeatherDetailsToDayProps) {
  const { data: cities = [], isFetching } = useQuery({
    queryKey: ["detail"],
    queryFn: async () => {
      return axios
        .get("/api/weather/detail", {
          params: {
            locationKey,
          },
        })
        .then(({ data }) => data);
    },
    enabled: false,
  });

  return (
    <div className="divide-custom-gray-600 grid h-full items-center divide-y">
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
