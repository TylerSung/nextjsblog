import { Skeleton } from "@/components/ui/skeleton";

export function PopularPostSkeleton() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-[125px] w-[250px] rounded-md" />
      <div className="space-y-2  ">
        <Skeleton className="h-8  w-[250px] " />
        <Skeleton className="h-8  w-[200px] " />{" "}
        <Skeleton className="h-8  w-[200px] " />{" "}
      </div>
    </div>
  );
}
