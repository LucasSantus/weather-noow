import { CardCover } from "@/components/CardCover";
import { WeatherLayout } from "@/components/WeatherLayout";
import { WeatherDetails } from "./components/WeatherDetails";
import { WeatherDetailsToDay } from "./components/WeatherDetailsToDay";
import { WeatherDetailsToDaysForecast } from "./components/WeatherDetailsToDaysForecast";

interface WeatherProps {}

async function getData() {
  const res = await fetch(
    "http://localhost:3000/api/weather/cities?city=Sao Bento Abade",
  );

  return res.json();
}

export default async function Weather({}: WeatherProps) {
  const data = await getData();

  console.log(data);

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
