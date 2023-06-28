"use client";

import { Input } from "@/components/Input";
import { Weather } from "@/components/Weather";
import { useCities } from "@/hooks/api/useCities";
import { useCity } from "@/hooks/useCity";
import { zodResolver } from "@hookform/resolvers/zod";
import { MapPin, Search } from "lucide-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";

export const searchFormSchema = z.object({
  search: z.string(),
});

export type SearchFormData = z.infer<typeof searchFormSchema>;

export default function Home() {
  const { city, setCity } = useCity();

  const { data: cities, refetch } = useCities({
    params: {
      city,
      limit: 5,
    },
    enabled: false,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchFormData>({
    resolver: zodResolver(searchFormSchema),
  });

  // check if any field has an error
  useEffect(() => {
    const keys = Object.keys(errors) as Array<keyof SearchFormData>;

    if (keys.length) {
      keys.forEach((key) => {
        toast(errors[key]?.message, {
          type: "error",
        });
      });
    }
  }, [errors]);

  async function handleSubmitSearch({ search }: SearchFormData) {
    await setCity(search);

    refetch();
  }

  return (
    <main>
      <header className="flex items-center gap-2">
        <MapPin className="text-white" />

        <form
          className="flex w-72 rounded-full bg-[#222222]"
          onSubmit={handleSubmit(handleSubmitSearch)}
        >
          <Input
            type="text"
            placeholder="Search City"
            className="z-10 rounded-s-full !bg-[#222222]"
            {...register("search")}
          />

          <button
            className="flex w-12 cursor-pointer items-center justify-end rounded-e-full px-4"
            type="submit"
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
