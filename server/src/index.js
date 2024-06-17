import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectToDB from "./config/connectToDb.js";
import { createMovies } from "./models/movies/moviesModels.js";
import { createTVShows } from "./models/tv-shows/TVShowsModels.js";
import moviesRouter from "./routes/movies/moviesRouter.js";
import createNewMovies from "./models/movies/newMoviesModel.js";
import usersRouter from "./routes/users_auth/usersRouter.js";
import tvShowRouter from "./routes/tv-shows/tvShowRouter.js";

// dot env variables configuration
dotenv.config();

const PORT = process.env.PORT || 8000;
const connUrl =
  process.env.CONNECTIONURL || "mongodb://localhost:27017/JioCinemaDB";

const app = express();

// client configuration options
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(express.static("public"));

// routes
app.use("/api/movies", moviesRouter);
app.use("/api/users", usersRouter);
app.use("/api/tv-shows", tvShowRouter);

connectToDB(connUrl);
// createNewMovies();
// createMovies();
// createTVShows();

app.listen(PORT, () => {
  console.log("Server Up!");
});
