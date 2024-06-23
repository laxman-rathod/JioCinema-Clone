import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Intro = () => {
  const [streamInfo, setStreamInfo] = useState({});
  const { streamType, title } = useParams();
  const navigate = useNavigate();

  const formatGenres = (genres) => {
    if (genres) {
      // If genres is a string, split it by comma and rejoin with " • "
      if (typeof genres === "string") {
        return genres
          .split(",")
          .map((genre) => genre.trim())
          .join(" • ");
      } else if (Array.isArray(genres)) {
        // If it's already an array, join directly
        return genres.join(" • ");
      }
    }
    // If genres is undefined or not a string/array, return an empty string
    return "";
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentStreamData = await axios.get(
          `http://jiocinema-phi.vercel.app/api/${streamType}/${title}`
        );
        setStreamInfo(currentStreamData.data);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchData();
  }, [streamType, title]);

  return (
    <div className="size-full">
      <div
        className="h-screen mt-[4.6rem] w-full absolute inset-0 bg-cover bg-top bg-no-repeat relatives"
        style={{
          backgroundImage: `url(${streamInfo.thumbnail})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-55"></div>
      </div>
      <div className="relative pb-[5.5rem] h-screen flex flex-col justify-end text-white font-poppins">
        <div className="w-full flex justify-between items-start gap-10 p-8 relative z-10">
          <div
            onClick={() => navigate(`watch`)}
            className="flex items-center justify-center gap-2 cursor-pointer bg-pink hover:brightness-150 px-10 py-[0.72rem] rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                clipRule="evenodd"
              />
            </svg>
            <button className="font-semibold text-xs">WATCH</button>
          </div>
          <div className="w-full">
            <h1 className="text-4xl font-black">{streamInfo.title}</h1>
            <div className="text-[0.95rem] pt-2 font-medium text-semiWhite leading-5">
              <p className="mb-1">{formatGenres(streamInfo.genres)}</p>
              <p className="w-[95%]">{streamInfo.description}</p>
            </div>
          </div>
          <div className="text-semiWhite leading-5 ">
            <h1 className="mb-1 text-lg">Cast</h1>
            <p className="text-[0.95rem]">
              Vijay Antony, Yogi Babu, Kavya Thapar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
