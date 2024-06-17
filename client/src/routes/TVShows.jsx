import React from "react";
import ContainerHero1 from "../components/tv-shows/hero1/ContainerHero1";
import ContainerHero2 from "../components/tv-shows/hero2/ContainerHero2";
import ContainerHero3 from "../components/tv-shows/hero3/ContainerHero3";
import ContainerHero4 from "../components/tv-shows/hero4/ContainerHero4";
import ContainerHero5 from "../components/tv-shows/hero5/ContainerHero5";
import ContainerHero6 from "../components/tv-shows/hero6/ContainerHero6";
import ContainerHero7 from "../components/tv-shows/hero7/ContainerHero7";
import ContainerHero8 from "../components/tv-shows/hero8/ContainerHero8";
import ContainerHero9 from "../components/tv-shows/hero9/ContainerHero9";
import { useSelector } from "react-redux";
import Profile from "../pages/Profile";

const TVShows = () => {
  const isProfileActive = useSelector((store) => store.jcStates.currentState);
  return (
    <>
      {isProfileActive && <Profile />}
      <ContainerHero1 />
      <ContainerHero2 />
      <ContainerHero3 />
      <ContainerHero4 />
      <ContainerHero5 />
      <ContainerHero6 />
      <ContainerHero7 />
      <ContainerHero8 />
      <ContainerHero9 />
    </>
  );
};

export default TVShows;
