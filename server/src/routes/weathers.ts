import { FastifyInstance } from "fastify";
import { z } from "zod";
import { WeatherAPI } from "../lib/api/weatherAPI";

export async function weatherRoutes(app: FastifyInstance) {
  app.get("/weathers", async (request) => {
    const bodySchema = z.object({
      latitude: z.coerce.number(),
      longitude: z.coerce.number(),
      count: z.coerce.number(),
    });

    const { latitude, longitude, count } = bodySchema.parse(request.query);

    const response = await WeatherAPI.getWeather({
      params: {
        lat: latitude,
        lon: longitude,
        cnt: count,
        appid: process.env.WEATHER_API_ID,
      },
    });

    return response;
  });
}
