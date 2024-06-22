import express from "express";
import {
  englishFreshEpisodes,
  hindiFreshEpisodes,
  hindiShows,
  hotShows,
  popularThrillersShows,
  romanticShows,
  top10Shows,
  topRatedShowsHindi,
} from "../../subscribers/tv-shows/tvshowsHandle.js";
import { streamTvShowsDetails } from "../../subscribers/streaming_details/streamingDetails.js";
import { searchTVShowsByTitle } from "../../subscribers/search/searchTVShows.js";

const router = express.Router();

router.get("/toprated-originals", topRatedShowsHindi);
router.get("/hindi-fresh-episodes", hindiFreshEpisodes);
router.get("/english-fresh-episodes", englishFreshEpisodes);
router.get("/hot-shows", hotShows);
router.get("/romantic-shows", romanticShows);
router.get("/top-thrillers", popularThrillersShows);
router.get("/top-hindiShows", hindiShows);
router.get("/top10-shows", top10Shows);

// streaming tv shows details
router.get("/:title", streamTvShowsDetails);
router.post("/:search", searchTVShowsByTitle);

export default router;
