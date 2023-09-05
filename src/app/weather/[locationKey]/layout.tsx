import { WeatherLayout } from "@/components/weather-layout";
import { ReactNode } from "react";

interface WeatherLayoutProps {
  children: ReactNode;
  detail: ReactNode;
  forecasts: ReactNode;
}

export default function Layout({
  children,
  detail,
  forecasts,
}: WeatherLayoutProps) {
  return (
    <WeatherLayout>
      <div className="grid grid-cols-2">
        {children}
        <div className="grid-rows-10 grid">
          {detail}
          {forecasts}
        </div>
      </div>
    </WeatherLayout>
  );
}
