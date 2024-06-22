import React, { useEffect, useState } from "react";
import axios from "axios";

// import "./styles7.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useNavigate, useParams } from "react-router-dom";

const Carousels = () => {
  const [movies, setMovies] = useState([]);
  const [Genres, setGenres] = useState();
  const { streamType, title } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentStreamData = await axios.get(
          `http://localhost:8000/api/${streamType}/${title}`
        );
        setGenres(currentStreamData.data.genres);

        const response = await axios.get(
          `http://localhost:8000/api/genres-based-contents/${Genres}`
        );
        setMovies(response.data);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchData();
  }, [Genres]);

  return (
    <div className="mx-6 mt-3">
      <div className="w-full h-80 cursor-pointer">
        <Swiper
          slidesPerView={5}
          spaceBetween={16}
          loop={true}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Navigation]}
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
  );
};

export default Carousels;
