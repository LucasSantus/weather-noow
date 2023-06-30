import { CitiesQueryResponse } from "@/hooks/api/useCities";
import type { RawAxiosRequestConfig } from "axios";
import { api } from "../axios";

export class CityAPI {
  static async getCitiesPerName(
    options?: RawAxiosRequestConfig
  ): Promise<CitiesQueryResponse> {
    return await api
      .get<CitiesQueryResponse>("/cities", options)
      .then((response) => response.data ?? []);
  }
}
