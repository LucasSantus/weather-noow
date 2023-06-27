import { FastifyInstance } from "fastify";
import { z } from "zod";
import { CityAPI } from "../lib/api/cityAPI";

export async function citiesRoutes(app: FastifyInstance) {
  app.get("/cities", async (request) => {
    const bodySchema = z.object({
      city: z.string(),
      limit: z.coerce.number(),
    });

    const { city, limit } = bodySchema.parse(request.query);

    const response = await CityAPI.getCitiesPerName({
      params: {
        q: city,
        limit,
        appid: process.env.WEATHER_API_ID,
      },
    });

    return response;
  });
}
