import { QUERY_KEYS } from "@/constants/globals";
import { CityAPI } from "@/lib/api/cityAPI";
import { UseQueryOptions, useQuery } from "@tanstack/react-query";

export interface CityData {
  country: string;
  lat: number;
  lon: number;
  name: string;
  state: string;
}

export type CitiesQueryResponse = Array<CityData>;

interface CitiesQueryOptions extends UseQueryOptions<CitiesQueryResponse> {
  params: {
    city: string;
    limit: number;
  };
}

export function useCities(options: CitiesQueryOptions) {
  const { city, limit } = options.params;

  return useQuery<CitiesQueryResponse>(
    [QUERY_KEYS.cities, city, limit],
    ({ signal }) => {
      return CityAPI.getCitiesPerName({
        signal,
        params: {
          ...options.params,
        },
      });
    },
    options
  );
}
