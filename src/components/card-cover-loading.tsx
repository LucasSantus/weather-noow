import { Skeleton } from "./ui/skeleton";

export function CardCoverLoading() {
  return (
    <div className="flex h-full flex-col justify-between rounded-lg">
      <Skeleton className="h-full" />
    </div>
  );
}
