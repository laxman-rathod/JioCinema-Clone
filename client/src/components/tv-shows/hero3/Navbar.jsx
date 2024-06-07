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
          हिंदी
        </li>
        <li
          className={`${
            isActive === "kannada" &&
            "border-b-4 rounded-b-sm border-pink  text-white"
          } more-options flex place-items-center gap-2 text-gray transition ease-in-out duration-150 hover:text-white`}
          onClick={() => handleOnClick("kannada")}
        >
          ಕನ್ನಡ
        </li>
        <li
          className={`${
            isActive === "bangla" &&
            "border-b-4 rounded-b-sm border-pink  text-white"
          } more-options flex place-items-center gap-2 text-gray transition ease-in-out duration-150 hover:text-white`}
          onClick={() => handleOnClick("bangla")}
        >
          বাংলা
        </li>
        <li
          className={`${
            isActive === "gujrati" &&
            "border-b-4 rounded-b-sm border-pink  text-white"
          } more-options flex place-items-center gap-2 text-gray transition ease-in-out duration-150 hover:text-white`}
          onClick={() => handleOnClick("gujrati")}
        >
          ગુજરાતી
        </li>
        <li
          className={`${
            isActive === "marathi" &&
            "border-b-4 rounded-b-sm border-pink  text-white"
          } more-options flex place-items-center gap-2 text-gray transition ease-in-out duration-150 hover:text-white`}
          onClick={() => handleOnClick("marathi")}
        >
          मराठी
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
