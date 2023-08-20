import { CardCover } from "@/components/CardCover";
import { WeatherDetailsToDaysForecast } from "../components/WeatherDetailsToDaysForecast";

interface ForecastsProps {
  params: {
    lat: string;
    lon: string;
  };
}

async function getData({ params }: ForecastsProps) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise resolved after 3000ms");
    }, 10000);
  });

  const response = await fetch(
    `http://localhost:3000/api/weather/forecast?lat=${params.lat}&lon=${params.lon}`,
  );

  return response.json();
}

export default async function Forecasts({ params }: ForecastsProps) {
  const data = await getData({ params });

  return (
    <CardCover title="Detalhes do clima hoje" className="row-span-4">
      <WeatherDetailsToDaysForecast />
    </CardCover>
  );
}
