import type { RawAxiosRequestConfig } from "axios";
import { api } from "../axios";

export class CityAPI {
  static async getAll<T>(options?: RawAxiosRequestConfig): Promise<T> {
    return await api.get<T>("geo/1.0/direct", options).then((response) => response.data ?? ([] as T));
  }
}
