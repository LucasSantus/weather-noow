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
  const { city } = await request.json();

  if (!city) {
    return NextResponse.json(
      { message: "Insira o campo [city] para fazer a busca" },
      { status: 400 },
    );
  }

  // const params = {
  //   q: city,
  //   language: "pt-br",
  //   apikey: process.env.NEXT_PUBLIC_API_ACCU_WEATHER,
  // };

  // const { data } = await axios.get<RequestResponse>(
  //   "http://dataservice.accuweather.com/locations/v1/cities/autocomplete",
  //   { params },
  // );

  // const response = data.map((item) => ({
  //   locationKey: item.Key,
  //   cityName: item.LocalizedName,
  //   stateName: item.AdministrativeArea.LocalizedName,
  //   countryName: item.Country.LocalizedName,
  // }));

  const response = [
    {
      locationKey: "39522",
      cityName: "Três Corações",
      stateName: "Minas Gerais",
      countryName: "Brasil",
    },
    {
      locationKey: "2729573",
      cityName: "Três Corações",
      stateName: "Rio de Janeiro",
      countryName: "Brasil",
    },
  ];

  // const params = {
  //   q: city,
  //   limit: 10,
  //   appid: process.env.NEXT_PUBLIC_API_OPEN_WEATHER_MAP_KEY,
  // };

  // const { data } = await axios.get("http://api.openweathermap.org/geo/1.0/direct", { params });

  return NextResponse.json(response);
}
