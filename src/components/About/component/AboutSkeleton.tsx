import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const AboutSkeleton = () => {
  return (
    <div className=" pt-40 md:pt-44 max-w-7xl mx-auto mb-20">
      <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-20 px-5 md:px-0">
        <div className="md:w-3/5 flex flex-col gap-8 md:gap-16">
          <div className="space-y-4">
            <Skeleton className="w-28 h-7" />
            <Skeleton className="ml-2 w-[700px] h-[130px]" />
          </div>
          <div className="space-y-4">
            <Skeleton className="w-28 h-7" />
            <Skeleton className="ml-2 w-[700px] h-[130px]" />
          </div>
          <div className="space-y-4">
            <Skeleton className="w-28 h-7" />
            <Skeleton className="ml-2 w-[700px] h-[130px]" />
          </div>
          <div className="space-y-4">
            <Skeleton className="w-28 h-7" />
            <div className="ml-2 flex flex-col md:flex-row gap-4 md:gap-14">
              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <Skeleton className="w-10 h-5" />
                  <Skeleton className="w-28 h-5" />
                </div>
                <div className="flex gap-4">
                  <Skeleton className="w-10 h-5" />
                  <Skeleton className="w-28 h-5" />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <Skeleton className="w-10 h-5" />
                  <Skeleton className="w-28 h-5" />
                </div>
                <div className="flex gap-4">
                  <Skeleton className="w-10 h-5" />
                  <Skeleton className="w-28 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:pt-10 md:w-2/5 flex flex-col gap-20 items-center">
          <div className="flex">
            <Skeleton className="rounded-full w-20 h-20" />
            <Skeleton className="rounded-full w-20 h-20" />
            <Skeleton className="rounded-full w-20 h-20" />
          </div>
          <Skeleton
            className="hidden md:block w-[400px] h-[400px]
                 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSkeleton;
