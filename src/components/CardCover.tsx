import { PropsWithChildren } from "react";

export function CardCover({ children }: PropsWithChildren) {
  return (
    <div className="bg-custom-gray-800 h-full rounded-lg p-4 w-full flex flex-col gap-4 justify-center">{children}</div>
  );
}
