import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
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
  };
  return (
    <form onSubmit={handleSubmit}>
      <button
        type="submit"
        className="text-white bg-pink py-3 font-semibold text-sm px-4 rounded-full mt-3 text-[1rem] leading-4 outline-none appearance-none"
      >
        Logout
      </button>
    </form>
  );
};

export default Logout;
