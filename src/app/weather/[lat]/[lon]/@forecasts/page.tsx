import { CardCover } from "@/components/CardCover";

interface ForecastsProps {
  params: {
    lat: string;
    lon: string;
  };
}

async function getData({ params }: ForecastsProps) {
  const response = await fetch(
    `http://localhost:3000/api/weather/forecast?lat=${params.lat}&lon=${params.lon}`,
  );

  return response.json();
}

export default async function Forecasts({ params }: ForecastsProps) {
  const data = await getData({ params });

  return (
    <CardCover title="Detalhes do clima hoje" className="row-span-4">
      <h1>Forecasts</h1>
    </CardCover>
  );
}
