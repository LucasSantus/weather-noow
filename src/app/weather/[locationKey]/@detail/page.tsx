import { CardCover } from "@/components/card-cover";
import { WeatherDetailsToDay } from "./components/WeatherDetailsToDay";

interface DetailProps {
  params: {
    locationKey: string;
  };
}

export default async function Detail({ params }: DetailProps) {
  return (
    <CardCover title="Detalhes do clima hoje" className="row-span-6">
      <WeatherDetailsToDay locationKey={params.locationKey} />
    </CardCover>
  );
}
