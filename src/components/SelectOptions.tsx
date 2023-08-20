"use client";

import { useCityContext } from "@/hooks/useCityContext";
import { City } from "@/types/api/cities";
import { useRouter } from "next/navigation";
import { Fragment } from "react";

interface SelectOptionsProps {}

export function SelectOptions({}: SelectOptionsProps): JSX.Element {
  const { push } = useRouter();
  const { cities, setSelectedCity } = useCityContext();

  function onHandleSelect(city: City) {
    setSelectedCity(city);

    push("/weather");
  }

  console.log(cities);

  return (
    <Fragment>
      {cities?.map((city) => (
        <div
          key={city.lat + city.lon}
          className="bg-foreground/10 hover:bg-foreground/20 border-foreground/30 text-foreground w-full cursor-pointer select-text rounded border px-5 py-4"
          onClick={() => onHandleSelect(city)}
        >
          {city.name} - {city.country} - {city?.state}
        </div>
      ))}
    </Fragment>
  );
}
