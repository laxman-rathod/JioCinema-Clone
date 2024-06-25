import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import {
  setIsGenrelContents,
  setKeywords,
} from "../../app/slices/movieSuggestions";
import { useLocation } from "react-router-dom";

const HeaderSuggestions = () => {
  const [isActive, setIsActive] = useState(0);
  const dispatch = useDispatch();
  const location = useLocation();

  const handleOnClick = (id, keywords) => {
    setIsActive(id);
    dispatch(setIsGenrelContents()); // toggle to the keyword buttons
    dispatch(setKeywords({ keywords: keywords }));
  };

  let suggestions = [];
  if (location.pathname === "/movies") {
    suggestions = [
      { name: "For You", id: uuidv4() },
      { name: "Action", id: uuidv4() },
      { name: "Hollywood in Hindi", id: uuidv4() },
      { name: "Romance", id: uuidv4() },
      { name: "Top 10 Movies", id: uuidv4() },
      { name: "Superhero", id: uuidv4() },
      { name: "Comedy", id: uuidv4() },
      { name: "Thriller", id: uuidv4() },
      { name: "Hindi", id: uuidv4() },
      { name: "Science Fiction", id: uuidv4() },
      { name: "Crime", id: uuidv4() },
      { name: "Animation", id: uuidv4() },
      { name: "Fantasy", id: uuidv4() },
      { name: "Drama", id: uuidv4() },
    ];
  } else if (location.pathname === "/tv-shows") {
    suggestions = [
      { name: "For You", id: uuidv4() },
      { name: "Anime", id: uuidv4() },
      { name: "Romance", id: uuidv4() },
      { name: "Top 10 Shows", id: uuidv4() },
      { name: "Hindi", id: uuidv4() },
      { name: "English", id: uuidv4() },
      { name: "Thriller", id: uuidv4() },
      { name: "Science Fiction", id: uuidv4() },
      { name: "Comedy", id: uuidv4() },
      { name: "Superhero", id: uuidv4() },
      { name: "Drama", id: uuidv4() },
      { name: "Advanture", id: uuidv4() },
      { name: "Action", id: uuidv4() },
      { name: "Food", id: uuidv4() },
      { name: "Olympics", id: uuidv4() },
    ];
  } else {
    suggestions = [
      { name: "For You", id: uuidv4() },
      { name: "Premium", id: uuidv4() },
      { name: "Animation", id: uuidv4() },
      { name: "Big Boss OTT", id: uuidv4() },
      { name: "Originals", id: uuidv4() },
      { name: "Hollywood", id: uuidv4() },
      { name: "Cricket", id: uuidv4() },
      { name: "Rommance", id: uuidv4() },
      { name: "Novel", id: uuidv4() },
      { name: "Drama", id: uuidv4() },
      { name: "Live", id: uuidv4() },
      { name: "news", id: uuidv4() },
      { name: "TV & Movies", id: uuidv4() },
      { name: "Olympics", id: uuidv4() },
    ];
  }

  return (
    <div className="px-12 pt-[1.2rem] pb-3 text-white">
      <div className="flex place-items-center gap-2 list-none font-poppins font-[900] text-[.65rem]">
        {suggestions.map((sugg, index) => (
          <div
            key={sugg.id}
            className={`custome-transition ${
              isActive === index ? "bg-white text-black" : "hover:bg-suggClick"
            } px-3 py-[.400rem] rounded-full text-center bg-suggestionsBg cursor-pointer`}
            onClick={() => handleOnClick(index, sugg.name)}
          >
            {sugg.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeaderSuggestions;
