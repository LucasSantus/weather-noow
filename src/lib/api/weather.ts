import type { RawAxiosRequestConfig } from "axios";
import { api } from "../axios";

export class WeatherAPI {
  static async get<T>(options?: RawAxiosRequestConfig): Promise<T> {
    return await api.get("/data/2.5/weather", options);
  }
}
