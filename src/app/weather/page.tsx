import { CardCover } from "@/components/CardCover";
import { SearchForm } from "@/components/SearchForm";
import { WeatherLayout } from "@/components/WeatherLayout";

export default function Weather() {
  return (
    <WeatherLayout>
      <div className="grid grid-cols-2 p-5 flex-1 gap-5">
        <CardCover>
          <SearchForm />
        </CardCover>
        <CardCover></CardCover>
      </div>
    </WeatherLayout>
  );
}
