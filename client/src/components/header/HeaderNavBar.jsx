import React, { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { currentStateFunc } from "../../app/slices/jcSlice";
import { user_auth } from "../../app/slices/userAuth";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { inputValueChanged } from "../../app/slices/searchData";

const HeaderNavBar = () => {
  const [inputValue, setInputValue] = useState("");
  const [hasChanged, setHasChanged] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (hasChanged) {
      navigate("/search", { state: { inputValue } });
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
      const res = await axios.get(
        "https://jiocinema-dbbw.onrender.com/api/users/profile",
        {
          withCredentials: true,
        }
      );

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

  useEffect(() => {
    fetchUsersData();
  }, []);

  const handleProfileClick = () => {
    dispatch(currentStateFunc());
  };

  return (
    <div className="w-full h-full relative">
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
          <div className="flex place-items-center gap-6 text-sm font-[900] cursor-pointer">
            <Link
              to={"/"}
              className={`link-element relative ${
                location.pathname === "/" && "text-white"
              } text-gray transition ease-in-out duration-150 hover:text-white`}
            >
              <span>Home</span>
              {location.pathname === "/" && (
                <div className="absolute bottom-[-1.4rem] left-0 h-[0.18rem] bg-pink rounded-full w-full"></div>
              )}
            </Link>
            <Link
              to={"/sports"}
              className={`link-element relative ${
                location.pathname === "/sports" && "text-white"
              } text-gray transition ease-in-out duration-150 hover:text-white`}
            >
              <span>Sports</span>
              {location.pathname === "/sports" && (
                <div className="absolute bottom-[-1.4rem] left-0 h-[0.18rem] bg-pink rounded-full w-full"></div>
              )}
            </Link>

            <Link
              to={"/movies"}
              className={`link-element relative ${
                location.pathname === "/movies" && "text-white"
              } text-gray transition ease-in-out duration-150 hover:text-white`}
            >
              <span>Movies</span>
              {location.pathname === "/movies" && (
                <div className="absolute bottom-[-1.4rem] left-0 h-[0.18rem] bg-pink rounded-full w-full"></div>
              )}
            </Link>
            <Link
              to={"/tv-shows"}
              className={`link-element relative ${
                location.pathname === "/tv-shows" && "text-white"
              } text-gray transition ease-in-out duration-150 hover:text-white`}
            >
              <span>TV Shows</span>
              {location.pathname === "/tv-shows" && (
                <div className="absolute bottom-[-1.4rem] left-0 h-[0.18rem] bg-pink rounded-full w-full"></div>
              )}
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
    </div>
  );
};

export default HeaderNavBar;
