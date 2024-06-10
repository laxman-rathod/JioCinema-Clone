import { configureStore } from "@reduxjs/toolkit";
import jcSlice from "../slices/jcSlice";
import userAuth from "../slices/userAuth";
const jiocinemaStore = configureStore({
  reducer: {
    jcStates: jcSlice,
    userAuth: userAuth,
  },
});

export default jiocinemaStore;
