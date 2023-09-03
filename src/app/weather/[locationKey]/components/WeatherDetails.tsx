"use client";

interface WeatherDetailsProps {}

export function WeatherDetails({}: WeatherDetailsProps) {
  return (
    <div className="bg-custom-gray-700 relative flex flex-1 rounded-lg">
      weather
      {/* <div className="flex flex-1 justify-between p-10">
        <div className="flex flex-col">
          <span className="text-xl font-bold">{data.name}</span>
          <span className="text-lg capitalize">
            {dayjs().format("dddd, D [de] MMMM [de] YYYY")}
          </span>
        </div>

        <div>
          <span className="text-xl font-semibold">
            <CurrentClock />
          </span>
        </div>
      </div>
      <div className="absolute bottom-10 left-10 right-10">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <span className="text-9xl font-bold">
              {Math.floor(data.main.temp)}ºc
            </span>
            <span className="text-xl">
              {Math.floor(data.main.temp_min)}ºc /{" "}
              {Math.floor(data.main.temp_max)}ºc - Poucas nuvens
            </span>
          </div>

          <Check size={140} />
        </div>
      </div> */}
    </div>
  );
}
