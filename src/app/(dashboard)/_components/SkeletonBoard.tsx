import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const SkeletonBoard = () => {
  return (
    <>
      {Array.from({ length: 2 }).map((_, i) => (
        <Skeleton key={i} className='aspect-video w-full rounded-t-xl rounded-b-none h-36' />
      ))}
    </>
  );
};

export default SkeletonBoard;
