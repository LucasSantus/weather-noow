import { UseQueryOptions } from "@tanstack/react-query";

export interface City {
  country: string;
  lat: number;
  lon: number;
  name: string;
  state: string;
}

export type CitiesQueryResponse = Array<City>;

export interface CityQueryVariables extends UseQueryOptions<CitiesQueryResponse> {
  params: {
    city: string;
  };
}
