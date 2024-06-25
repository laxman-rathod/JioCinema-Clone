import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const Skeleton1 = () => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div className="flex justify-center items-center gap-3.5">
        <div className="w-[27.10%] h-80">
          <Skeleton className="h-80 rounded-xl" />
        </div>
        <div className="w-[45%] h-80">
          <Skeleton className="h-80 rounded-xl" />
        </div>
        <div className="w-[27.10%] h-80">
          <Skeleton className="h-80 rounded-xl" />
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default Skeleton1;
