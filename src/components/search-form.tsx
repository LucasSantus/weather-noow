"use client";

import { RequestCitiesReturnResponse } from "@/app/api/weather/cities/types/return";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { bounceAnimationHorizontalDislocate } from "@/utils/animation/bounceAnimationHorizontalDislocate";
import { bounceAnimationVerticalDislocate } from "@/utils/animation/bounceAnimationVerticalDislocate";
import { SearchFormData, searchFormSchema } from "@/validation/search";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Search } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Fragment } from "react";
import { useForm } from "react-hook-form";
import { Framing } from "./framing";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";
import { Skeleton } from "./ui/skeleton";

interface SearchFormProps {}

export function SearchForm({}: SearchFormProps) {
  const { push } = useRouter();

  const form = useForm<SearchFormData>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: {
      search: "",
    },
  });

  const { handleSubmit, control } = form;

  const {
    data: cities = [],
    isLoading,
    mutate,
  } = useMutation({
    mutationFn: (values: SearchFormData) => {
      return fetch(process.env.NEXT_PUBLIC_API_URL + "/api/weather/cities", {
        method: "POST",
        body: JSON.stringify(values),
      }).then(
        async (response) =>
          (await response.json()) as RequestCitiesReturnResponse,
      );
    },
  });

  async function onSubmit({ search }: SearchFormData) {
    mutate({ search });
  }

  return (
    <div className="w-full">
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div className="grid gap-2">
            <div className="text-center">
              <Framing
                {...bounceAnimationVerticalDislocate({ delay: 0.4 })}
                className="text-3xl"
              >
                <span className="text-custom-gray-100">Boas vindas ao </span>
                <span className="text-custom-blue-light-100">Weather Noow</span>
              </Framing>

              <Framing
                {...bounceAnimationVerticalDislocate({ delay: 0.6 })}
                className="text-xl text-custom-gray-200"
              >
                Escolha um local para ver a previsão do tempo
              </Framing>
            </div>
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
                isLoading={isLoading}
                disabled={isLoading}
                aria-label="Search for a city"
              />
            </Framing>

            {isLoading ? (
              <ScrollArea className="h-full max-h-[36rem] w-full rounded-md border p-4">
                <div className="grid w-full gap-3">
                  <Skeleton className="h-10" />
                  <Skeleton className="h-10" />
                </div>
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

                          const cityDescription = `${cityName}, ${stateName}, ${countryName}`;

                          return (
                            <Framing
                              key={locationKey}
                              {...bounceAnimationHorizontalDislocate({
                                delay: 1.4 * time,
                              })}
                            >
                              <Link
                                href={"/weather/" + locationKey}
                                className={buttonVariants({
                                  className:
                                    "flex w-full items-start justify-start",
                                  variant: "outline",
                                })}
                              >
                                {cityDescription}
                              </Link>
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
