import { QUERY_KEYS } from "@/constants/globals";
import { WeatherAPI } from "@/lib/api/weather";
import { UseQueryOptions, useQuery } from "@tanstack/react-query";

export interface WeathersQueryResponse {}

export function useWeathers(city: string, options?: UseQueryOptions<WeathersQueryResponse>) {
  return useQuery<WeathersQueryResponse>(
    [QUERY_KEYS.profiles],
    ({ signal }) => {
      return WeatherAPI.get<WeathersQueryResponse>({
        signal,
        params: {
          q: city,
          appid: process.env.NEXT_PUBLIC_WEATHER_API_ID,
          units: "metric",
          lang: "pt",
        },
      });
    },
    options,
  );
}
