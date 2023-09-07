import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { RequestForecastResponse } from "./types/forecasts";
import { RequestForecastReturnResponse } from "./types/return";

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

  return NextResponse.json([
    {
      date: "2023-09-08T07:00:00-03:00",
      tempMin: 13.2,
      tempMax: 28.5,
      weatherIcon: 3,
    },
    {
      date: "2023-09-09T07:00:00-03:00",
      tempMin: 12.7,
      tempMax: 30.1,
      weatherIcon: 6,
    },
    {
      date: "2023-09-10T07:00:00-03:00",
      tempMin: 13.4,
      tempMax: 30.2,
      weatherIcon: 4,
    },
    {
      date: "2023-09-11T07:00:00-03:00",
      tempMin: 13,
      tempMax: 30.5,
      weatherIcon: 1,
    },
  ]);

  const params = {
    apikey: process.env.NEXT_PUBLIC_API_ACCU_WEATHER,
    language: "pt-br",
    metric: true,
    details: true,
  };

  try {
    const { data } = await axios.get<RequestForecastResponse>(
      "http://dataservice.accuweather.com/forecasts/v1/daily/5day/" +
        locationKey,
      {
        params,
      },
    );

    const response: RequestForecastReturnResponse = data.DailyForecasts.filter(
      (_, index) => index !== 0,
    ).map(({ Date, Temperature, Day }) => ({
      date: Date,
      tempMin: Temperature.Minimum.Value,
      tempMax: Temperature.Maximum.Value,
      weatherIcon: Day.Icon,
    }));

    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(
      { message: "Erro ao fazer as requisições" },
      { status: 500 },
    );
  }
}
