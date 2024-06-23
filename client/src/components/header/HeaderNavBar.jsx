import React, { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { currentStateFunc } from "../../app/slices/jcSlice";
import { user_auth } from "../../app/slices/userAuth";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { inputValueChanged } from "../../app/slices/searchData";
import { setCurrentTab } from "../../app/slices/tabControls";

const HeaderNavBar = () => {
  const [inputValue, setInputValue] = useState("");
  const [hasChanged, setHasChanged] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentTab = useSelector((store) => store.tabControls.currentTab);

  useEffect(() => {
    if (hasChanged) {
      navigate("/search");
    }
  }, [hasChanged]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
    dispatch(inputValueChanged({ inputValue: event.target.value }));

    if (!hasChanged) {
      setHasChanged(true);
    }
  };

  const fetchUsersData = async () => {
    try {
      const res = await axios.get("http://jiocinema-phi.vercel.app
/api/users/profile", {
        withCredentials: true,
      });

      if (res.data.success) {
        const user = res.data;
        dispatch(
          user_auth({
            success: true,
            username: user.username,
            email: user.email,
            mobileNumber: user.mobileNumber,
          })
        );
      } else {
        dispatch(
          user_auth({
            success: false,
            error: res.data.message || "An error occurred",
          })
        );
      }
    } catch (err) {
      dispatch(
        user_auth({
          success: false,
          error: err.message || "An error occurred",
        })
      );
    }
  };

  const handleOnClick = (name) => {
    dispatch(setCurrentTab({ tab: name }));
  };

  const handleProfileClick = () => {
    fetchUsersData();
    dispatch(currentStateFunc());
  };

  return (
    <div className="px-12 py-3 flex justify-between items-center border-b border-lightish text-white">
      <div className="flex place-items-center gap-8 font-poppins">
        <div className="flex place-items-center gap-2 cursor-pointer">
          <Link to={"/"}>
            <img
              src="/assets/jc_logo.svg"
              className="size-30"
              alt="JioCinema logo"
              onClick={() => handleOnClick("home")}
            />
          </Link>
          <div className="flex place-items-center gap-1 py-[0.3rem] px-[0.7rem] text-[.770rem] font-[900] text-goldenC border-2 border-goldenC rounded-full">
            <img src="/assets/crown.svg" alt="crown svg" />
            Go Premium
          </div>
        </div>
        <div className="flex place-items-center gap-6 text-sm font-[900] cursor-pointer">
          <Link
            to={"/"}
            className={`${
              currentTab === "home" &&
              "border-b-4 rounded-b-sm border-pink text-white"
            } text-gray transition ease-in-out duration-150 hover:text-white`}
            onClick={() => handleOnClick("home")}
          >
            Home
          </Link>
          <Link
            to={"/sports"}
            className={`${
              currentTab === "sports" &&
              "border-b-4 rounded-b-sm border-pink  text-white"
            } text-gray transition ease-in-out duration-150 hover:text-white`}
            onClick={() => handleOnClick("sports")}
          >
            Sports
          </Link>
          <Link
            to={"/movies"}
            className={`${
              currentTab === "movies" &&
              "border-b-4 rounded-b-sm border-pink  text-white"
            } text-gray transition ease-in-out duration-150 hover:text-white`}
            onClick={() => handleOnClick("movies")}
          >
            Movies
          </Link>

          <Link
            to={"/tv-shows"}
            className={`${
              currentTab === "tvshows" &&
              "border-b-4 rounded-b-sm border-pink  text-white"
            } text-gray transition ease-in-out duration-150 hover:text-white`}
            onClick={() => handleOnClick("tvshows")}
          >
            TV Shows
          </Link>
          <div
            className={
              "more-options flex place-items-center gap-2 text-gray transition ease-in-out duration-150 hover:text-white"
            }
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
              value={inputValue}
              onChange={handleChange}
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
            onClick={handleProfileClick}
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
