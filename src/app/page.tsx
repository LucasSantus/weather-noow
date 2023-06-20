"use client";

import { useProfiles } from "@/hooks/useProfiles";

export default function Home() {
  const { profiles: users } = useProfiles();

  console.log(users);

  return (
    <main className="">
      {users?.map((user) => {
        return (
          <div key={user.id} className="bg-slate-500">
            <p className="text-black">{user.email}</p>
          </div>
        );
      })}
    </main>
  );
}
