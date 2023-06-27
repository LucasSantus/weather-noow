import { WeathersQueryResponse } from "@/hooks/api/useWeathers";
import type { RawAxiosRequestConfig } from "axios";
import { api } from "../axios";

export class WeatherAPI {
  static async getWeathers(
    options?: RawAxiosRequestConfig
  ): Promise<WeathersQueryResponse> {
    return await api
      .get<WeathersQueryResponse>("/weathers", options)
      .then((response) => response.data ?? ([] as WeathersQueryResponse));
  }
}
