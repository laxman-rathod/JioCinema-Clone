import { createSlice } from "@reduxjs/toolkit";

const jcSlice = createSlice({
  name: "jcStates",
  initialState: { currentState: false, profileSettigsState: false },
  reducers: {
    currentStateFunc: (state, action) => {
      state.currentState = !state.currentState;
    },
    openProfileSettings: (state, action) => {
      state.profileSettigsState = !state.profileSettigsState;
    },
  },
});

export const { currentStateFunc, openProfileSettings } = jcSlice.actions;
export default jcSlice.reducer;
