import { UseQueryOptions } from "@tanstack/react-query";

export interface ForecastDay {
  country: string;
  lat: number;
  lon: number;
  name: string;
  state: string;
}

export type ForecastDayQueryResponse = any;

export interface ForecastDayQueryVariables
  extends UseQueryOptions<ForecastDayQueryResponse> {
  params: {
    lat: string;
    lon: string;
  };
}
