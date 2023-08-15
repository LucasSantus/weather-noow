import { api } from "@/lib/axios";
import { CitiesQueryResponse, CityQueryVariables } from "@/types/api/cities";
import { useMutation } from "@tanstack/react-query";

export function useMutationCities(options: CityQueryVariables) {
  return useMutation<CitiesQueryResponse>({
    mutationFn: async () => {
      const response = await api.get<CitiesQueryResponse>(
        "/api/weather/cities",
        { ...options }
      );
      return response.data ?? [];
    },
  });
}
