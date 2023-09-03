import axios from "axios";
import { NextResponse } from "next/server";

interface RequestData {
  Key: string;
  LocalizedName: string;
  Country: {
    ID: string;
    LocalizedName: string;
  };
  AdministrativeArea: {
    ID: string;
    LocalizedName: string;
  };
}

type RequestResponse = RequestData[];

export async function POST(request: Request) {
  const { locationKey } = await request.json();

  if (!locationKey) {
    return NextResponse.json(
      { message: "Insira o campo [locationKey] para fazer a busca" },
      { status: 400 },
    );
  }

  const params = {
    apikey: process.env.NEXT_PUBLIC_API_ACCU_WEATHER,
    language: "pt-br",
    metric: true,
  };

  const { data } = await axios.get<RequestResponse>(
    "http://dataservice.accuweather.com/forecasts/v1/daily/1day/" + locationKey,
    { params },
  );

  const response = data.map((item) => ({
    locationKey: item.Key,
    cityName: item.LocalizedName,
    stateName: item.AdministrativeArea.LocalizedName,
    countryName: item.Country.LocalizedName,
  }));

  return NextResponse.json(response);
}
