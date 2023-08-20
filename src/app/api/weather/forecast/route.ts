import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { lat, lon } = await request.json();

  const params = {
    lat,
    lon,
    appid: process.env.NEXT_PUBLIC_API_OPEN_WEATHER_MAP_KEY,
  };

  const { data } = await axios.get(
    "http://api.openweathermap.org/data/2.5/forecast",
    { params },
  );

  return NextResponse.json(data);
}
