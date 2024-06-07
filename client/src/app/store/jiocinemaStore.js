import { configureStore } from "@reduxjs/toolkit";
import jcSlice from "../slices/jcSlice";
const jiocinemaStore = configureStore({
  reducer: {
    jcStates: jcSlice,
  },
});

export default jiocinemaStore;
