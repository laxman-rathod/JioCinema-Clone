// import moviesSchema from "../../schema/movies/moviesSchema.js";

// const genresBasedMovies = async (req, res) => {
//   try {
//     const genress = req.params.genres;
//     if (genress) {
//       const streamData = await moviesSchema
//         .find({
//           genres: { $in: genress },
//         })
//         .lean();
//       res.status(200).json(streamData);
//     }
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// export { genresBasedMovies };
import moviesSchema from "../../schema/movies/moviesSchema.js";

const genresBasedMovies = async (req, res) => {
  try {
    // 1. Input Validation & Sanitization:
    let genres = req.params.genres;
    if (!genres) {
      return res.status(400).json({ message: "Genres parameter is required." });
    }

    // Assuming genres is a comma-separated string, split and sanitize:
    genres = genres.split(",").map((genre) => genre.trim());

    // 2. Query and Response:
    const streamData = await moviesSchema
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

export { genresBasedMovies };
