import { configureStore } from "@reduxjs/toolkit";
import jcSlice from "../slices/jcSlice";
import userAuth from "../slices/userAuth";
import fetchURI from "../slices/fetchURI";
import currentStreamInfo from "../slices/currentStreamInfo";
import searchData from "../slices/searchData";
const jiocinemaStore = configureStore({
  reducer: {
    jcStates: jcSlice,
    userAuth: userAuth,
    fetchURI: fetchURI,
    currentStreamInfo: currentStreamInfo,
    searchData: searchData,
  },
});

export default jiocinemaStore;
