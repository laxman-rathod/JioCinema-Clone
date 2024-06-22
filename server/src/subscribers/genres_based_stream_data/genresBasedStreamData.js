import moviesSchema from "../../schema/movies/moviesSchema.js";

const genresBasedMovies = async (req, res) => {
  try {
    const genress = req.params.genres;
    if (genress) {
      const streamData = await moviesSchema
        .find({
          genres: { $in: genress },
        })
        .lean();
      res.status(200).json(streamData);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { genresBasedMovies };
