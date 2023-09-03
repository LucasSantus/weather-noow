"use client";

import { CardCover } from "@/components/card-cover";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface WeatherProps {
  params: {
    locationKey: string;
  };
}

export default async function Weather({ params }: WeatherProps) {
  const { data: weatherToDay = [], isFetching } = await useQuery({
    queryKey: ["weather"],
    queryFn: async () => {
      return axios
        .get("/api/weather/detail", {
          params: {
            locationKey: params.locationKey,
          },
        })
        .then(({ data }) => data);
    },
    suspense: true,
    enabled: false,
  });

  console.log(weatherToDay);

  return <CardCover></CardCover>;
}
