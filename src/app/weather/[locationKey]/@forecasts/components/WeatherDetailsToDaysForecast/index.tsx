"use client";

import { RequestForecastReturnResponse } from "@/app/api/weather/forecast/types/return";
import { TRANSITION_DURATION } from "@/constants/globals";
import dayjs from "dayjs";
import { CloudLightning } from "lucide-react";
import { useRef, useState } from "react";
import { WeatherDetailsToDaysForecastDay } from "./WeatherDetailsToDaysForecastDay";

interface WeatherDetailsToDaysForecastProps {
  data: RequestForecastReturnResponse;
}

export function WeatherDetailsToDaysForecast({
  data,
}: WeatherDetailsToDaysForecastProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const x = e.pageX - (containerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 1;
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  return (
    <div
      className="flex h-full w-full flex-nowrap gap-4 overflow-x-auto py-4 pb-8 text-center"
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseUp}
    >
      {data.map(({ date, tempMax, tempMin }, index) => {
        const textToDate = index === 0 ? "Amanhâ" : dayjs(date).format("ddd");

        const delay = TRANSITION_DURATION * (index + 1);

        return (
          <WeatherDetailsToDaysForecastDay
            key={date}
            day={textToDate}
            icon={CloudLightning}
            maxTemperature={Number(tempMax.toFixed(0))}
            minTemperature={Number(tempMin.toFixed(0))}
            animation={{
              delay,
            }}
          />
        );
      })}
    </div>
  );
}
