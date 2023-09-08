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
    <WeatherLayout
      header={{
        className: "!bg-custom-gray-700",
      }}
    >
      <div className="grid h-full grid-rows-2 gap-4 md:grid-flow-col md:grid-cols-2">
        {children}
        {detail}
        {forecasts}
      </div>
    </WeatherLayout>
  );
}
