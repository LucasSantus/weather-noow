import { CityData } from "@/hooks/api/useCities";
import { useWeathers } from "@/hooks/api/useWeathers";
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

  console.log(weathers, isLoading);

  return (
    <div className="border border-b-2">
      <p>Nome: {city.name}</p>
      <p>País: {city.country}</p>
      <p>Estado: {city.state}</p>
      <p>Latitude: {city.lat}</p>
      <p>Longitude: {city.lon}</p>
    </div>
  );
};
