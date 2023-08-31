import { CardCover } from "@/components/card-cover";
import { Skeleton } from "@/components/ui/skeleton";

export default async function Loading() {
  return (
    <CardCover>
      <Skeleton className="h-full w-full" />
    </CardCover>
  );
}
