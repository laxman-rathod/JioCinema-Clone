import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Skeleton5 from "../../../util/Skeleton5";

const Poster = () => {
  const [movie, setMovie] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://jiocinema-dbbw.onrender.com/api/movies/hot-movies/"
        );
        setMovie(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <Skeleton5 />
      ) : (
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
      )}
    </>
  );
};

export default Poster;
