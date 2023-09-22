import { WeatherLayout } from "@/components/weather-layout";
import { SearchForm } from "./components/search-form";

export default function Home() {
  return (
    <WeatherLayout
      header={{
        isBackButton: false,
      }}
    >
      <div className="flex justify-center">
        <div className="mt-10">
          <SearchForm />
        </div>
      </div>
    </WeatherLayout>
  );
}
