import { CardCover } from "@/components/card-cover";
import WeatherAPI from "@/lib/api/weather";
import { WeatherDetailsToDaysForecast } from "./components/WeatherDetailsToDaysForecast";

interface ForecastsProps {
  params: {
    locationKey: string;
  };
}

export default async function Forecasts({ params }: ForecastsProps) {
  const forecasts = await WeatherAPI.getForecasts({
    locationKey: params.locationKey,
  });

  return (
    <CardCover
      title="Previsão para 4 dias"
      className="col-span-1 row-span-1"
      animation={{ delay: 0.8 }}
    >
      <WeatherDetailsToDaysForecast
        forecasts={forecasts}
        locationKey={params.locationKey}
      />
    </CardCover>
  );
}
