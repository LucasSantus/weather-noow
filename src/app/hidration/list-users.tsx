"use client";

import { User } from "../types";
import { useQuery } from "@tanstack/react-query";
import clsx from "clsx";
import Image from "next/image";
import React from "react";

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

export default function ListUsers() {
  const [count, setCount] = React.useState(0);

  const { data, isLoading, isFetching, error } = useQuery({
    queryKey: ["hydrate-users"],
    queryFn: () => getUsers(),
  });

  // const { data, isLoading, isFetching, error } = useQuery({
  //   queryKey: ["city"],
  //   queryFn: () => getCity(),
  // });

  // console.log({
  //   data, isFetching, isLoading, error
  // })

  return (
    <main style={{ maxWidth: 1200, marginInline: "auto", padding: 20 }}>
      <div style={{ marginBottom: "4rem", textAlign: "center" }}>
        <h4 style={{ marginBottom: 16 }}>{count}</h4>
        <button onClick={() => setCount((prev) => prev + 1)}>increment</button>
        <button
          onClick={() => setCount((prev) => prev - 1)}
          style={{ marginInline: 16 }}
        >
          decrement
        </button>
        <button onClick={() => setCount(0)}>reset</button>
      </div>

      {error ? (
        <p>Oh no, there was an error</p>
      ) : isLoading || isFetching ? (
        <p>Loading...</p>
      ) : data ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gap: 20,
          }}
        >
          {data.map((user) => (
            <div
              key={user.id}
              style={{ border: "1px solid #ccc", textAlign: "center" }}
            >
              <Image
                src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
                alt={user.name}
                width={180}
                height={180}
              />
              <h3>{user.name}</h3>
            </div>
          ))}
        </div>
      ) : null}
    </main>
  );
}