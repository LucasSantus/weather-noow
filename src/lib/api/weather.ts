import { RequestDetailsReturnResponse } from "@/app/api/weather/details/types/return";
import { RequestForecastReturnResponse } from "@/app/api/weather/forecast/types/return";
import { RequestOneDayReturnResponse } from "@/app/api/weather/one-day/types/return";

export default class WeatherAPI {
  static async getOneDay({ locationKey }: { locationKey: string }) {
    const response = await fetch(
      "http://localhost:3000/api/weather/one-day?locationKey=" + locationKey,
      {
        method: "GET",
      },
    );
    const data = (await response.json()) as RequestOneDayReturnResponse;
    return data;
  }

  static async getDetails({ locationKey }: { locationKey: string }) {
    const response = await fetch(
      "http://localhost:3000/api/weather/details?locationKey=" + locationKey,
      {
        method: "GET",
      },
    );

    const data = (await response.json()) as RequestDetailsReturnResponse;

    return data;
  }

  static async getForecasts({ locationKey }: { locationKey: string }) {
    const response = await fetch(
      "http://localhost:3000/api/weather/forecast?locationKey=" + locationKey,
      {
        method: "GET",
      },
    );

    const data = (await response.json()) as RequestForecastReturnResponse;

    return data;
  }
}
