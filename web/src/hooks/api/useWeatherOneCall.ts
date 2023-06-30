import { QUERY_KEYS } from "@/constants/globals";
import { WeatherAPI } from "@/lib/api/weatherAPI";
import { UseQueryOptions, useQuery } from "@tanstack/react-query";

export interface WeatherOneCallData {
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
      }
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

export type WeatherOneCallQueryResponse = WeatherOneCallData;

interface WeatherQueryOptions
  extends UseQueryOptions<WeatherOneCallQueryResponse> {
  params: {
    latitude: number;
    longitude: number;
  };
}

export function useWeatherOneCall(options: WeatherQueryOptions) {
  const { latitude, longitude } = options.params;

  return useQuery<WeatherOneCallQueryResponse>(
    [QUERY_KEYS.weathers, latitude, longitude],
    ({ signal }) => {
      return WeatherAPI.getWeathers({
        signal,
        params: {
          ...options.params,
        },
      });
    },
    options
  );
}
