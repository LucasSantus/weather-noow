interface RequestForecastData {
  DailyForecasts: Array<{
    Date: string;
    Temperature: {
      Minimum: {
        Value: number;
      };
      Maximum: {
        Value: number;
      };
    };
    Day: {
      Icon: number;
    };
  }>;
}

export type RequestForecastResponse = RequestForecastData;
