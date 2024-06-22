import moviesSchemas from "../../schema/movies/moviesSchema.js";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const createMovies = async () => {
  const options = {
    method: "GET",
    url: "https://api.potterdb.com/v1/movies",
  };
  try {
    const res = await axios.request(options);
    const data = res.data.data;
    for (const items of data) {
      const movies = new moviesSchemas({
        id: uuidv4(),
        title: items.attributes.title,
        ratings: "8.8",
        genres: ["Fantasy", "Mystery", "Adventure", "Sceience Fiction"],
        contentType: "Movie",
        thumbnail: items.attributes.poster,
        description: items.attributes.summary,
        rank: 87,
        releaseDate: items.attributes.release_date,
        runtime: items.attributes.running_time,
      });
      await movies.save();
    }

    console.log("Document created!");
  } catch (error) {
    console.log(error);
  }
};

export { createMovies };
