import { WeatherQueryResponse } from "@/hooks/api/useWeather";
import { WeatherOneCallQueryResponse } from "@/hooks/api/useWeatherOneCall";
import type { RawAxiosRequestConfig } from "axios";
import { api } from "../axios";

export class WeatherAPI {
  static async getWeathers(
    options?: RawAxiosRequestConfig
  ): Promise<WeatherQueryResponse> {
    return await api
      .get<WeatherQueryResponse>("/weathers", options)
      .then((response) => response.data ?? []);
  }

  static async getWeatherOneCall(
    options?: RawAxiosRequestConfig
  ): Promise<WeatherOneCallQueryResponse> {
    return await api
      .get<WeatherOneCallQueryResponse>("/weathers", options)
      .then((response) => response.data ?? []);
  }
}
