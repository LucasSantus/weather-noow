"use client";

import { useCityContext } from "@/hooks/useCityContext";
import { api } from "@/lib/axios";
import { CitiesQueryResponse } from "@/types/api/cities";
import { zodResolver } from "@hookform/resolvers/zod";
import { Search } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { useToast } from "./ui/use-toast";

interface SearchFormProps {}

export const searchFormSchema = z.object({
  search: z.string().nonempty("Campo obrigatório"),
});

export type SearchFormData = z.infer<typeof searchFormSchema>;

export function SearchForm({}: SearchFormProps) {
  const { setCities } = useCityContext();
  const { toast } = useToast();

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

    toast({
      title: "Uh oh! Something went wrong.",
      description: "There was a problem with your request.",
    });

    setCities(data ?? []);
  }

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onHandleSubmit)} className="grid grid-cols-6 gap-4 w-full">
        <div className="col-span-5">
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
        </div>
        <div className="col-span-1">
          <Button variant="default" className="h-14">
            <Search className="h-6 w-6" />
          </Button>
        </div>
      </form>
    </Form>
  );
}
