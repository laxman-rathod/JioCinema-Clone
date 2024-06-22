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

const hindiFreshEpisodes = async (req, res) => {
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

const englishFreshEpisodes = async (req, res) => {
  try {
    const episodes = await tvShowsSchema.find({ language: "English" }).lean();
    if (episodes.length <= 0) {
      res.status(500).json({ error: "not found!" });
      return;
    }
    res.json(episodes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const hotShows = async (req, res) => {
  try {
    const show = await tvShowsSchema.find({ title: "Gaanth" }).lean();
    if (show.length <= 0) {
      res.status(500).json({ error: "not found!" });
      return;
    }
    res.json(show);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const romanticShows = async (req, res) => {
  try {
    const getRomanticShows = await tvShowsSchema
      .find({ genres: { $in: "Romance" } })
      .sort({ title: 1 })
      .lean();
    if (getRomanticShows.length <= 0) {
      res.status(500).json({ error: "not found!" });
      return;
    }
    res.json(getRomanticShows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const popularThrillersShows = async (req, res) => {
  try {
    const thrillerShows = await tvShowsSchema
      .find({ genres: { $in: "Thriller" } })
      .lean();
    if (thrillerShows.length <= 0) {
      res.status(500).json({ error: "not found!" });
      return;
    }
    res.json(thrillerShows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const hindiShows = async (req, res) => {
  try {
    const topShows = await tvShowsSchema
      .find({ ratings: { $gte: 6 }, language: "Hindi" })
      .sort({ title: 1 })
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

const top10Shows = async (req, res) => {
  try {
    const topShows = await tvShowsSchema
      .find({ ratings: { $gte: 7.5 }, language: "Hindi", language: "English" })
      .sort({ title: 1 })
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

const keywordBasedShows = async (req, res) => {
  try {
    // 1. Input Validation & Sanitization:
    let genres = req.params.keywords;
    if (!genres) {
      return res.status(400).json({ message: "Genres parameter is required." });
    }

    // Assuming genres is a comma-separated string, split and sanitize:
    genres = genres.split(",").map((genre) => genre.trim());

    // 2. Query and Response:
    const streamData = await tvShowsSchema
      .find({ genres: { $in: genres } }) // Use sanitized 'genres'
      .lean();

    if (streamData.length === 0) {
      return res
        .status(404)
        .json({ message: "No movies found for the specified genres." });
    }

    res.status(200).json(streamData);
  } catch (error) {
    // 3. Improved Error Handling:
    console.error("Error fetching movies by genre:", error); // Log the error
    res.status(500).json({ message: "Internal server error." });
  }
};

export {
  getAllShows,
  topRatedShowsHindi,
  hindiFreshEpisodes,
  englishFreshEpisodes,
  hotShows,
  romanticShows,
  popularThrillersShows,
  hindiShows,
  top10Shows,
  keywordBasedShows,
};
