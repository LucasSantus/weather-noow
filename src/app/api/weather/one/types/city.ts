interface RequestCityData {
  Key: string;
  LocalizedName: string;
  Country: {
    LocalizedName: string;
  };
  AdministrativeArea: {
    ID: string;
    LocalizedName: string;
    LocalizedType: string;
  };
  TimeZone: {
    Code: string;
    GmtOffset: number;
  };
}

export type RequestCityResponse = RequestCityData;
