import React from "react";
import { useSelector } from "react-redux";

const LoggedIn = () => {
  const user = useSelector((store) => store.userAuth);

  return (
    <div className="font-semibold text-lg font-poppins text-white">
      <h2 className="leading-6">{user.username}</h2>
      <h2 className="leading-6">{user.email}</h2>
      <h2 className="leading-6">{user.mobileNumber}</h2>
      <h2 className="leading-6">{user.password}</h2>
    </div>
  );
};

export default LoggedIn;
