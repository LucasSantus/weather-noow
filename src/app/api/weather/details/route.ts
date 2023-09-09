import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { RequestCurrentResponse } from "./types/current";
import { RequestDetailsReturnResponse } from "./types/return";

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
  //         humidity: 42,
  //         uvIndex: 5,
  //         windSpeed: 22.0,
  //         thermalSensation: 25.1,
  //         visibility: 16.1,
  //       }),
  //     );
  //   }, 3000);
  // });

  const params = {
    apikey: process.env.NEXT_PUBLIC_API_ACCU_WEATHER,
    language: "pt-br",
    metric: true,
    details: true,
  };

  try {
    const { data } = await axios.get<RequestCurrentResponse>(
      "http://dataservice.accuweather.com/currentconditions/v1/" + locationKey,
      {
        params,
      },
    );

    const response: RequestDetailsReturnResponse = {
      humidity: data[0].RelativeHumidity,
      uvIndex: data[0].UVIndex,
      windSpeed: data[0].WindGust.Speed.Metric.Value,
      thermalSensation: data[0].RealFeelTemperature.Metric.Value,
      visibility: data[0].Visibility.Metric.Value,
    };

    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(
      { message: "Erro ao fazer as requisições" },
      { status: 500 },
    );
  }
}
