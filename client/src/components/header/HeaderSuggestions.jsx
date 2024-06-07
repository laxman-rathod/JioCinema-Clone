import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const HeaderSuggestions = () => {
  const [isActive, setIsActive] = useState(0);

  const handleOnClick = (id) => {
    setIsActive(id);
  };

  const suggestions = [
    { name: "For You", id: uuidv4() },
    { name: "Premium", id: uuidv4() },
    { name: "TATA IPL", id: uuidv4() },
    { name: "Hollywood in Hindi", id: uuidv4() },
    { name: "Original", id: uuidv4() },
    { name: "Comedy", id: uuidv4() },
    { name: "Anime", id: uuidv4() },
    { name: "Hindi", id: uuidv4() },
    { name: "Live", id: uuidv4() },
    { name: "Creators Adda", id: uuidv4() },
    { name: "Free Movies", id: uuidv4() },
    { name: "Olympics", id: uuidv4() },
    { name: "Kids & Family", id: uuidv4() },
    { name: "TV & Movies", id: uuidv4() },
    // { name: "Comming Soon", id: uuidv4() },
  ];

  return (
    <div className="px-12 pt-[1.2rem] pb-3 text-white">
      <ul className="flex place-items-center gap-2 list-none font-poppins font-[900] text-[.65rem]">
        {suggestions.map((sugg, index) => (
          <li
            key={sugg.id}
            className={`custome-transition ${
              isActive === index ? "bg-white text-black" : "hover:bg-suggClick"
            } px-3 py-[.400rem] rounded-full text-center bg-suggestionsBg cursor-pointer`}
            onClick={() => handleOnClick(index)}
          >
            {sugg.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeaderSuggestions;
