"use client";

import { Input } from "@/components/Input";
import { useCities } from "@/hooks/api/useCities";
import { Search } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Home() {
  const [searchCity, setSearchCity] = useState("");

  const {
    data: cities,
    isLoading,
    refetch,
  } = useCities(searchCity, {
    enabled: false,
  });

  function handleSubmitSearch() {
    refetch();

    toast("Pesquisa realizada!", {
      type: "success",
    });
  }

  return (
    <main>
      <header>
        <form className="flex bg-[#222222] rounded-full w-72">
          <Input
            type="text"
            placeholder="Search City"
            value={searchCity}
            className="z-10 !bg-[#222222] rounded-s-full"
            onChange={(event) => setSearchCity(event.target.value)}
          />

          <button
            className="cursor-pointer flex justify-end px-4 items-center w-12 rounded-e-full"
            type="button"
            onClick={handleSubmitSearch}
          >
            <Search className="stroke-white" size={18} />
          </button>
        </form>
      </header>

      <div className="text-white">
        {isLoading ? (
          <>carregando ae</>
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
