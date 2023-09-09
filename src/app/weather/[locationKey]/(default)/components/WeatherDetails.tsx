import { RequestOneDayReturnResponse } from "@/app/api/weather/one-day/types/return";
import { CurrentClock } from "@/components/current-clock";
import { formatImagePerHour } from "@/utils/formatImagePerHour";
import dayjs from "dayjs";

import { Check } from "lucide-react";
import Image from "next/image";

interface WeatherDetailsProps {
  data: RequestOneDayReturnResponse;
}

export function WeatherDetails({ data }: WeatherDetailsProps) {
  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0">
        <Image
          src={formatImagePerHour()}
          alt="sun"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
          className="rounded-lg"
        />
      </div>
      <div className="absolute inset-0 z-10 flex h-full flex-col justify-between rounded-lg p-12">
        <div className="flex flex-col-reverse justify-between sm:flex-row">
          <div className="grid">
            <span className="text-xl font-bold">
              {data.cityName}, {data.uf}
            </span>
            <span className="text-lg capitalize">
              {dayjs().format("dddd, D [de] MMMM [de] YYYY")}
            </span>
          </div>

          <span className="flex justify-end text-2xl font-semibold">
            <CurrentClock />
          </span>
        </div>

        <div className="flex flex-col-reverse items-center justify-between lg:flex-row">
          <div className="grid text-center">
            <span className="text-6xl font-bold sm:text-7xl md:text-8xl">
              {Math.floor(data.tempCurrent)}ºc
            </span>
            <div className="flex flex-col gap-1 text-center text-xl sm:flex-row">
              <span className="flex justify-center gap-1 sm:justify-start">
                {Math.floor(data.tempMin)}ºc / {Math.floor(data.tempMax)}ºc
                <span className="hidden sm:block"> - </span>
              </span>

              <span>{data.weatherText}</span>
            </div>
          </div>

          <div>
            <Check size={140} />
          </div>
        </div>
      </div>
    </div>
  );
}
