import React, { useState } from "react";

const Navbar = () => {
  const [isActive, setIsActive] = useState("hindi");

  const handleOnClick = (name) => {
    setIsActive(name);
  };

  return (
    <div className="mb-7">
      <ul className="flex items-center justify-start gap-12 font-poppins font-bold text-base cursor-pointer">
        <li
          className={`${
            isActive === "hindi" &&
            "border-b-4 rounded-b-sm border-pink  text-white"
          } more-options flex place-items-center gap-2 text-gray transition ease-in-out duration-150 hover:text-white`}
          onClick={() => handleOnClick("hindi")}
        >
          Hindi
        </li>
        <li
          className={`${
            isActive === "english" &&
            "border-b-4 rounded-b-sm border-pink  text-white"
          } more-options flex place-items-center gap-2 text-gray transition ease-in-out duration-150 hover:text-white`}
          onClick={() => handleOnClick("english")}
        >
          English
        </li>
        <li
          className={`${
            isActive === "marathi" &&
            "border-b-4 rounded-b-sm border-pink  text-white"
          } more-options flex place-items-center gap-2 text-gray transition ease-in-out duration-150 hover:text-white`}
          onClick={() => handleOnClick("marathi")}
        >
          Marathi
        </li>
        <li
          className={`${
            isActive === "gujrati" &&
            "border-b-4 rounded-b-sm border-pink  text-white"
          } more-options flex place-items-center gap-2 text-gray transition ease-in-out duration-150 hover:text-white`}
          onClick={() => handleOnClick("gujrati")}
        >
          Gujrati
        </li>
        <li
          className={`${
            isActive === "kannada" &&
            "border-b-4 rounded-b-sm border-pink  text-white"
          } more-options flex place-items-center gap-2 text-gray transition ease-in-out duration-150 hover:text-white`}
          onClick={() => handleOnClick("kannada")}
        >
          Kannada
        </li>
        <li
          className={`${
            isActive === "bangla" &&
            "border-b-4 rounded-b-sm border-pink  text-white"
          } more-options flex place-items-center gap-2 text-gray transition ease-in-out duration-150 hover:text-white`}
          onClick={() => handleOnClick("bangla")}
        >
          Bangla
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
