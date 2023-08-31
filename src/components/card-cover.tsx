import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

interface CardCoverProps extends PropsWithChildren {
  title?: string;
  className?: string;
}

export function CardCover({ children, title, className }: CardCoverProps) {
  return (
    <div
      className={cn(
        "bg-custom-gray-700 flex h-full w-full flex-col gap-4 rounded-lg p-5",
        className,
      )}
    >
      {title && (
        <span className="text-custom-gray-400 text-base font-medium">
          {title}
        </span>
      )}
      {children}
    </div>
  );
}
