import type { RawAxiosRequestConfig } from "axios";
import { api } from "../axios";

export interface CityData {
  country: string;
  lat: number;
  lon: number;
  name: string;
  state: string;
}

export type CitiesQueryResponse = Array<CityData>;

export class CityAPI {
  static async getCitiesPerName(options: RawAxiosRequestConfig): Promise<CitiesQueryResponse> {
    return await api
      .get<CitiesQueryResponse>("geo/1.0/direct", options)
      .then((response) => response.data ?? ([] as CitiesQueryResponse));
  }
}
