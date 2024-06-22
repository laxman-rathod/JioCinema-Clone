import moviesSchema from "../../schema/movies/moviesSchema.js";

const getAllMovies = async (req, res) => {
  try {
    const movies = await moviesSchema.find({}).lean();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getTopRatedMovies = async (req, res) => {
  try {
    const movies = await moviesSchema
      .find({ voteAverage: { $gte: 8.5 } })
      .sort({ title: 1 })
      .lean();

    if (movies.length <= 0) {
      res.status(500).json({ error: "Movie not found!" });
      return;
    }
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getsifiAndFantasyMovies = async (req, res) => {
  try {
    const movies = await moviesSchema
      .find({ voteAverage: { $gte: 6 } })
      .sort({ tagLine: -1 })
      .lean();
    if (movies.length <= 0) {
      res.status(500).json({ error: "Movie not found!" });
      return;
    }
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getTopRankedMovies = async (req, res) => {
  try {
    const movies = await moviesSchema
      .find({ rank: { $lte: 5 } })
      .sort({ rank: 1 });
    if (movies.length <= 0) {
      res.status(500).json({ error: "Movie not found!" });
      return;
    }
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getRomanticMovies = async (req, res) => {
  try {
    const movies = await moviesSchema.find({ genres: { $in: "Romance" } });
    if (movies.length <= 0) {
      res.status(500).json({ error: "Movie not found!" });
      return;
    }
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getDramaMovies = async (req, res) => {
  try {
    const movies = await moviesSchema.find({ genres: { $in: "Drama" } });
    if (movies.length <= 0) {
      res.status(500).json({ error: "Movie not found!" });
      return;
    }
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getHorrorMovies = async (req, res) => {
  try {
    const movies = await moviesSchema.find({ genres: { $in: "Horror" } });
    if (movies.length <= 0) {
      res.status(500).json({ error: "Movie not found!" });
      return;
    }
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getActionMovies = async (req, res) => {
  try {
    const movies = await moviesSchema.find({
      genres: { $in: ["Adventure", "Action"] },
    });
    if (movies.length <= 0) {
      res.status(500).json({ error: "Movie not found!" });
      return;
    }
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAnimeMovies = async (req, res) => {
  try {
    const movies = await moviesSchema.find({
      genres: { $in: "Animation" },
    });
    if (movies.length <= 0) {
      res.status(500).json({ error: "Movie not found!" });
      return;
    }
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getFamilyAndKidsMovies = async (req, res) => {
  try {
    const movies = await moviesSchema.find({
      genres: { $in: ["Family", "Kids"] },
    });
    if (movies.length <= 0) {
      res.status(500).json({ error: "Movie not found!" });
      return;
    }
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const englishMovies = async (req, res) => {
  try {
    const movies = await moviesSchema
      .find({ voteAverage: { $gte: 7.5 } })
      .sort({ title: 1 })
      .lean();
    if (movies.length <= 0) {
      res.status(500).json({ error: "Movie not found!" });
      return;
    }
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const romanticMovies = async (req, res) => {
  try {
    const movies = await moviesSchema
      .find({ genres: { $in: "Romance" } })
      .lean();
    if (movies.length <= 0) {
      res.status(500).json({ error: "Movie not found!" });
      return;
    }
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const comedyMovies = async (req, res) => {
  try {
    const movies = await moviesSchema
      .find({ genres: { $in: "Comedy" } })
      .sort({ title: 1 })
      .lean();
    if (movies.length <= 0) {
      res.status(500).json({ error: "Movie not found!" });
      return;
    }
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const topMovies = async (req, res) => {
  try {
    const movies = await moviesSchema
      .find({
        genres: { $in: ["Action", "Adventure", "Science Fiction", "Fantasy"] },
      })
      .sort({ voteAverage: 1 });
    if (movies.length <= 0) {
      res.status(500).json({ error: "Movie not found!" });
      return;
    }
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const inTheSpotLight = async (req, res) => {
  try {
    const movies = await moviesSchema
      .find({
        _id: {
          $gte: "6662f41e2291cf25758bad45",
          $lte: "6662f41e2291cf25758bad47",
        },
      })
      .lean();
    if (movies.length <= 0) {
      res.status(404).json({ error: "Movie not found!" });
      return;
    }
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const hotMovies = async (req, res) => {
  try {
    const movies = await moviesSchema
      .findOne({ title: "The Amazing Spider-Man 2" })
      .lean();
    if (movies.length <= 0) {
      res.status(404).json({ error: "Movie not found!" });
      return;
    }
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const topHollywoodMovies = async (req, res) => {
  try {
    const movies = await moviesSchema
      .find({ ratings: 10 })
      .sort({ title: 1 })
      .lean();
    if (movies.length <= 0) {
      res.status(500).json({ error: "Movie not found!" });
      return;
    }
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const wizerdingWorld = async (req, res) => {
  try {
    const movies = await moviesSchema
      .find({
        title: { $regex: /Harry Potter/i },
      })
      .lean();
    if (movies.length <= 0) {
      res.status(500).json({ error: "Movie not found!" });
      return;
    }
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const trendingHollywoodMovies = async (req, res) => {
  try {
    const movies = await moviesSchema
      .find({ ratings: 10 })
      .sort({ title: -1 })
      .lean();
    if (movies.length <= 0) {
      res.status(500).json({ error: "Movie not found!" });
      return;
    }
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const superheroMovies = async (req, res) => {
  try {
    const movies = await moviesSchema
      .find({
        genres: { $regex: /Superhero/i },
      })
      .sort({ title: 1 })
      .lean();
    if (movies.length <= 0) {
      res.status(500).json({ error: "Movie not found!" });
      return;
    }
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export {
  getAllMovies,
  getTopRatedMovies,
  getsifiAndFantasyMovies,
  getTopRankedMovies,
  getRomanticMovies,
  getDramaMovies,
  getHorrorMovies,
  getActionMovies,
  getAnimeMovies,
  getFamilyAndKidsMovies,
  englishMovies,
  romanticMovies,
  comedyMovies,
  topMovies,
  inTheSpotLight,
  hotMovies,
  topHollywoodMovies,
  wizerdingWorld,
  trendingHollywoodMovies,
  superheroMovies,
};
