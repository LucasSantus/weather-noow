"use client";

import { Check } from "lucide-react";

interface WeatherDetailsProps {}

export function WeatherDetails({}: WeatherDetailsProps) {
  // const { selectedCity } = useCityContext();

  // if (!selectedCity) return null;

  return (
    <div className="relative flex flex-1 rounded-lg bg-custom-gray-700">
      <div className="flex flex-1 justify-between p-10">
        <div className="flex flex-col">
          <span className="text-xl font-bold">Porto Alegre, RS</span>
          <span className="text-lg">Segunda-feira, 15 de maio de 2023 </span>
        </div>

        <div>
          <span className="text-xl font-semibold">21:39</span>
        </div>
      </div>

      <div className="absolute bottom-10 left-10 right-10">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <span className="text-9xl font-bold">28ºc</span>
            <span className="text-xl">32ºc / 26ºc - Poucas nuvens</span>
          </div>

          <Check size={140} />
        </div>
      </div>
    </div>
  );
}
