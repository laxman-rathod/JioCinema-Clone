// src/ResetWrapper.jsx
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { reset } from "../app/slices/tabControls";

const ResetWrapper = ({ children }) => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      dispatch(reset());
      localStorage.removeItem("tabControlsState"); // Clear localStorage entry
    }
  }, [location, dispatch]);

  return <>{children}</>;
};

export default ResetWrapper;
