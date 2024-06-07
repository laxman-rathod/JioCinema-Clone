import React from "react";
import { useSelector } from "react-redux";
import Headers from "./components/header/Headers";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Movies from "./components/movies/Movies";
import TVShows from "./components/tv-shows/TVShows";

const App = () => {
  const currentState = useSelector((store) => store.jcStates.currentState);
  return (
    <div className="dark:bg-darkBg">
      <Headers />
      {currentState === "home" && <Home />}
      {currentState === "movies" && <Movies />}
      {currentState === "tv-shows" && <TVShows />}
      <Footer />
    </div>
  );
};

export default App;
