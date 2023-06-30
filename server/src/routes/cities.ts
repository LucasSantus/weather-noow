import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { CityAPI } from "../api/city";

export async function citiesRoutes(app: FastifyInstance) {
  app.get("/cities", async (request: FastifyRequest, reply: FastifyReply) => {
    const bodySchema = z.object({
      city: z.string(),
      limit: z.coerce.number().nullish(),
    });

    const { city, limit = 5 } = bodySchema.parse(request.query);

    try {
      const { data, status } = await CityAPI.getCities({
        params: {
          q: city,
          limit,
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
