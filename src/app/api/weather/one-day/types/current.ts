interface RequestCurrentData {
  Temperature: {
    Metric: {
      Value: number;
    };
  };
  WeatherText: string;
  WeatherIcon: number;
}

export type RequestCurrentResponse = RequestCurrentData[];
