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
    <div className="5xl:justify-center 5xl:min-h-screen 5xl:items-center container flex h-full flex-col">
      <div className="5xl:min-w-[1920px] flex h-full max-h-[1080px] flex-col gap-3 p-3">
        <Header
          isBackButton={header?.isBackButton ?? true}
          className={header?.className ?? ""}
        />
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}
