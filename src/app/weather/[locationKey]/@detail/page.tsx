import { CardCover } from "@/components/card-cover";

interface DetailProps {
  params: {
    lat: string;
    lon: string;
  };
}

// async function getData({ params }: DetailProps) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Promise resolved after 3000ms");
//     }, 9000);
//   });

//   const response = await fetch(
//     `http://localhost:3000/api/weather/detail?lat=${params.lat}&lon=${params.lon}`,
//   );

//   return response.json();
// }

export default async function Detail({ params }: DetailProps) {
  // const data = await getData({ params });

  return (
    <CardCover title="Detalhes do clima hoje" className="row-span-6">
      detail
      {/* <WeatherDetailsToDay /> */}
    </CardCover>
  );
}
