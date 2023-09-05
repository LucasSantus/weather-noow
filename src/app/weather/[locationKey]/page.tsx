import { CardCover } from "@/components/card-cover";
import { WeatherDetails } from "./components/WeatherDetails";

interface WeatherProps {
  params: {
    locationKey: string;
  };
}

export default async function Weather({ params }: WeatherProps) {
  return (
    <CardCover>
      <WeatherDetails locationKey={params.locationKey} />
    </CardCover>
  );
}
