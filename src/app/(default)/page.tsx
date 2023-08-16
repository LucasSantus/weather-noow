import { SearchForm } from "@/components/SearchForm";
import { SelectOptions } from "@/components/SelectOptions";
import { ToggleMode } from "@/components/ToggleMode";
import { WeatherLayout } from "@/components/WeatherLayout";

export default function Home() {
  return (
    <WeatherLayout>
      <div className="flex justify-center">
        <div className="mt-10">
          <SearchForm />
          <SelectOptions />
        </div>
      </div>

      <div className="fixed top-5 right-5">
        <ToggleMode />
      </div>
    </WeatherLayout>
  );
}
