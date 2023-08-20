import { cn } from "@/utils/cn";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-custom-gray-300 dark:bg-custom-gray-600",
        className,
      )}
      {...props}
    />
  );
}

export { Skeleton };
