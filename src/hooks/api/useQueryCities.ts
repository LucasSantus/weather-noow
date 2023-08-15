import { api } from "@/lib/axios";
import { CitiesQueryResponse, CityQueryVariables } from "@/types/api/cities";
import { useQuery } from "@tanstack/react-query";

export function useQueryCities(options: CityQueryVariables) {
  const { params } = options;

  return useQuery<CitiesQueryResponse>(
    ["cities", params.city],
    async ({ signal }) => {
      return await api
        .get<CitiesQueryResponse>("/api/weather/cities", { signal, ...options })
        .then(({ data }) => data ?? [])
        .catch(() => []);
    },
    options,
  );
}
