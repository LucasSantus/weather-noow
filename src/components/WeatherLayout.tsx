import { PropsWithChildren } from "react";

export function WeatherLayout({ children }: PropsWithChildren) {
  return <div className="w-screen h-screen text-white dark:bg-custom-gray-900">{children}</div>;
}
