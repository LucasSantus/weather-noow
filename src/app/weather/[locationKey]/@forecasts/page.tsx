import { CardCover } from "@/components/card-cover";

interface ForecastsProps {
  params: {
    locationKey: string;
  };
}

export default async function Forecasts({ params }: ForecastsProps) {
  return (
    <CardCover title="Detalhes do clima hoje" className="row-span-4">
      forecast
      {/* <WeatherDetailsToDaysForecast /> */}
    </CardCover>
  );
}
