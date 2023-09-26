import { RequestOneDayReturnResponse } from "@/app/api/weather/one-day/types/return";
import { CardCover } from "@/components/card-cover";
import { Header } from "./components/header";
import { WeatherDetails } from "./components/weather-details";

interface WeatherProps {
  params: {
    locationKey: string;
  };
}

async function getData({ locationKey }: { locationKey: string }) {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL +
      "/api/weather/one-day?locationKey=" +
      locationKey,
    {
      method: "GET",
    },
  ).then(
    async (response) => (await response.json()) as RequestOneDayReturnResponse,
  );
  return response;
}

export default async function Weather({ params }: WeatherProps) {
  const data = await getData({ locationKey: params.locationKey });

  return (
    <CardCover
      className="col-span-1 row-span-2 !border-none !bg-transparent !p-0"
      animation={{ delay: 0.6 }}
    >
      <div className="flex h-full flex-col gap-4">
        <Header />
        <WeatherDetails data={data} />
      </div>
    </CardCover>
  );
}
