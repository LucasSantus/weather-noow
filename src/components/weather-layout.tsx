import { Header } from "@/layout/header";
import { PropsWithChildren } from "react";

export function WeatherLayout({ children }: PropsWithChildren) {
  return (
    <div className="dark:bg-custom-gray-800 h-screen w-screen p-3 text-white">
      <Header />
      {children}
    </div>
  );
}
