import React, { useEffect, useState } from "react";

const LoadingProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timer;
    if (progress < 100) {
      timer = setTimeout(() => setProgress(progress + 1), 500);
    }
    return () => clearTimeout(timer);
  }, [progress]);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50">
      <div
        className="h-full bg-pink transition-all duration-300"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default LoadingProgressBar;
