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
      .sort({ title: 1 });
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
      .find({
        genre: { $in: ["Adventure", "Fantasy", "Science Fiction"] },
      })
      .sort({ voteAverage: -1 });
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
    const movies = await moviesSchema.find({ genre: { $in: "Romance" } });
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
    const movies = await moviesSchema.find({ genre: { $in: "Drama" } });
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
    const movies = await moviesSchema.find({ genre: { $in: "Horror" } });
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
      genre: { $in: ["Adventure", "Action"] },
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
      genre: { $in: "Animation" },
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
      genre: { $in: ["Family", "Kids"] },
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
};
