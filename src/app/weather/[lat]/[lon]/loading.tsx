import { CardCover } from "@/components/CardCover";
import { Skeleton } from "@/components/ui/skeleton";

export default async function Loading() {
  return (
    <CardCover>
      <Skeleton className="h-full w-full" />
    </CardCover>
  );
}
