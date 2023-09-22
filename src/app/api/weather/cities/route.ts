import axios from "axios";
import { NextResponse } from "next/server";
import { RequestCitiesResponse } from "./types/cities";
import { RequestCitiesReturnResponse } from "./types/return";

export async function POST(request: Request) {
  const { params } = await request.json();
  const { search } = params;

  if (!search) {
    return NextResponse.json(
      { message: "Insira a cidade que deseja pesquisar" },
      { status: 400 },
    );
  }

  try {
    const paramsCities = {
      q: search,
      language: "pt-br",
      apikey: process.env.NEXT_PUBLIC_API_ACCU_WEATHER,
    };

    const { data } = await axios.get<RequestCitiesResponse>(
      "http://dataservice.accuweather.com/locations/v1/cities/autocomplete",
      { params: paramsCities },
    );

    const response: RequestCitiesReturnResponse = data.map(
      ({ Key, LocalizedName, AdministrativeArea, Country }) => ({
        locationKey: Key,
        cityName: LocalizedName,
        stateName: AdministrativeArea.LocalizedName,
        countryName: Country.LocalizedName,
      }),
    );

    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(
      { message: "Ocorreu uma falha ao processar os dados" },
      { status: 500 },
    );
  }
}
