import { QUERY_KEYS } from "@/constants/globals";
import { CityAPI } from "@/lib/api/city";
import { UseQueryOptions, useQuery } from "@tanstack/react-query";

export interface CityData {
  country: string;
  lat: number;
  lon: number;
  name: string;
  state: string;
}

export type CitiesQueryResponse = CityData[];

export function useCities(city: string, options?: UseQueryOptions<CitiesQueryResponse>) {
  return useQuery<CitiesQueryResponse>(
    [QUERY_KEYS.cities, city],
    ({ signal }) => {
      return CityAPI.getAll<CitiesQueryResponse>({
        signal,
        params: {
          q: city,
          appid: process.env.NEXT_PUBLIC_WEATHER_API_ID,
        },
      });
    },
    options,
  );
}
