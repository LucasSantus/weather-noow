export type RequestForecastReturnResponse = Array<{
  date: string;
  tempMin: number;
  tempMax: number;
  day: {
    description: string;
    weatherIcon: number;
  };
  night: {
    description: string;
    weatherIcon: number;
  };
}>;
