// moviesHandle.js
import tvShowsSchema from "../../schema/tv-shows/tvShowsSchema.js";

const getAllShows = async () => {
  try {
    const allShows = await tvShowsSchema.find({}).lean();
    console.log(allShows);
  } catch (error) {
    console.error(error);
  }
};

const topRatedShowsHindi = async (req, res) => {
  try {
    const topShows = await tvShowsSchema
      .find({ ratings: { $gte: 6 }, language: "Hindi" })
      .lean();
    if (topShows.length <= 0) {
      res.status(500).json({ error: "not found!" });
      return;
    }
    res.json(topShows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const freshEpisodes = async (req, res) => {
  try {
    const episodes = await tvShowsSchema
      .find({ language: "Hindi" })
      .sort({ title: -1 })
      .lean();
    if (episodes.length <= 0) {
      res.status(500).json({ error: "not found!" });
      return;
    }
    res.json(episodes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { getAllShows, topRatedShowsHindi, freshEpisodes };
