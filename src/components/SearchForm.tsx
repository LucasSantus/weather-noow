"use client";

import { useCityContext } from "@/hooks/useCityContext";
import { api } from "@/lib/axios";
import { CitiesQueryResponse } from "@/types/api/cities";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";

interface SearchFormProps {}

export const searchFormSchema = z.object({
  search: z.string(),
});

export type SearchFormData = z.infer<typeof searchFormSchema>;

export function SearchForm({}: SearchFormProps) {
  const { setCities } = useCityContext();

  const form = useForm<SearchFormData>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: {
      search: "",
    },
  });

  const { handleSubmit, control } = form;

  async function onHandleSubmit({ search }: SearchFormData) {
    const params = {
      city: search,
    };

    const { data } = await api
      .get<CitiesQueryResponse>("/api/weather/cities", { params })
      .then((response) => response ?? []);

    setCities(data ?? []);
  }

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onHandleSubmit)}>
        <FormField
          control={control}
          name="search"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Pesquisar..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button>Pesquisar</Button>
      </form>
    </Form>
  );
}
