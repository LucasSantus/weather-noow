"use client";

import { Toaster } from "@/components/ui/toaster";
import { PropsWithChildren } from "react";
import { CityProvider } from "./CityContext";

export function ServerProviders({ children }: PropsWithChildren) {
  return (
    <CityProvider>
      <Toaster />
      {children}
    </CityProvider>
  );
}
