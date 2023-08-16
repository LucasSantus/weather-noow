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

  return (
    <Fragment>
      {cities?.map((city) => (
        <div
          key={city.lat + city.lon}
          className="bg-foreground/10 hover:bg-foreground/20 border border-foreground/30 text-foreground cursor-pointer px-5 py-4 rounded select-text w-full"
          onClick={() => onHandleSelect(city)}
        >
          {city.name} - {city.country} - {city?.state}
        </div>
      ))}
    </Fragment>
  );
}
