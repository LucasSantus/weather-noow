import { RequestForecastReturnResponse } from "@/app/api/weather/forecast/types/return";
import { TRANSITION_DURATION } from "@/constants/globals";
import dayjs from "dayjs";
import { Check } from "lucide-react";
import { WeatherDetailsToDaysForecastDay } from "./WeatherDetailsToDaysForecastDay";

interface WeatherDetailsToDaysForecastProps {
  data: RequestForecastReturnResponse;
}

export function WeatherDetailsToDaysForecast({
  data,
}: WeatherDetailsToDaysForecastProps) {
  return (
    <div className="flex h-full w-full gap-4 py-4 pb-8 text-center">
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
