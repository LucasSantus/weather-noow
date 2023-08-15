import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const city = request.nextUrl.searchParams.get("city");

  if (!city) {
    return NextResponse.json({ message: "Missing city param" }, { status: 400 });
  }

  const params = {
    q: city,
    limit: 10,
    appid: process.env.NEXT_PUBLIC_API_OPEN_WEATHER_MAP_KEY,
  };

  const { data } = await axios.get("http://api.openweathermap.org/geo/1.0/direct", { params });

  return NextResponse.json(data);
}
