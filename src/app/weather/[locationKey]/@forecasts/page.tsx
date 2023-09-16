import { RequestForecastReturnResponse } from "@/app/api/weather/forecast/types/return";
import { CardCover } from "@/components/card-cover";
import { WeatherDetailsToDaysForecast } from "./components/weather-details-to-days-forecast";

interface ForecastsProps {
  params: {
    locationKey: string;
  };
}

async function getData({ locationKey }: { locationKey: string }) {
  return await fetch(
    process.env.NEXT_PUBLIC_API_URL +
      "/api/weather/forecast?locationKey=" +
      locationKey,
    {
      method: "GET",
    },
  ).then(
    async (response) =>
      (await response.json()) as RequestForecastReturnResponse,
  );
}

export default async function Forecasts({ params }: ForecastsProps) {
  const data = await getData({ locationKey: params.locationKey });

  return (
    <CardCover
      title="Previsão para 4 dias"
      className="col-span-1 row-span-1"
      animation={{ delay: 0.8 }}
    >
      <WeatherDetailsToDaysForecast data={data} />
    </CardCover>
  );
}
