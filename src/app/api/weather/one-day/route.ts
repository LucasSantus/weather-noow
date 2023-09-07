import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { locationKey } = await request.json();

  if (!locationKey) {
    return NextResponse.json(
      {
        message:
          "Insira o parâmetro [locationKey] para fazer a busca dos dados",
      },
      { status: 400 },
    );
  }

  const params = {
    apikey: process.env.NEXT_PUBLIC_API_ACCU_WEATHER,
    language: "pt-br",
    metric: true,
  };

  return NextResponse.json([]);

  // try {
  //   const [cityResponse, oneDayResponse] = await Promise.all([
  //     axios.get<RequestCityResponse>(
  //       "http://dataservice.accuweather.com/locations/v1/" + locationKey,
  //       {
  //         params: {
  //           details: true,
  //           ...params,
  //         },
  //       },
  //     ),
  //     axios.get<RequestOneDayResponse>(
  //       "http://dataservice.accuweather.com/forecasts/v1/daily/1day/" +
  //         locationKey,
  //       { params },
  //     ),
  //   ]);

  //   const oneDay = oneDayResponse.data.DailyForecasts[0];

  //   const response = {
  //     // city
  //     locationKey: cityResponse.data.Key,
  //     cityName: cityResponse.data.LocalizedName,
  //     stateName: cityResponse.data.AdministrativeArea.LocalizedName,
  //     countryName: cityResponse.data.Country.LocalizedName,
  //     timezone: {
  //       code: cityResponse.data.TimeZone.Code,
  //       gmt: cityResponse.data.TimeZone.GmtOffset,
  //     },

  //     // one day
  //     tempMin: oneDay.Temperature.Minimum.Value,
  //     tempMax: oneDay.Temperature.Maximum.Value,
  //     realFeelMin: oneDay.RealFeelTemperature.Minimum.Value,
  //     realFeelMax: oneDay.RealFeelTemperature.Maximum.Value,
  //     realFeelShadeMin: oneDay.RealFeelTemperatureShade.Minimum.Value,
  //     realFeelShadeMax: oneDay.RealFeelTemperatureShade.Maximum.Value,
  //     hoursOfSun: oneDay.HoursOfSun,
  //     heatingDegreeDays: oneDay.DegreeDaySummary.Heating.Value,
  //     coolingDegreeDays: oneDay.DegreeDaySummary.Cooling.Value,
  //     day: {
  //       icon: oneDay.Day.Icon,
  //       iconPhrase: oneDay.Day.IconPhrase,
  //       hasPrecipitation: oneDay.Day.HasPrecipitation,
  //       // precipitationType: oneDay.Day.,
  //       // precipitationIntensity: oneDay.Day.PrecipitationIntensity,
  //     },
  //     night: {
  //       icon: oneDay.Night.Icon,
  //       iconPhrase: oneDay.Night.IconPhrase,
  //       hasPrecipitation: oneDay.Night.HasPrecipitation,
  //       // precipitationType: oneDay.Night.PrecipitationType,
  //       // precipitationIntensity: oneDay.Night.PrecipitationIntensity,
  //     },
  //   };
  //   return NextResponse.json(response);
  // } catch (error) {
  //   // Lide com erros aqui, por exemplo, enviando uma resposta de erro.

  //   return NextResponse.json(
  //     { message: "Erro ao fazer as requisições" },
  //     { status: 100 },
  //   );
  // }
}
