import tvShowsSchema from "../../schema/tv-shows/tvShowsSchema.js";

const searchTVShowsByTitle = async (req, res) => {
  const title = req.params.search;

  try {
    if (title) {
      const regex = new RegExp(title, "i");

      const searchMovies = await tvShowsSchema
        .find({
          $or: [
            { title: { $regex: regex } },
            { description: { $regex: regex } },
            { tagLine: { $regex: regex } },
          ],
        })
        .lean();

      res.status(200).json(searchMovies);
    } else {
      res.status(400).json({ error: "Search title is required" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { searchTVShowsByTitle };
