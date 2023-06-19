import { UserResponse } from "@/hooks/useWeathers";
import type { RawAxiosRequestConfig } from "axios";
import { api } from ".";

export class WeatherAPI {
  static async get(options?: RawAxiosRequestConfig): Promise<UserResponse> {
    const { data } = await api.get("/users", options);
    return data;
  }
}
