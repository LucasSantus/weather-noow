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
      <div className="grid h-full flex-1 grid-cols-2 gap-4 p-5">
        {children}
        <div className="grid-rows-10 grid gap-4">
          {detail}
          {forecasts}
        </div>
      </div>
    </WeatherLayout>
  );
}
