import newMoviesSchema from "../../schema/movies/newMoviesSchema.js";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const createNewMovies = async () => {
  const options = {
    method: "GET",
    url: "https://imdb-top-100-movies.p.rapidapi.com/",
    headers: {
      "x-rapidapi-key": "a402d87d12msha64fcd9bd1c6fbfp134b74jsnd71eb2fd6ee8",
      "x-rapidapi-host": "imdb-top-100-movies.p.rapidapi.com",
    },
  };

  try {
    const res = await axios.request(options);
    const data = res.data;
    for (const items of data) {
      const movies = new newMoviesSchema({
        id: uuidv4(),
        title: items.title,
        ratings: "",
        genre: items.genre,
        contentType: "Movie",
        thumbnail: items.image,
        description: items.description,
        voteAverage: items.rating,
        releaseDate: items.year,
        runtime: items.runtime,
        productionCompanies: items.production_companies,
        budgets: items.budget,
        revenue: items.revenue,
        tagLine: items.tagline,
      });
      await movies.save();
    }

    console.log("Document created!");
  } catch (error) {
    console.log(error);
  }
};
export default createNewMovies;
