"use client";

import { CurrentClock } from "@/components/current-clock";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import dayjs from "dayjs";
import { Check } from "lucide-react";

interface WeatherDetailsProps {
  locationKey: string;
}

export function WeatherDetails({ locationKey }: WeatherDetailsProps) {
  const { data: oneDay, isFetching } = useQuery({
    queryKey: ["weather", locationKey],
    queryFn: () => {
      return axios
        .get("/api/weather/one", {
          params: {
            locationKey,
          },
        })
        .then(({ data }) => data);
    },
  });

  if (isFetching) {
    return (
      <div className="bg-custom-gray-700 relative flex flex-1 rounded-lg">
        <Skeleton className="h-full" />
      </div>
    );
  }

  return (
    <div className="bg-custom-gray-700 relative flex flex-1 rounded-lg">
      <div className="flex flex-1 justify-between p-10">
        <div className="flex flex-col">
          <span className="text-xl font-bold">{oneDay?.cityName}</span>
          <span className="text-lg capitalize">
            {dayjs().format("dddd, D [de] MMMM [de] YYYY")}
          </span>
        </div>

        <div>
          <span className="text-xl font-semibold">
            <CurrentClock />
          </span>
        </div>
      </div>
      <div className="absolute bottom-10 left-10 right-10">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <span className="text-9xl font-bold">
              {Math.floor(oneDay?.tempMin)}ºc
            </span>
            <span className="text-xl">
              {Math.floor(oneDay?.tempMin)}ºc / {Math.floor(oneDay?.tempMax)}ºc
              - Poucas nuvens
            </span>
          </div>

          <Check size={140} />
        </div>
      </div>
    </div>
  );
}
