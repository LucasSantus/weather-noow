"use client";

import { PropsWithChildren } from "react";
import { CityProvider } from "./CityContext";

export function ServerProviders({ children }: PropsWithChildren) {
  return <CityProvider>{children}</CityProvider>;
}
