import { CardCover } from "@/components/CardCover";
import { CurrentClock } from "@/components/CurrentClock";
import dayjs from "dayjs";
import { Check } from "lucide-react";

interface WeatherProps {
  params: {
    city: string;
  };
}

interface Weather {
  coord: { lon: number; lat: number };
  weather: Array<{
    id: number;
    main: string;
    description: string;
    icon: string;
  }>;
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  visibility: number;
  wind: { speed: number; deg: number; gust: number };
  rain: { "1h": number };
  clouds: { all: number };
  dt: number;
  sys: { country: string; sunrise: number; sunset: number };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

async function getData({ params }: WeatherProps): Promise<Weather> {
  const response = await fetch(
    `http://localhost:3000/api/weather/detail?city=${params.city}`,
  );

  return response.json();
}

export default async function Weather({ params }: WeatherProps) {
  const data = await getData({ params });

  console.log(data);

  return (
    <CardCover>
      <div className="relative flex flex-1 rounded-lg bg-custom-gray-700">
        <div className="flex flex-1 justify-between p-10">
          <div className="flex flex-col">
            <span className="text-xl font-bold">{data.name}</span>
            <span className="text-lg capitalize">
              {dayjs().format("dddd, D [de] MMMM [de] YYYY")}
            </span>
          </div>

          <div>
            <span className="text-xl font-semibold">
              <CurrentClock />
            </span>
          </div>
        </div>

        <div className="absolute bottom-10 left-10 right-10">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <span className="text-9xl font-bold">
                {Math.floor(data.main.temp)}ºc
              </span>
              <span className="text-xl">
                {Math.floor(data.main.temp_min)}ºc /{" "}
                {Math.floor(data.main.temp_max)}ºc - Poucas nuvens
              </span>
            </div>

            <Check size={140} />
          </div>
        </div>
      </div>
    </CardCover>
  );
}
