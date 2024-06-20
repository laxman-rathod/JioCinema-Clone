import React from "react";
import Profile from "../pages/profile/Profile";
import { useSelector } from "react-redux";

const Sports = () => {
  const isProfileActive = useSelector((store) => store.jcStates.currentState);
  return (
    <div>
      <h1 className="text-white">Hello from Sports..</h1>
      {isProfileActive && <Profile />}
    </div>
  );
};

export default Sports;
