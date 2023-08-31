import { CardCover } from "@/components/card-cover";
import { Skeleton } from "@/components/ui/skeleton";

// TODO: melhorar o tamanho dos skeletons deixando-os responsivos sem interferir no layout

export default async function Loading() {
  return (
    <CardCover className="row-span-6">
      <div className="grid h-full grid-flow-row space-y-4">
        <Skeleton className="row-span-1" />
        <Skeleton className="row-span-2 w-full" />
        <Skeleton className="row-span-2 w-full" />
        <Skeleton className="row-span-2 w-full" />
        <Skeleton className="row-span-2 w-full" />
        <Skeleton className="row-span-2 w-full" />
      </div>
    </CardCover>
  );
}
