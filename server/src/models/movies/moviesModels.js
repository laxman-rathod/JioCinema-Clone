import moviesSchemas from "../../schema/movies/moviesSchema.js";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const createMovies = async () => {
  const options = {
    method: "GET",
    url: "https://imdb-top-100-movies.p.rapidapi.com/",
    headers: {
      "X-RapidAPI-Key": "a402d87d12msha64fcd9bd1c6fbfp134b74jsnd71eb2fd6ee8",
      "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
    },
  };
  try {
    const res = await axios.request(options);
    const data = res.data;
    for (const items of data) {
      const movies = new moviesSchemas({
        id: uuidv4(),
        title: items.title,
        ratings: items.rating,
        genres: items.genres,
        contentType: "Movie",
        thumbnail: items.image,
        description: items.description,
        rank: items.rank,
        releaseDate: items.year,
      });
      await movies.save();
    }

    console.log("Document created!");
  } catch (error) {
    console.log(error);
  }
};

export { createMovies };
