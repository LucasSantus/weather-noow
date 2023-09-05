import axios from "axios";
import { NextResponse } from "next/server";
import { RequestCitiesResponse } from "./types";

export async function POST(request: Request) {
  const { city } = await request.json();

  if (!city) {
    return NextResponse.json(
      { message: "Insira o campo [city] para fazer a busca" },
      { status: 400 },
    );
  }

  const params = {
    q: city,
    language: "pt-br",
    apikey: process.env.NEXT_PUBLIC_API_ACCU_WEATHER,
  };

  const { data } = await axios.get<RequestCitiesResponse>(
    "http://dataservice.accuweather.com/locations/v1/cities/autocomplete",
    { params },
  );

  const response = data.map(
    ({ Key, LocalizedName, AdministrativeArea, Country }) => ({
      locationKey: Key,
      cityName: LocalizedName,
      stateName: AdministrativeArea.LocalizedName,
      countryName: Country.LocalizedName,
    }),
  );

  return NextResponse.json(response);
}
