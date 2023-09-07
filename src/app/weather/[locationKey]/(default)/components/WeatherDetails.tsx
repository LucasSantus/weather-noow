"use client";

import { RequestOneDayReturnResponse } from "@/app/api/weather/one-day/types/return";
import { CardCoverLoading } from "@/components/card-cover-loading";
import { CurrentClock } from "@/components/current-clock";
import WeatherAPI from "@/lib/api/weather";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import { Check } from "lucide-react";

interface WeatherDetailsProps {
  oneDay: RequestOneDayReturnResponse;
  locationKey: string;
}

export function WeatherDetails({ oneDay, locationKey }: WeatherDetailsProps) {
  const { data, isLoading } = useQuery({
    queryKey: ["one-day"],
    queryFn: () => WeatherAPI.getOneDay({ locationKey }),
    initialData: oneDay,
  });

  if (isLoading) return <CardCoverLoading />;

  return (
    <div className="flex h-full flex-col justify-between rounded-lg p-4">
      <div className="flex justify-between">
        <div className="grid">
          <span className="text-xl font-bold">
            {data.cityName}, {data.uf}
          </span>
          <span className="text-lg capitalize">
            {dayjs().format("dddd, D [de] MMMM [de] YYYY")}
          </span>
        </div>

        <span className="text-2xl font-semibold">
          <CurrentClock />
        </span>
      </div>

      <div className="flex justify-between">
        <div className="grid">
          <span className="text-9xl font-bold">
            {Math.floor(data.tempCurrent)}ºc
          </span>
          <span className="text-xl">
            {Math.floor(data.tempMin)}ºc / {Math.floor(data.tempMax)}ºc -{" "}
            {data.weatherText}
          </span>
        </div>

        <Check size={140} />
      </div>
    </div>
  );
}
