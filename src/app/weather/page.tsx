import { CardCover } from "@/components/CardCover";
import { WeatherLayout } from "@/components/WeatherLayout";
import { WeatherDetails } from "./components/WeatherDetails";
import { WeatherDetailsToDay } from "./components/WeatherDetailsToDay";
import { WeatherDetailsToDaysForecast } from "./components/WeatherDetailsToDaysForecast";

interface WeatherProps {
  params: {
    cityName: string;
  };
}

export default function Weather({ params }: WeatherProps) {
  return (
    <WeatherLayout>
      <div className="grid h-full flex-1 grid-cols-2 gap-4 p-5">
        <CardCover>
          <WeatherDetails />
        </CardCover>
        <div className="grid-rows-10 grid gap-4">
          <CardCover title="Detalhes do clima hoje" className="row-span-6">
            <WeatherDetailsToDay />
          </CardCover>
          <CardCover title="Detalhes do clima hoje" className="row-span-4">
            <WeatherDetailsToDaysForecast />
          </CardCover>
        </div>
      </div>
    </WeatherLayout>
  );
}