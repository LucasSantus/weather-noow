import { RawAxiosRequestConfig } from "axios";
import { api } from "../lib/axios";

export interface CitiesData {
  country: string;
  lat: number;
  lon: number;
  name: string;
  state: string;
}

export interface CitiesQueryResponse {
  data: Array<CitiesData>;
  status: number;
}

export async function CitiesQuery(options: RawAxiosRequestConfig): Promise<CitiesQueryResponse> {
  return await api
    .get<Array<CitiesData>>("geo/1.0/direct", options)
    .then(({ data, status }) => ({ data, status } ?? []));
}
