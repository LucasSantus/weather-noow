import { api } from "@/lib/axios";
import {
  ForecastDayQueryResponse,
  ForecastDayQueryVariables,
} from "@/types/api/forecast-day";
import { useQuery } from "@tanstack/react-query";

export function useQueryForecastDays(options: ForecastDayQueryVariables) {
  const { params } = options;

  return useQuery<ForecastDayQueryResponse>(
    ["forecasts", params.lon, params.lat],
    async ({ signal }) => {
      return await api
        .get<ForecastDayQueryResponse>("/api/weather/forecast", {
          signal,
          ...options,
        })
        .then(({ data }) => data ?? [])
        .catch(() => []);
    },
    options,
  );
}
