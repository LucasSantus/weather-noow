import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { WeatherAPI } from "../api/weather";

export async function weatherRoutes(app: FastifyInstance) {
  app.get("/weather/one-call", async (request: FastifyRequest, reply: FastifyReply) => {
    const bodySchema = z.object({
      latitude: z.coerce.number(),
      longitude: z.coerce.number(),
    });

    const { latitude, longitude } = bodySchema.parse(request.query);

    try {
      const { data, status } = await WeatherAPI.getOneCall({
        params: {
          lat: latitude,
          lon: longitude,
          exclude: "minutely, hourly",
          appid: process.env.WEATHER_API_ID,
        },
      });

      if (status !== 200) return reply.status(400).send({ error: "Erro ao tentar buscar os dados climáticos" });

      return reply.send(data);
    } catch (error) {
      console.error(error);
      return reply.status(500).send({ error: "Erro ao obter dados climáticos" });
    }
  });
}
