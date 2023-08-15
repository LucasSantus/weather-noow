import { CityContext } from "@/contexts/CityContext";
import { useContext } from "react";

export function useCityContext() {
  const context = useContext(CityContext);

  if (!context) {
    throw new Error("useCityContext must be used within a CityProvider");
  }

  return context;
}
