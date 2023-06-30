import type { RawAxiosRequestConfig } from "axios";
import { CitiesQuery, CitiesQueryResponse } from "../queries/cities";

export class CityAPI {
  static async getCities(options: RawAxiosRequestConfig): Promise<CitiesQueryResponse> {
    return await CitiesQuery(options);
  }
}
