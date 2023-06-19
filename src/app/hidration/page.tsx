"use client";

import { useUsers } from "@/hooks/useWeathers";

export const metadata = {
  title: "USUÀERIS",
};

export default async function Hydation() {
  const { users, error, isFetching } = useUsers();

  console.log(users);

  return (
    <main className="">
      {users?.data?.map((user) => {
        return (
          <div key={user.id} className="bg-slate-500">
            <p className="text-black">{user.phone}</p>
          </div>
        );
      })}
    </main>
  );
}

// https://jsonplaceholder.typicode.com/
