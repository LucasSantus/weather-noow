import { CardCover } from "@/components/CardCover";
import { SearchForm } from "@/components/SearchForm";
import { WeatherLayout } from "@/components/WeatherLayout";
import { WeatherDetails } from "./components/WeatherDetails";

interface WeatherProps {
  params: {
    cityName: string;
  };
}

export default function Weather({ params }: WeatherProps) {
  return (
    <WeatherLayout>
      <div className="grid grid-cols-2 p-5 flex-1 gap-5 h-full">
        <CardCover>
          <SearchForm />

          <WeatherDetails cityName={params.cityName} />
        </CardCover>
        <CardCover></CardCover>
      </div>
    </WeatherLayout>
  );
}
