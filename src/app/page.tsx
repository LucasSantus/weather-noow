"use client";

import { Input } from "@/components/Input";
import { useCities } from "@/hooks/api/useCities";
import { useState } from "react";

export default function Home() {
  const [searchCity, setSearchCity] = useState("São Bento Abade");

  const { data: cities, isLoading } = useCities(searchCity, {
    enabled: !!searchCity,
  });

  return (
    <main className="">
      <div className="">
        <Input
          type="text"
          placeholder="Search City"
          onChange={(event) => {
            setSearchCity(event.target.value);
          }}
          value={searchCity}
        />
      </div>

      <div className="text-white">
        {isLoading ? (
          <>carregando ae carai</>
        ) : !cities ? (
          <>tem cidade não</>
        ) : (
          cities!.map((city) => {
            return (
              <div key={city.lat}>
                {city.name} - {city.country} - {city.state}
              </div>
            );
          })
        )}
      </div>
    </main>
  );
}
