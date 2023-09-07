import { CardCover } from "@/components/card-cover";
import WeatherAPI from "@/lib/api/weather";
import { WeatherDetailsToDay } from "./components/WeatherDetailsToDay";

interface DetailProps {
  params: {
    locationKey: string;
  };
}

export default async function Detail({ params }: DetailProps) {
  const details = await WeatherAPI.getDetails({
    locationKey: params.locationKey,
  });

  return (
    <CardCover
      title="Detalhes do clima hoje"
      className="col-span-1 row-span-1"
      animation={{ delay: 0.7 }}
    >
      <WeatherDetailsToDay details={details} locationKey={params.locationKey} />
    </CardCover>
  );
}
