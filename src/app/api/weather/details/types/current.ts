interface RequestCurrentData {
  UVIndex: number;
  RelativeHumidity: number;
  WindGust: {
    Speed: {
      Metric: {
        Value: number;
      };
    };
  };
  RealFeelTemperature: {
    Metric: {
      Value: number;
    };
  };
  Visibility: {
    Metric: {
      Value: number;
    };
  };
}

export type RequestCurrentResponse = RequestCurrentData[];
