import { CardCover } from "@/components/CardCover";

interface WeatherProps {
  params: {
    lat: string;
    lon: string;
  };
}

async function getData({ params }: WeatherProps) {
  const response = await fetch(
    `http://localhost:3000/api/weather/detail?lat=${params.lat}&lon=${params.lon}`,
  );

  return response.json();
}

export default async function Weather({ params }: WeatherProps) {
  const data = await getData({ params });

  return (
    <CardCover>
      <h1>Weather</h1>
      {JSON.stringify(data)}
    </CardCover>
  );
}
