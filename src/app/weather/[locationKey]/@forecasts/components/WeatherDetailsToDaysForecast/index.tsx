"use client";

import { RequestForecastReturnResponse } from "@/app/api/weather/forecast/types/return";
import { CardCoverLoading } from "@/components/card-cover-loading";
import { Button } from "@/components/ui/button";
import { TRANSITION_DURATION } from "@/constants/globals";
import WeatherAPI from "@/lib/api/weather";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import { Check } from "lucide-react";
import { WeatherDetailsToDaysForecastDay } from "./WeatherDetailsToDaysForecastDay";

interface ChildrenProps {
  data: RequestForecastReturnResponse;
}

interface WeatherDetailsToDaysForecastProps {
  forecasts: RequestForecastReturnResponse;
  locationKey: string;
}

export function WeatherDetailsToDaysForecast({
  forecasts,
  locationKey,
}: WeatherDetailsToDaysForecastProps) {
  const { data, isLoading, isFetching, refetch } = useQuery({
    queryKey: ["forecasts"],
    queryFn: async () => WeatherAPI.getForecasts({ locationKey }),
    initialData: forecasts,
  });

  if (isLoading || isFetching) return <CardCoverLoading />;

  // if (error && !data) return <div>Erro ao carregar previsão do tempo</div>;

  return (
    <div className="flex h-full w-full flex-col">
      <span className="w-full p-5">Erro ao buscar os dados</span>

      <Button variant="default" onClick={() => refetch()}>
        Buscar os dados novamente
      </Button>
    </div>
  );

  return (
    <div className="grid h-full grid-cols-4 text-center">
      {data.map(({ date, tempMax, tempMin }, index) => {
        const textToDate = index === 0 ? "Amanhâ" : dayjs(date).format("ddd");

        const delay = TRANSITION_DURATION * (index + 1);

        return (
          <WeatherDetailsToDaysForecastDay
            key={date}
            day={textToDate}
            icon={Check}
            maxTemperature={Number(tempMax.toFixed(0))}
            minTemperature={Number(tempMin.toFixed(0))}
            animation={{
              delay,
            }}
          />
        );
      })}
    </div>
  );
}
