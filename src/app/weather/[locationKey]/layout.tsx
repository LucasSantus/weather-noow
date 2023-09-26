import { WeatherLayout } from "@/components/weather-layout";
import { Metadata } from "next";
import { ReactNode } from "react";

interface WeatherLayoutProps {
  children: ReactNode;
  detail: ReactNode;
  forecasts: ReactNode;
}

export const metadata: Metadata = {
  title: "Weather Noow | Detalhes",
};

export default function Layout({
  children,
  detail,
  forecasts,
}: WeatherLayoutProps) {
  return (
    <WeatherLayout>
      <div className="grid h-full grid-rows-2 gap-4 md:grid-flow-col md:grid-cols-2">
        {children}
        {detail}
        {forecasts}
      </div>
    </WeatherLayout>
  );
}
