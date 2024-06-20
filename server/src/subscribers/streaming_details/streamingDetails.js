import moviesSchema from "../../schema/movies/moviesSchema.js";
import tvShowsSchema from "../../schema/tv-shows/tvShowsSchema.js";

const streamMoviesDetails = async (req, res) => {
  try {
    const stream = await moviesSchema
      .findOne({ title: req.params.title })
      .lean();
    if (stream) res.json(stream);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const streamTvShowsDetails = async (req, res) => {
  try {
    const stream = await tvShowsSchema
      .findOne({ title: req.params.title })
      .lean();
    if (stream) res.json(stream);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { streamMoviesDetails, streamTvShowsDetails };
