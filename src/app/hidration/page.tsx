import getQueryClient from "@/utils/getQueryClient";
import Hydrate from "@/utils/hydrate.client";
import { dehydrate } from "@tanstack/query-core";
import ListUsers from "./list-users";
import { User } from "../types";
import clsx from "clsx";

async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = (await res.json()) as User[];
  return users;
}

async function getCity() {
  const params = {
    q: "São Bento Abade",
    appid: "1899c756f5c4744af619551887e30c7c",
  };

  const data = await fetch(
    clsx(
      "http://api.openweathermap.org/geo/1.0/direct?q=São Bento Abade&limit=5&appid=1899c756f5c4744af619551887e30c7c",
    ),
  ).then((response) => response.json());
  return data;
}

export default async function Hydation() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["hydrate-users"], getUsers);
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <ListUsers />
    </Hydrate>
  );
}