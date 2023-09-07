import { CardCover } from "@/components/card-cover";
import WeatherAPI from "@/lib/api/weather";
import { WeatherDetails } from "./components/WeatherDetails";

interface WeatherProps {
  params: {
    locationKey: string;
  };
}

export default async function Weather({ params }: WeatherProps) {
  const oneDay = await WeatherAPI.getOneDay({
    locationKey: params.locationKey,
  });

  return (
    <CardCover className="col-span-1 row-span-2" animation={{ delay: 0.6 }}>
      <WeatherDetails oneDay={oneDay} locationKey={params.locationKey} />
    </CardCover>
  );
}
