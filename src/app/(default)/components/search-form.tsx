"use client";

import { RequestCitiesReturnResponse } from "@/app/api/weather/cities/types/return";
import { Framing } from "@/components/framing";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import { bounceAnimationHorizontalDislocate } from "@/utils/animation/bounceAnimationHorizontalDislocate";
import { bounceAnimationVerticalDislocate } from "@/utils/animation/bounceAnimationVerticalDislocate";
import { SearchFormData, searchFormSchema } from "@/validation/search";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Search } from "lucide-react";
import Link from "next/link";
import { Fragment } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

interface SearchFormProps {}

export function SearchForm({}: SearchFormProps) {
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
    mutateAsync,
  } = useMutation({
    mutationKey: ["cities"],
    mutationFn: async (values: SearchFormData) => {
      const response = await axios
        .post<RequestCitiesReturnResponse>("/api/weather/cities", {
          params: values,
        })
        .then(({ data }) => {
          if (data.length === 0) {
            toast.error("Não foram encontradas cidades com esse nome.");
          }

          return data;
        })
        .catch((error) => {
          if (error.response.data.error.message)
            toast.error(error.response.data.error.message);

          return [] as RequestCitiesReturnResponse;
        });

      return response;
    },
  });

  async function onSubmit({ search }: SearchFormData) {
    mutateAsync({ search });
  }

  return (
    <div className="w-full">
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div className="grid gap-2">
            <div className="text-center">
              <Framing
                {...bounceAnimationVerticalDislocate({ delay: 0.4 })}
                className="text-3xl font-semibold"
              >
                <span className="text-black/70 dark:text-custom-gray-100">
                  Boas vindas ao{" "}
                </span>
                <span className="text-custom-blue-light-100">Weather Noow</span>
              </Framing>

              <Framing
                {...bounceAnimationVerticalDislocate({ delay: 0.6 })}
                className="text-xl text-black/60 dark:text-custom-gray-200"
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
                        autoComplete="off"
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
                  <ScrollArea className="h-full max-h-[36rem] w-full rounded-md border bg-custom-gray-200/30 p-4">
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
                                    "flex w-full items-start justify-start bg-custom-gray-100/50 text-custom-gray-400 !opacity-80 hover:border-custom-gray-200/50  hover:opacity-60 dark:border dark:border-custom-gray-200/30 dark:border-gray-600 dark:text-custom-gray-100",
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
