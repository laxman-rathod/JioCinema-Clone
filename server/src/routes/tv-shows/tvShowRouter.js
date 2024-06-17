import express from "express";
import {
  freshEpisodes,
  topRatedShowsHindi,
} from "../../subscribers/tv-shows/tvshowsHandle.js";

const router = express.Router();

router.get("/toprated-originals", topRatedShowsHindi);
router.get("/fresh-episodes", freshEpisodes);

export default router;
