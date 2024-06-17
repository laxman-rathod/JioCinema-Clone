import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { openProfileSettings } from "../app/slices/jcSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.userAuth);
  const handleLogout = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/users/logout",
        {},
        { withCredentials: true }
      );
      if (response.data.success) {
        alert("Logout successfull.");
        navigate("/");
      } else {
        alert("Error");
      }
    } catch (error) {
      console.error("Unable to logout. Please try again!", error);
      alert("Loggout failed");
    }

    window.location.reload();
  };
  return (
    <div>
      <div className="w-[30%] h-full fixed right-0 top-[4.5rem] z-50 px-4  pt-16 pb-4 bg-darkBg font-poppins">
        <div className="flex flex-col items-center pb-4 rounded-xl w-full h-auto bg-profileBackground text-white">
          <div className="relative -top-8 cursor-pointer">
            <img src="/assets/avatar_guest.svg" alt="" />
          </div>
          <h1 className="relative -top-4 font-extrabold text-lg">
            {user.success ? user.username : "Guest"}
          </h1>
          <h3>{user.success && user.mobileNumber}</h3>

          {!user.success && (
            <button
              onClick={() => navigate("/login")}
              className="text-lg font-extrabold py-2 px-6 rounded-full bg-pink cursor-pointer hover:bg-opacity-50"
            >
              Login
            </button>
          )}
        </div>
        {user.success && (
          <div
            onClick={() => navigate("/profile-settings")}
            className="w-full flex items-center justify-between text-white pt-4 pb-3 border-b border-lightish"
          >
            <h3 className="text-sm font-extrabold hover:underline cursor-pointer">
              Settings
            </h3>
            <IoIosArrowForward className="font-extrabold cursor-pointer" />
          </div>
        )}

        <div className="w-full flex items-center justify-between text-white pt-4 pb-3 border-b border-lightish">
          <h3 className="text-sm font-extrabold hover:underline cursor-pointer">
            Subscribe Now
          </h3>
          <IoIosArrowForward className="font-extrabold cursor-pointer" />
        </div>
        <div className="w-full flex items-center justify-between font-extrabold text-white pt-4 pb-3 border-b border-lightish">
          <h3 className="text-sm cursor-pointer hover:underline">
            Help & Legal
          </h3>
          <IoIosArrowForward className="cursor-pointer" />
        </div>
        {user.success && (
          <div className="text-white pt-4 text-sm font-extrabold cursor-pointer">
            <button className="hover:underline" onClick={handleLogout}>
              Logout
            </button>
          </div>
        )}
        {/* <ProfileSettings /> */}

        <div className="text-white absolute bottom-2 right-12 z-10">
          <h4 className="text-[0.70rem] font-extrabold border-b w-fit cursor-pointer">
            Privacy and T&C
          </h4>
          <p className="text-[0.63rem] font-semibold text-gray100 mt-1">
            24.06.04.0-0e1af632 - 9bf8b7c6-fa43-45b2-abda-eae35e94fb3e
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
