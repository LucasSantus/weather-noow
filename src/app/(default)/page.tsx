import { Logo } from "@/components/icons/Logo";
import { WeatherLayout } from "@/components/weather-layout";
import { SearchForm } from "./components/search-form";

export default function Home() {
  return (
    <WeatherLayout>
      <div className="flex justify-center">
        <div className="flex flex-col">
          <Logo className="mt-3 flex h-16 w-full items-center justify-center sm:mt-10" />

          <SearchForm />
        </div>
      </div>
    </WeatherLayout>
  );
}
