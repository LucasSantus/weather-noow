import { create } from "zustand";

type City = {
  city: string;
  setCity: (value: string) => void;
};

export const useCity = create<City>()((set) => ({
  city: "",
  setCity: (value: string) => set({ city: value }),
}));
