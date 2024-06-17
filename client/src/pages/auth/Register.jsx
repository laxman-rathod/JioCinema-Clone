import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    mobileNumber: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/users/register",
        formData,
        { withCredentials: true } // Adding credentials
      );
      if (response.data.success) {
        localStorage.setItem("token", response.data.token); // there's no need
        alert("Registration successful!");
        navigate("/");
      } else {
        alert("Login failed");
      }
    } catch (error) {
      console.error("There was an error signing in!", error);
      alert("Sign Up failed");
    }
  };

  return (
    <div className="w-full h-screen font-poppins flex flex-col items-center justify-center">
      <div className="flex w-[27%] items-center justify-start gap-4">
        <GoArrowLeft className="text-white font-extrabold leading-4 size-5" />
        <h1 className="text-white text-lg font-bold leading-4">
          Sign Up to continue
        </h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="pt-4 w-[27%] text-white2 font-semibold text-sm "
      >
        <div className="leading-7 border-b-2">
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            className="w-full bg-transparent pl-1 outline-none appearance-none"
          />
        </div>
        <div className="leading-7 border-b-2 mt-4">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full bg-transparent pl-1 outline-none appearance-none"
          />
        </div>
        <div className="flex place-items-center gap-3 leading-7 border-b-2 mt-4">
          <h3 className="pl-1">+91</h3>
          <input
            type="number"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            placeholder="Mobile number"
            className="w-full placeholder:text-sm bg-transparent outline-none appearance-none"
          />
        </div>
        <div className="leading-7 border-b-2 mt-4">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full bg-transparent pl-1 outline-none appearance-none"
          />
        </div>
        <button
          type="submit"
          className="text-white bg-pink w-full py-3 px-4 rounded-full mt-3 text-[1rem] leading-4 outline-none appearance-none"
        >
          Continue
        </button>
      </form>
      <div className="text-sm leading-8 mt-3 pl-3 text-gray">
        <h4 className="ml-3">
          By continuing you agree to our
          <span className="underline font-extrabold"> Terms of Use</span> and
        </h4>
        <h4 className="leading-6">
          acknowledge that you have read our
          <span className="underline font-extrabold"> Privacy Policy .</span>
        </h4>
      </div>
    </div>
  );
};

export default Register;
