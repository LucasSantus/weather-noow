"use client";

import { useProfiles } from "@/hooks/useProfiles";

export const metadata = {
  title: "USUÀERIS",
};

export default async function Hydation() {
  const { profiles: users, error, isFetching } = useProfiles();

  console.log(users);

  return (
    <main className="">
      {/* {users?.data?.map((user) => {
        return (
          <div key={user.id} className="bg-slate-500">
            <p className="text-black">{user.phone}</p>
          </div>
        );
      })} */}
    </main>
  );
}

// https://jsonplaceholder.typicode.com/
