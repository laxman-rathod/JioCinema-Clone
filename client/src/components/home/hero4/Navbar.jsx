import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  englishFreshEpisodes,
  hindiFreshEpisodes,
} from "../../../app/slices/fetchURI";

const languages = [
  {
    name: "hindi",
    label: "Hindi",
    action: hindiFreshEpisodes({ URI: "/hindi-fresh-episodes/" }),
  },
  {
    name: "english",
    label: "English",
    action: englishFreshEpisodes({ URI: "/english-fresh-episodes/" }),
  },
  { name: "kannada", label: "Kannada" },
  { name: "bangla", label: "Bangla" },
  { name: "gujrati", label: "Gujrati" },
  { name: "marathi", label: "Marathi" },
];

const Navbar = () => {
  const [isActive, setIsActive] = useState("hindi");
  const dispatch = useDispatch();

  const handleOnClick = (name, action) => {
    setIsActive(name);
    if (action) {
      dispatch(action);
    }
  };

  return (
    <div className="mb-7">
      <ul className="flex items-center justify-start gap-1 font-poppins font-semibold text-xs cursor-pointer">
        {languages.map((language) => (
          <li
            key={language.name}
            className={`custome-transition ${
              isActive === language.name
                ? "bg-suggestionsBg text-white hover:bg-suggClick"
                : "hover:bg-suggestionsBg"
            } text-lightenThik px-3 py-2 font-semibold rounded-full text-center cursor-pointer`}
            onClick={() => handleOnClick(language.name, language.action)}
          >
            {language.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
