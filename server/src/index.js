import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectToDB from "./config/connectToDb.js";
import { createMovies } from "./models/movies/moviesModels.js";
import { createTVShows } from "./models/tv-shows/TVShowsModels.js";
import moviesRouter from "./routes/movies/moviesRouter.js";
import usersRouter from "./routes/users_auth/usersRouter.js";
import tvShowRouter from "./routes/tv-shows/tvShowRouter.js";
import { searchData } from "./api/youtubeDataAPI.js";
import genresRouter from "./routes/genres_based_content/genresRouter.js";

// dot env variables configuration
dotenv.config();

const PORT = process.env.PORT;
const connUrl = process.env.MONGO_URL;

const app = express();

// Correct CORS Configuration
app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin",
    "https://jiocinema-app-clone.vercel.app/"
  ); // Allow your frontend origin
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE"); // Allow essential methods
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Credentials", "true"); // If using cookies

  next();
});

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
// app.use(cors(corsOptions));
app.use(express.static("public"));

// middleware routes
app.use("/api/movies", moviesRouter);
app.use("/api/users", usersRouter);
app.use("/api/tv-shows", tvShowRouter);
app.use("/api/genres-based-contents", genresRouter);

connectToDB(connUrl);
// createMovies();
// createTVShows();

// youtube data api
app.get("/search", searchData);

app.listen(PORT, () => {
  console.log("Server Up!");
});
