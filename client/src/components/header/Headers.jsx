import React from "react";
import HeaderNavBar from "./HeaderNavBar";
import HeaderSuggestions from "./HeaderSuggestions";

const Headers = () => {
  return (
    <div className="sticky top-0 z-50 w-full h-full bg-darkBg shadow-lg">
      <HeaderNavBar />
      <HeaderSuggestions />
    </div>
  );
};

export default Headers;
