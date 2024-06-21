import React from "react";
import ContainerHero1 from "../components/movies/movie_hero1/ContainerHero1";
import ContainerHero2 from "../components/movies/movie_hero2/ContainerHero2";
import ContainerHero3 from "../components/movies/movie_hero3/ContainerHero3";
import ContainerHero4 from "../components/movies/movie_hero4/ContainerHero4";
import ContainerHero5 from "../components/movies/movie_hero5/ContainerHero5";
import ContainerHero6 from "../components/movies/movie_hero6/ContainerHero6";
import ContainerHero7 from "../components/movies/movie_hero7/ContainerHero7";
import ContainerHero8 from "../components/movies/movie_hero8/ContainerHero8";
import ContainerHero9 from "../components/movies/movie_hero9/ContainerHero9";
import ContainerHero10 from "../components/movies/movie_hero10/ContainerHero10";
import ContainerHero11 from "../components/movies/movie_hero11/ContainerHero11";
import ContainerHero12 from "../components/movies/movie_hero12/ContainerHero12";
import ContainerHero13 from "../components/movies/movie_hero13/ContainerHero13";
import ContainerHero14 from "../components/movies/movie_hero14/ContainerHero14";
import { useSelector } from "react-redux";
import Profile from "../pages/profile/Profile";
const Movies = () => {
  const isProfileActive = useSelector((store) => store.jcStates.currentState);
  return (
    <>
      {isProfileActive && <Profile />}
      <ContainerHero1 />
      <ContainerHero2 />
      <ContainerHero3 />
      <ContainerHero11 />
      <ContainerHero14 />
      <ContainerHero4 />
      <ContainerHero5 />
      <ContainerHero6 />
      <ContainerHero7 />
      <ContainerHero8 />
      <ContainerHero9 />
      <ContainerHero10 />
      <ContainerHero12 />
      <ContainerHero13 />
    </>
  );
};

export default Movies;
