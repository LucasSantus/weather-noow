import type { RawAxiosRequestConfig } from "axios";
import { api } from "../axios";

export interface WeatherData {
  cod: string;
  message: number;
  cnt: number;
  list: Array<{
    dt: number;
    main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      sea_level: number;
      grnd_level: number;
      humidity: number;
      temp_kf: number;
    };
    weather: [
      {
        id: number;
        main: string;
        description: string;
        icon: string;
      },
    ];
    clouds: {
      all: number;
    };
    wind: {
      speed: number;
      deg: number;
      gust: number;
    };
    visibility: number;
    pop: number;
    sys: {
      pod: string;
    };
    dt_txt: string;
  }>;

  city: {
    id: number;
    name: string;
    coord: {
      lat: number;
      lon: number;
    };
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  };
}

export type WeathersQueryResponse = Array<WeatherData>;

export class WeatherAPI {
  static async getWeather(options: RawAxiosRequestConfig): Promise<WeathersQueryResponse> {
    return await api
      .get<WeathersQueryResponse>("data/2.5/forecast", options)
      .then((response) => response.data ?? ([] as WeathersQueryResponse));
  }
}
