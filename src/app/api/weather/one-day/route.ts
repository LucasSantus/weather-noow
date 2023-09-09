import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { RequestCityResponse } from "./types/city";
import { RequestCurrentResponse } from "./types/current";
import { RequestOneDayResponse } from "./types/one-day";
import { RequestOneDayReturnResponse } from "./types/return";

export async function GET(request: NextRequest) {
  const locationKey = request.nextUrl.searchParams.get("locationKey");

  if (!locationKey) {
    return NextResponse.json(
      {
        message:
          "Insira o parâmetro [locationKey] para fazer a busca dos dados",
      },
      { status: 400 },
    );
  }

  // return new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve(
  //       NextResponse.json({
  //         cityName: "Três Corações",
  //         state: "Minas Gerais",
  //         uf: "MG",
  //         countryName: "Brasil",
  //         tempCurrent: 23.9,
  //         weatherText: "Nublado",
  //         weatherIcon: 7,
  //         tempMin: 13.9,
  //         tempMax: 27.2,
  //       }),
  //     );
  //   }, 3000);
  // });

  const params = {
    apikey: process.env.NEXT_PUBLIC_API_ACCU_WEATHER,
    language: "pt-br",
    metric: true,
  };

  // try {
  const [cityResponse, currentResponse, oneDayResponse] = await Promise.all([
    axios.get<RequestCityResponse>(
      "http://dataservice.accuweather.com/locations/v1/" + locationKey,
      {
        params: {
          details: true,
          ...params,
        },
      },
    ),
    axios.get<RequestCurrentResponse>(
      "http://dataservice.accuweather.com/currentconditions/v1/" + locationKey,
      {
        params: {
          details: true,
          ...params,
        },
      },
    ),
    axios.get<RequestOneDayResponse>(
      "http://dataservice.accuweather.com/forecasts/v1/daily/1day/" +
        locationKey,
      { params },
    ),
  ]);

  const oneDay = oneDayResponse.data.DailyForecasts[0];
  const current = currentResponse.data[0];

  const response: RequestOneDayReturnResponse = {
    // city
    cityName: cityResponse.data.LocalizedName,
    state: cityResponse.data.AdministrativeArea.LocalizedName,
    uf: cityResponse.data.AdministrativeArea.ID,
    countryName: cityResponse.data.Country.LocalizedName,

    // current
    tempCurrent: current.Temperature.Metric.Value,
    weatherText: current.WeatherText,
    weatherIcon: current.WeatherIcon,

    // one day
    tempMin: oneDay.Temperature.Minimum.Value,
    tempMax: oneDay.Temperature.Maximum.Value,
  };

  console.log(response);

  return NextResponse.json(response);
  // } catch (error) {
  //   return NextResponse.json(
  //     { message: "Erro ao fazer as requisições" },
  //     { status: 500 },
  //   );
  // }
}
