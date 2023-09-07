interface Period {
  Icon: number;
  IconPhrase: string;
  HasPrecipitation: boolean;
  ShortPhrase: string;
  LongPhrase: string;
  PrecipitationProbability: number;
  ThunderstormProbability: number;
  RainProbability: number;
  SnowProbability: number;
  IceProbability: number;
  Wind: {
    Speed: {
      Value: number;
      Unit: string;
      UnitType: number;
    };
    Direction: {
      Degrees: number;
      Localized: string;
      English: string;
    };
  };
  WindGust: {
    Speed: {
      Value: number;
      Unit: string;
      UnitType: number;
    };
    Direction: {
      Degrees: number;
      Localized: string;
      English: string;
    };
  };
  HoursOfPrecipitation: number;
  HoursOfRain: number;
  HoursOfSnow: number;
  HoursOfIce: number;
  CloudCover: number;
  SolarIrradiance: {
    Value: number;
    Unit: string;
  };
}

interface RequestOneDayData {
  Headline: {
    EffectiveDate: string;
    EffectiveEpochDate: number;
    Severity: number;
    Text: string;
    Category: string;
    EndDate: string;
    EndEpochDate: number;
  };
  DailyForecasts: [
    {
      Temperature: {
        Minimum: {
          Value: number;
        };
        Maximum: {
          Value: number;
        };
      };
      RealFeelTemperature: {
        Minimum: {
          Value: number;
          Phrase: string;
        };
        Maximum: {
          Value: number;
          Phrase: string;
        };
      };
      RealFeelTemperatureShade: {
        Minimum: {
          Value: number;
          Phrase: string;
        };
        Maximum: {
          Value: number;
          Phrase: string;
        };
      };
      HoursOfSun: number;
      DegreeDaySummary: {
        Heating: {
          Value: number;
        };
        Cooling: {
          Value: number;
        };
      };
      Day: Period;
      Night: Period;
    },
  ];
}

export type RequestOneDayResponse = RequestOneDayData;
