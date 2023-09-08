import { CardCoverLoading } from "@/components/card-cover-loading";
import { Skeleton } from "@/components/ui/skeleton";

export default async function Loading() {
  return (
    <CardCoverLoading className="row-span-1flex col-span-1 flex-col items-center gap-4">
      <Skeleton className="h-8 w-full" />
      <div className="grid h-full w-full flex-1 grid-rows-5 gap-4">
        <Skeleton className="h-full" />
        <Skeleton className="h-full" />
        <Skeleton className="h-full" />
        <Skeleton className="h-full" />
        <Skeleton className="h-full" />
      </div>
    </CardCoverLoading>
  );
}
