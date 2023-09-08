export type RequestForecastReturnResponse = Array<{
  date: string;
  tempMin: number;
  tempMax: number;
  weatherIcon: number;
}>;
