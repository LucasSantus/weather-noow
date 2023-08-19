import { cn } from "@/utils/cn";
import { PropsWithChildren } from "react";

interface CardCoverProps extends PropsWithChildren {
  title?: string;
  className?: string;
}

export function CardCover({ children, title, className }: CardCoverProps) {
  return (
    <div
      className={cn(
        "flex h-full w-full flex-col gap-4 rounded-lg bg-custom-gray-700 p-5",
        className,
      )}
    >
      {title && (
        <span className="text-base font-medium text-custom-gray-400">
          {title}
        </span>
      )}
      {children}
    </div>
  );
}
