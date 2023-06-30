import { RawAxiosRequestConfig } from "axios";
import { WeatherOneCallQuery, WeatherOneCallQueryResponse } from "../queries/weather-one-call";

export class WeatherAPI {
  static async getOneCall(options: RawAxiosRequestConfig): Promise<WeatherOneCallQueryResponse> {
    return await WeatherOneCallQuery(options);
  }
}
