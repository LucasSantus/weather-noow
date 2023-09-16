import { RequestOneDayReturnResponse } from "@/app/api/weather/one-day/types/return";
import { CardCover } from "@/components/card-cover";
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
      className="col-span-1 row-span-2 !p-0"
      animation={{ delay: 0.6 }}
    >
      <WeatherDetails data={data} />
    </CardCover>
  );
}
