import { CitiesQueryResponse } from "@/hooks/api/useCities";
import type { RawAxiosRequestConfig } from "axios";
import { api } from ".";

export class CityAPI {
  static async getAll(options?: RawAxiosRequestConfig): Promise<CitiesQueryResponse> {
    return await api
      .get<CitiesQueryResponse>("geo/1.0/direct", options)
      .then((response) => response.data ?? ([] as CitiesQueryResponse));
  }
}
