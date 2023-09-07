import { Header } from "@/layout/header";
import { PropsWithChildren } from "react";

interface WeatherLayoutProps extends PropsWithChildren {
  header?: {
    isBackButton?: boolean;
    className?: string;
  };
}

export function WeatherLayout({ children, header }: WeatherLayoutProps) {
  return (
    <div className="dark:bg-custom-gray-800 flex h-full flex-col gap-3 p-3">
      <Header
        isBackButton={header?.isBackButton ?? true}
        className={header?.className}
      />
      <div className="flex-1">{children}</div>
    </div>
  );
}
