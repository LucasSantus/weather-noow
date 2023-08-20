import { CardCover } from "@/components/CardCover";
import { WeatherLayout } from "@/components/WeatherLayout";
import { ReactNode } from "react";

interface WeatherLayoutProps {
  children: ReactNode;
  detail: ReactNode;
  forecasts: ReactNode;
  weatherdetail: ReactNode;
}

export default function Layout({
  detail,
  forecasts,
  weatherdetail,
}: WeatherLayoutProps) {
  return (
    <WeatherLayout>
      <div className="grid h-full flex-1 grid-cols-2 gap-4 p-5">
        <CardCover>{detail}</CardCover>
        <div className="grid-rows-10 grid gap-4">
          <CardCover title="Detalhes do clima hoje" className="row-span-6">
            {weatherdetail}
          </CardCover>
          <CardCover title="Detalhes do clima hoje" className="row-span-4">
            {forecasts}
          </CardCover>
        </div>
      </div>
    </WeatherLayout>
  );
}
