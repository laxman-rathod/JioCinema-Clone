import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useNavigate, useParams } from "react-router-dom";
import Skeleton3 from "../../../util/Skeleton3";

const Carousels = () => {
  const [movies, setMovies] = useState([]);
  const [Genres, setGenres] = useState();
  const [isLoading, setLoading] = useState(true);
  const { streamType, title } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentStreamData = await axios.get(
          `https://jiocinema-dbbw.onrender.com/api/${streamType}/${title}`
        );

        if (currentStreamData.data.genres !== Genres) {
          setGenres(currentStreamData.data.genres);
        }

        const response = await axios.get(
          `https://jiocinema-dbbw.onrender.com/api/genres-based-contents/${Genres}`
        );
        setMovies(response.data);
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [Genres]);

  return (
    <>
      {isLoading ? (
        <Skeleton3 />
      ) : (
        <div className="mx-6 mt-3">
          <div className="w-full h-80 cursor-pointer">
            <Swiper
              slidesPerView={5.6}
              spaceBetween={16}
              loop={true}
              className="mySwiper"
            >
              {movies.map((movie) => (
                <SwiperSlide key={movie.id}>
                  <img
                    src={movie.thumbnail}
                    alt={`${movie.title} poster`}
                    className="rounded-lg"
                  />
                  <div
                    onClick={() =>
                      navigate(
                        `/${
                          movie.contentType === "Movie" ? "movies" : "tv-shows"
                        }/${movie.title}`
                      )
                    }
                    className="absolute inset-0 bg-white opacity-0 hover:opacity-[0.08] transition-opacity duration-300 rounded-lg"
                  ></div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </>
  );
};

export default Carousels;
