"use client";

import { useCityContext } from "@/hooks/useCityContext";
import { City } from "@/types/api/cities";
import { useRouter } from "next/navigation";
import { Fragment } from "react";

interface SelectOptionsProps {}

export function SelectOptions({}: SelectOptionsProps): JSX.Element {
  const { push } = useRouter();
  const { cities, setSelectedCity } = useCityContext();

  // if (cities) if (cities.length === 0) return <div className="">Nenhuma cidade encontrada</div>;

  function onHandleSelect(city: City) {
    setSelectedCity(city);

    push("/weather");
  }

  return (
    <Fragment>
      {cities?.map((city) => (
        <div
          key={city.lat + city.lon}
          className="bg-gray-600 hover:bg-gray-500 cursor-pointer hover:text-gray-200 text-gray-100 px-5 py-4 rounded select-text w-full"
          onClick={() => onHandleSelect(city)}
        >
          {city.name} - {city.country} - {city?.state}
        </div>
      ))}
    </Fragment>
  );
}
