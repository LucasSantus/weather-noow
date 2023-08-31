import { CardCover } from "@/components/card-cover";
import { Skeleton } from "@/components/ui/skeleton";

// TODO: melhorar o tamanho dos skeletons deixando-os responsivos sem interferir no layout

export default async function Loading() {
  return (
    <CardCover className="row-span-4">
      <div className="grid h-full grid-flow-row gap-4">
        <Skeleton className="row-span-1" />
        <div className="row-span-3 flex h-full space-x-4">
          <Skeleton className="flex-1" />
          <Skeleton className="flex-1" />
          <Skeleton className="flex-1" />
          <Skeleton className="flex-1" />
          <Skeleton className="flex-1" />
          <Skeleton className="flex-1" />
        </div>
      </div>
    </CardCover>
  );
}
