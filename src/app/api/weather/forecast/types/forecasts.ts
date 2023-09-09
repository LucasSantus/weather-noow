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
      IconPhrase: string;
    };
    Night: {
      Icon: number;
      IconPhrase: string;
    };
  }>;
}

export type RequestForecastResponse = RequestForecastData;
