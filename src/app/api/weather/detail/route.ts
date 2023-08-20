import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  // const lat = request.nextUrl.searchParams.get("lat");
  // const lon = request.nextUrl.searchParams.get("lon");

  const city = request.nextUrl.searchParams.get("city");

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_API_OPEN_WEATHER_MAP_KEY}&units=metric`,
    // `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_API_OPEN_WEATHER_MAP_KEY}`,
  );

  return response;
}
