import React from "react";
import WatchContents from "./WatchContents";
import HeadLine from "../streaming-info/HeadLine";
import Carousels from "../streaming-info/Carousels";
import Description from "./Description";

const WatchContainer = () => {
  return (
    <>
      <WatchContents />
      <Description />
      <HeadLine />
      <Carousels />
    </>
  );
};

export default WatchContainer;
