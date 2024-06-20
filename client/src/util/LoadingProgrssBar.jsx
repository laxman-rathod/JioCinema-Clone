import React, { useState, useEffect } from "react";

const LoadingProgrssBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 10;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full">
      <div
        className="bg-pink h-1"
        style={{ width: `${progress}%`, transition: "width 0.3s" }}
      ></div>
    </div>
  );
};

export default LoadingProgrssBar;
