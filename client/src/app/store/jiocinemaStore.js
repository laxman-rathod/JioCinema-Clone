import { configureStore } from "@reduxjs/toolkit";
import jcSlice from "../slices/jcSlice";
import userAuth from "../slices/userAuth";
import fetchURI from "../slices/fetchURI";
import currentStreamInfo from "../slices/currentStreamInfo";
import searchData from "../slices/searchData";
import tabControls from "../slices/tabControls";
import { loadState, saveStateMiddleware } from "../../util/localStorageUtils";
import movieSuggestions from "../slices/movieSuggestions";

// Load initial state from localStorage
const preloadedState = loadState();

const jiocinemaStore = configureStore({
  reducer: {
    jcStates: jcSlice,
    userAuth: userAuth,
    fetchURI: fetchURI,
    currentStreamInfo: currentStreamInfo,
    searchData: searchData,
    tabControls: tabControls,
    movieSuggestions: movieSuggestions,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(saveStateMiddleware),
  preloadedState,
});

export default jiocinemaStore;
