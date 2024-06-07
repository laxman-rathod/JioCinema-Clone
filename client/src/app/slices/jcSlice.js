import { createSlice } from "@reduxjs/toolkit";

const jcSlice = createSlice({
  name: "jcStates",
  initialState: { currentState: "home" },
  reducers: {
    currentStateFunc: (state, action) => {
      state.currentState = action.payload.currentState;
    },
  },
});

export const { currentStateFunc } = jcSlice.actions;
export default jcSlice.reducer;
