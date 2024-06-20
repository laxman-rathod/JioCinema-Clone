import React from "react";
import Intro from "./Intro";
import HeadLine from "./HeadLine";
import Carousels from "./Carousels";
import { useSelector } from "react-redux";
import Profile from "../../profile/Profile";

const StreamingInfoContainer = () => {
  const isProfileActive = useSelector((store) => store.jcStates.currentState);

  return (
    <>
      {isProfileActive && <Profile />}
      <Intro />
      <HeadLine />
      <Carousels />
    </>
  );
};

export default StreamingInfoContainer;
