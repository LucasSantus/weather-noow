import axios from "axios";
import { NextResponse } from "next/server";
import { RequestCitiesResponse } from "./types/cities";
import { RequestCitiesReturnResponse } from "./types/return";

export async function POST(request: Request) {
  const { search } = await request.json();

  if (!search) {
    return NextResponse.json(
      { message: "Insira o campo [search] para fazer a busca" },
      { status: 400 },
    );
  }

  const params = {
    q: search,
    language: "pt-br",
    apikey: process.env.NEXT_PUBLIC_API_ACCU_WEATHER,
  };

  const { data } = await axios.get<RequestCitiesResponse>(
    "http://dataservice.accuweather.com/locations/v1/cities/autocomplete",
    { params },
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
  // } catch (error) {
  //   return NextResponse.json(
  //     { message: "Erro ao fazer as requisições" + error },
  //     { status: 500 },
  //   );
  // }
}
