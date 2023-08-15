import { CitiesQueryResponse, City } from "@/types/api/cities";
import { Dispatch, PropsWithChildren, SetStateAction, createContext, useState } from "react";

interface CityContextProps {
  cities: CitiesQueryResponse | null;
  setCities: Dispatch<SetStateAction<CitiesQueryResponse | null>>;
  selectedCity: City | null;
  setSelectedCity: Dispatch<SetStateAction<City | null>>;
}

export const CityContext = createContext<CityContextProps | null>(null);

export function CityProvider({ children }: PropsWithChildren) {
  const [cities, setCities] = useState<CitiesQueryResponse | null>(null);
  const [selectedCity, setSelectedCity] = useState<City | null>(null);

  return (
    <CityContext.Provider value={{ cities, setCities, selectedCity, setSelectedCity }}>{children}</CityContext.Provider>
  );
}
