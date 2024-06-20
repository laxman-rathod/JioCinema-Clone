import React from "react";
import ContainerHero1 from "../components/home/hero1/ContainerHero1";
import ContainerHero2 from "../components/home/hero2/ContainerHero2";
import ContainerHero3 from "../components/home/hero3/ContainerHero3";
import ContainerHero4 from "../components/home/hero4/ContainerHero4";
import ContainerHero5 from "../components/home/hero5/ContainerHero5";
import ContainerHero6 from "../components/home/hero6/ContainerHero6";
import ContainerHero7 from "../components/home/hero7/ContainerHero7";
import ContainerHero8 from "../components/home/hero8/ContainerHero8";
import ContainerHero9 from "../components/home/hero9/ContainerHero9";
import ContainerHero10 from "../components/home/hero10/ContainerHero10";
import ContainerHero11 from "../components/home/hero11/ContainerHero11";
import ContainerHero12 from "../components/home/hero12/ContainerHero12";
import ContainerHero13 from "../components/home/hero13/ContainerHero13";
import { useSelector } from "react-redux";
import Profile from "../pages/profile/Profile";

const Home = () => {
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
      <ContainerHero10 />
      <ContainerHero11 />
      <ContainerHero12 />
      <ContainerHero13 />
    </>
  );
};

export default Home;
