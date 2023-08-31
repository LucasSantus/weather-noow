"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Search } from "lucide-react";
import Link from "next/link";
import { Fragment } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";
import { Skeleton } from "./ui/skeleton";

interface SearchFormProps {}

export const searchFormSchema = z.object({
  search: z.string({
    required_error: "Please enter a search term.",
  }),
});

export type SearchFormData = z.infer<typeof searchFormSchema>;

interface City {
  locationKey: string;
  cityName: string;
  stateName: string;
  countryName: string;
}

export function SearchForm({}: SearchFormProps) {
  const form = useForm<SearchFormData>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: {
      search: "Três Corações",
    },
  });

  const { watch, handleSubmit, control } = form;

  const {
    data: cities = [],
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ["city"],
    queryFn: async () => {
      return axios
        .post<City[]>("/api/weather/cities", { city: watch("search") })
        .then(({ data }) => data);
    },
    enabled: false,
  });

  function onSubmit(data: SearchFormData) {
    refetch();

    // toast({
    //   title: "You submitted the following values:",
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    // });
  }

  return (
    <div className="w-full">
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div className="grid gap-3">
            <div className="flex w-full flex-1 gap-3">
              <FormField
                control={control}
                name="search"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Insira a Cidade"
                        className="w-[500px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="h-13 w-13 max-h-14">
                <Search />
              </Button>
            </div>

            {isFetching ? (
              <Skeleton className="h-20 w-full" />
            ) : (
              <Fragment>
                {cities.length > 0 && (
                  <ScrollArea className="h-max-60 h-full w-full rounded-md border">
                    <div className="w-full p-4">
                      {cities.map(
                        (
                          { locationKey, cityName, stateName, countryName },
                          index,
                        ) => (
                          <Fragment key={locationKey}>
                            <Link
                              href={"/weather/" + locationKey}
                              className="w-full bg-slate-950"
                            >
                              {cityName}, {stateName}, {countryName}
                            </Link>
                            {index < cities.length - 1 && (
                              <Separator className="my-2" />
                            )}
                          </Fragment>
                        ),
                      )}
                    </div>
                  </ScrollArea>
                )}
              </Fragment>
            )}
          </div>
        </form>
      </Form>
    </div>
  );
}
