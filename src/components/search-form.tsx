"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { bounceAnimationHorizontalDislocate } from "@/utils/animation/bounceAnimationHorizontalDislocate";
import { bounceAnimationVerticalDislocate } from "@/utils/animation/bounceAnimationVerticalDislocate";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { Fragment } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Framing } from "./framing";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";
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
  const { push } = useRouter();

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
  }

  return (
    <div className="w-full">
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div className="grid gap-2">
            <Framing
              {...bounceAnimationVerticalDislocate({ delay: 0.4 })}
              className="grid gap-2 sm:flex"
            >
              <FormField
                control={control}
                name="search"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Pesquisar..."
                        className="w-full flex-auto xs:w-[300px] md:w-[500px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="h-14 sm:w-14"
                icon={<Search />}
                isLoading={isFetching}
                disabled={isFetching}
              />
            </Framing>

            {isFetching ? (
              <ScrollArea className="h-full max-h-[36rem] w-full rounded-md border p-4">
                <Skeleton className="h-10" />
              </ScrollArea>
            ) : (
              <Fragment>
                {cities.length > 0 && (
                  <ScrollArea className="h-full max-h-[36rem] w-full rounded-md border p-4">
                    <div className="grid w-full gap-3">
                      {cities.map(
                        (
                          { locationKey, cityName, stateName, countryName },
                          index,
                        ) => {
                          const time = index * 0.1;

                          return (
                            <Framing
                              key={locationKey}
                              {...bounceAnimationHorizontalDislocate({
                                delay: 1.4 * time,
                              })}
                            >
                              <Button
                                className="flex w-full items-start justify-start"
                                onClick={() => push("/weather/" + locationKey)}
                                variant="outline"
                              >
                                {cityName}, {stateName}, {countryName}
                              </Button>
                            </Framing>
                          );
                        },
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
