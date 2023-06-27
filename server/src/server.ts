import "dotenv/config";

import cors from "@fastify/cors";
import fastify from "fastify";
import { citiesRoutes } from "./routes/cities";
import { weatherRoutes } from "./routes/weathers";

export const app = fastify();

const PORT = Number(process.env.PORT);

app.register(cors, {
  origin: [
    // add host site of deploy
    "http://localhost:3000",
  ],
});

app.register(citiesRoutes);
app.register(weatherRoutes);

app
  .listen({
    port: PORT,
  })
  .then(() => {
    console.log(`🚀 HTTP server running on http://localhost:${PORT}`);
  });
