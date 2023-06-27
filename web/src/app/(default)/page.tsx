"use client";

import { Input } from "@/components/Input";
import { Weather } from "@/components/Weather";
import { useCities } from "@/hooks/api/useCities";
import { Search } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Home() {
  const [searchCity, setSearchCity] = useState("");

  const { data: cities, refetch } = useCities({
    params: {
      city: searchCity,
      limit: 5,
    },
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
        <form className="flex w-72 rounded-full bg-[#222222]">
          <Input
            type="text"
            placeholder="Search City"
            value={searchCity}
            className="z-10 rounded-s-full !bg-[#222222]"
            onChange={(event) => setSearchCity(event.target.value)}
          />

          <button
            className="flex w-12 cursor-pointer items-center justify-end rounded-e-full px-4"
            type="button"
            onClick={handleSubmitSearch}
          >
            <Search className="stroke-white" size={18} />
          </button>
        </form>
      </header>

      <div className="text-white">
        {cities?.map((city, index) => (
          <Weather city={city} key={index} />
        ))}
      </div>
    </main>
  );
}
