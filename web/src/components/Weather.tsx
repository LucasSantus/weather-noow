import { CityData } from "@/hooks/api/useCities";
import { useWeathers } from "@/hooks/api/useWeather";
import { FC } from "react";

interface WeatherProps {
  city: CityData;
}

export const Weather: FC<WeatherProps> = ({ city }) => {
  const { data: weathers, isLoading } = useWeathers({
    params: {
      latitude: city.lat,
      longitude: city.lon,
      count: 7,
    },
  });

  if (isLoading || !weathers) return null;

  console.log({ weathers });

  return (
    <div className="border border-b-2">
      {weathers.list.map(({ main, dt_txt }, index) => {
        return (
          <div key={index}>
            <div>{dt_txt}</div>
            <div>{main.temp_max}</div>
            <div>{main.temp_min}</div>
          </div>
        );
      })}
    </div>
  );
};
