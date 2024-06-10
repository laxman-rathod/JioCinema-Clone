import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { currentStateFunc } from "../../app/slices/jcSlice";
import { usersData } from "../../pages/api/getUsersData";

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
          <Link to={"/"}>
            <img
              src="/assets/jc_logo.svg"
              className="size-30"
              alt="JioCinema logo"
            />
          </Link>
          <div className="flex place-items-center gap-1 py-[0.3rem] px-[0.7rem] text-[.770rem] font-[900] text-goldenC border-2 border-goldenC rounded-full">
            <img src="/assets/crown.svg" alt="crown svg" />
            Go Premium
          </div>
        </div>
        <div className="flex place-items-center gap-6 text-sm font-[900] no-underline cursor-pointer">
          <Link
            to={"/"}
            className={`${
              isActive === "home" &&
              "border-b-4 rounded-b-sm border-pink text-white"
            } text-gray transition ease-in-out duration-150 hover:text-white`}
            onClick={() => handleOnClick("home")}
          >
            Home
          </Link>
          <Link
            to={"/sports"}
            className={`${
              isActive === "sports" &&
              "border-b-4 rounded-b-sm border-pink  text-white"
            } text-gray transition ease-in-out duration-150 hover:text-white`}
            onClick={() => handleOnClick("sports")}
          >
            Sports
          </Link>
          <Link
            to={"/movies"}
            className={`${
              isActive === "movies" &&
              "border-b-4 rounded-b-sm border-pink  text-white"
            } text-gray transition ease-in-out duration-150 hover:text-white`}
            onClick={() => handleOnClick("movies")}
          >
            Movies
          </Link>

          <Link
            to={"/tv-shows"}
            className={`${
              isActive === "tvshows" &&
              "border-b-4 rounded-b-sm border-pink  text-white"
            } text-gray transition ease-in-out duration-150 hover:text-white`}
            onClick={() => handleOnClick("tvshows")}
          >
            TV Shows
          </Link>
          <div
            className={`${
              isActive === "more" &&
              "border-b-4 rounded-b-sm border-pink  text-white"
            } more-options flex place-items-center gap-2 text-gray transition ease-in-out duration-150 hover:text-white`}
            onClick={() => handleOnClick("more")}
          >
            More
            <FaAngleDown className="down-arrow transition ease-in-out delay-75 duration-300" />
          </div>
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
          <img
            onClick={() => {
              usersData();
              dispatch(currentStateFunc({ currentState: true }));
            }}
            className="cursor-pointer"
            src="/assets/avatar_guest.svg"
            alt="profile logo"
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderNavBar;
