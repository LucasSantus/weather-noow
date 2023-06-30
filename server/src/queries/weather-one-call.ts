import { RawAxiosRequestConfig } from "axios";
import { api } from "../lib/axios";

export interface WeatherOneCallData {
  country: string;
  lat: number;
  lon: number;
  name: string;
  state: string;
}

export interface WeatherOneCallQueryResponse {
  data: Array<WeatherOneCallData>;
  status: number;
}

export async function WeatherOneCallQuery(options: RawAxiosRequestConfig): Promise<WeatherOneCallQueryResponse> {
  return await api
    .get<Array<WeatherOneCallData>>("data/2.5/onecall", options)
    .then(({ data, status }) => ({ data, status } ?? []));
}
