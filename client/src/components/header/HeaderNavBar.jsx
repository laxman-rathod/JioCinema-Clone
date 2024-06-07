import React, { useState } from "react";
// import { LuCrown } from "react-icons/lu";
import { FaAngleDown } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { currentStateFunc } from "../../app/slices/jcSlice";

const HeaderNavBar = () => {
  const [isActive, setIsActive] = useState("home");

  const handleOnClick = (name) => {
    setIsActive(name);
  };

  const dispatch = useDispatch();

  return (
    <div className="px-12 py-3 flex justify-between items-center border-b border-lightish text-white">
      <div className="flex place-items-center gap-8 font-poppins">
        <div className="flex place-items-center gap-2 cursor-pointer">
          <img
            src="/assets/jc_logo.svg"
            className="size-30"
            alt="JioCinema logo"
          />
          <div className="flex place-items-center gap-1 py-[0.3rem] px-[0.7rem] text-[.770rem] font-[900] text-goldenC border-2 border-goldenC rounded-full">
            <img src="/assets/crown.svg" alt="crown svg" />
            Go Premium
          </div>
        </div>
        <div className="">
          <ul className="flex place-items-center gap-6 text-sm font-[900] list-none cursor-pointer">
            <li
              className={`${
                isActive === "home" &&
                "border-b-4 rounded-b-sm border-pink text-white"
              } text-gray transition ease-in-out duration-150 hover:text-white`}
              onClick={() => {
                handleOnClick("home");
                dispatch(currentStateFunc({ currentState: "home" }));
              }}
            >
              Home
            </li>
            <li
              className={`${
                isActive === "sports" &&
                "border-b-4 rounded-b-sm border-pink  text-white"
              } text-gray transition ease-in-out duration-150 hover:text-white`}
              onClick={() => {
                handleOnClick("sports");
                dispatch(currentStateFunc({ currentState: "sports" }));
              }}
            >
              Sports
            </li>
            <li
              className={`${
                isActive === "movies" &&
                "border-b-4 rounded-b-sm border-pink  text-white"
              } text-gray transition ease-in-out duration-150 hover:text-white`}
              onClick={() => {
                handleOnClick("movies");
                dispatch(currentStateFunc({ currentState: "movies" }));
              }}
            >
              Movies
            </li>

            <li
              className={`${
                isActive === "tvshows" &&
                "border-b-4 rounded-b-sm border-pink  text-white"
              } text-gray transition ease-in-out duration-150 hover:text-white`}
              onClick={() => {
                handleOnClick("tvshows");
                dispatch(currentStateFunc({ currentState: "tv-shows" }));
              }}
            >
              TV Shows
            </li>
            <li
              className={`${
                isActive === "more" &&
                "border-b-4 rounded-b-sm border-pink  text-white"
              } more-options flex place-items-center gap-2 text-gray transition ease-in-out duration-150 hover:text-white`}
              onClick={() => handleOnClick("more")}
            >
              More
              <FaAngleDown className="down-arrow transition ease-in-out delay-75 duration-300" />
            </li>
          </ul>
        </div>
      </div>

      <div className="flex place-items-center gap-6">
        <div className="flex place-items-center px-3 py-[.17rem] bg-gray2 rounded-full cursor-pointer">
          <div className="p-2 rounded-full hover:bg-gray3 transition ease-in-out duration-150">
            <IoSearchSharp size={19} />
          </div>
          <div className="flex place-items-center">
            <input
              type="text"
              placeholder="Movies, Shows and more"
              className="ml-2 mr-4 bg-transparent font-poppins text-white text-sm outline-none placeholder:text-searchText placeholder:font-extrabold placeholder:text-sm"
            />
          </div>
          <div className="p-2 rounded-full hover:bg-gray3 transition ease-in-out duration-150">
            <FaMicrophone size={18} />
          </div>
        </div>

        <div className="size-10">
          {/* p-[.30rem] rounded-full bg-gray2 cursor-pointer */}
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="flex place-items-center size-[1.90rem]"
          >
            <path
              fillRule="evenodd"
              d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
              clipRule="evenodd"
            />
          </svg> */}
          <img src="/assets/avatar_guest.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeaderNavBar;
