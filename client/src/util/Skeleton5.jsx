import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const Skeleton5 = () => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div className="w-full h-72">
        <Skeleton className="h-72 rounded-lg" />
      </div>
    </SkeletonTheme>
  );
};

export default Skeleton5;
