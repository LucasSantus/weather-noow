"use client";

import { useCityContext } from "@/hooks/useCityContext";
import { Check } from "lucide-react";

interface WeatherDetailsProps {
  cityName: string;
}

export function WeatherDetails({ cityName }: WeatherDetailsProps) {
  const { selectedCity } = useCityContext();

  if (!selectedCity) return null;

  return (
    <div className="flex flex-1 rounded-lg bg-blue-700 relative">
      <div className="flex justify-between flex-1 p-10">
        <div className="flex flex-col">
          <span className="font-bold text-xl">Porto Alegre, RS</span>
          <span className="text-lg">Segunda-feira, 15 de maio de 2023 </span>
        </div>

        <div>
          <span className="font-semibold text-xl">21:39</span>
        </div>
      </div>

      <div className="absolute bottom-10 right-10 left-10">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <span className="font-bold text-9xl">28ºc</span>
            <span className="text-xl">32ºc / 26ºc - Poucas nuvens</span>
          </div>

          <Check size={140} />
        </div>
      </div>
    </div>
  );
}
