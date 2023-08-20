import { CardCover } from "@/components/CardCover";

interface DetailProps {
  params: {
    lat: string;
    lon: string;
  };
}

async function getData({ params }: DetailProps) {
  const response = await fetch(
    `http://localhost:3000/api/weather/detail?lat=${params.lat}&lon=${params.lon}`,
  );

  return response.json();
}

export default async function Detail({ params }: DetailProps) {
  const data = await getData({ params });

  return (
    <CardCover title="Detalhes do clima hoje" className="row-span-6">
      <h1>Detail</h1>
    </CardCover>
  );
}
