import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { user_auth } from "../app/slices/userAuth";
import axios from "axios";

const ProfileSettings = () => {
  const user = useSelector((store) => store.userAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    mobileNumber: "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        username: user.username,
        email: user.email,
        mobileNumber: user.mobileNumber,
      });
    }
  }, [user]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const fetchUpdateProfileData = async () => {
    try {
      const res = await axios.put(
        "http://localhost:8000/api/users/profile",
        formData,
        { withCredentials: true }
      );
      if (res.data.success) {
        dispatch(
          user_auth({
            username: res.data.username,
            email: res.data.email,
            mobileNumber: res.data.mobileNumber,
          })
        );
        alert("Profile updated");
        navigate("/");
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

  const handleProfileUpdateBtn = () => {
    fetchUpdateProfileData();
  };

  const handleProfileCancelBtn = () => {
    navigate("/");
  };

  return (
    <div className="w-full h-full top-[4.5rem] px-4 pt-16 pb-4 bg-darkBg font-poppins">
      <div className="pt-4 flex items-center justify-center">
        <img
          className="rounded-full"
          src="/assets/avatar_guest.svg"
          alt="profile image"
        />
      </div>
      <div className="w-full text-white2 pt-8 pb-2 border-b border-lightish">
        <h4 className="text-[0.60rem] mb-2 font-medium">Name</h4>
        <input
          type="text"
          value={formData.username}
          name="username"
          onChange={handleOnChange}
          className="text-sm w-full font-bold bg-transparent outline-none appearance-none"
        />
      </div>
      <div className="w-full text-white2 pt-8 pb-2 border-b border-lightish">
        <h4 className="text-[0.60rem] mb-2 font-medium">Email</h4>
        <input
          type="email"
          value={formData.email}
          name="email"
          onChange={handleOnChange}
          className="text-sm w-full font-bold bg-transparent outline-none appearance-none"
        />
      </div>
      <div className="w-full text-white2 pt-8 pb-2 border-b border-lightish">
        <h4 className="text-[0.60rem] mb-2 font-medium">Mobile number</h4>
        <input
          type="number"
          value={formData.mobileNumber}
          name="mobileNumber"
          onChange={handleOnChange}
          className="text-sm w-full font-bold bg-transparent outline-none appearance-none"
        />
      </div>
      <div className="pt-20 flex items-center justify-center gap-8 text-white2 font-bold text-sm">
        <button
          onClick={handleProfileUpdateBtn}
          className="py-2 px-6 rounded-full bg-pink cursor-pointer hover:bg-opacity-70"
        >
          Update
        </button>
        <button
          onClick={handleProfileCancelBtn}
          className="py-2 px-6 rounded-full bg-pink cursor-pointer hover:bg-opacity-70"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ProfileSettings;
