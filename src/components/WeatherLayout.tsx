import { PropsWithChildren } from "react";

export function WeatherLayout({ children }: PropsWithChildren) {
  return (
    <div className="h-screen w-screen text-white dark:bg-custom-gray-800">
      {children}
    </div>
  );
}
