import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Poster = () => {
  const [movie, setMovie] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://jiocinema-phi.vercel.app/api/movies/hot-movies/"
        );
        setMovie(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="pr-6 cursor-pointer w-full h-full">
      <img
        src={movie.thumbnail}
        alt={`${movie.title} poster`}
        className="rounded-lg w-full h-72 object-cover object-top custome-transition"
        onClick={() =>
          navigate(
            `/${movie.contentType === "Movie" ? "movies" : "tv-shows"}/${
              movie.title
            }`
          )
        }
      />
    </div>
  );
};

export default Poster;
