import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

function FormSkeleton() {
  return (
    <>
      <Skeleton className="w-32 h-5 mt-1 " />
      <div className="space-y-1 mt-4 mb-0.5">
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-2/3 h-4" />
      </div>
      <div className="flex flex-col gap-5">
        <label className="flex flex-col gap-2">
          <Skeleton className="w-24 h-5" />
          <Skeleton className="w-full h-10 rounded-lg" />
        </label>
        <label className="flex flex-col gap-2">
          <Skeleton className="w-24 h-5" />
          <Skeleton className="w-full h-10 rounded-lg" />
        </label>
        <label className="flex flex-col gap-2">
          <Skeleton className="w-24 h-5" />
          <Skeleton className="w-full h-10 rounded-lg" />
        </label>
        <label className="flex flex-col gap-2">
          <Skeleton className="w-24 h-5" />
          <Skeleton className="w-full h-64 rounded-lg" />
        </label>
        <div className="flex pt-2 items-center justify-center">
          <Skeleton className="w-36 h-12" />
        </div>
      </div>
    </>
  );
}

export default FormSkeleton;
