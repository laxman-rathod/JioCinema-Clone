// import { createSlice } from "@reduxjs/toolkit";

// const userAuth = createSlice({
//   name: "userAuth",
//   initialState: {
//     success: false,
//     username: "",
//     email: "",
//     mobileNumber: "",
//   },
//   reducers: {
//     user_auth: (state, action) => {
//       state.success = action.payload.success;
//       state.username = action.payload.username;
//       state.email = action.payload.email;
//       state.mobileNumber = action.payload.mobileNumber;

//       // store the users data in the local storage
//     },
//     clearUserAuth: (state) => {
//       localStorage.removeItem("userData");
//       return initialState; // Reset to the initial empty state
//     },
//   },
// });

// export const { user_auth, clearUserAuth } = userAuth.actions;
// export default userAuth.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  success: false,
  username: "",
  email: "",
  mobileNumber: "",
};

// Try to load user data from localStorage on app startup
const storedUser = localStorage.getItem("userData");
const initialUserState = storedUser ? JSON.parse(storedUser) : initialState;

const userAuth = createSlice({
  name: "userAuth",
  initialState: initialUserState,
  reducers: {
    user_auth: (state, action) => {
      state.success = action.payload.success;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.mobileNumber = action.payload.mobileNumber;

      // Store updated user data in localStorage
      const { username, email, mobileNumber } = state;
      localStorage.setItem(
        "userData",
        JSON.stringify({ username, email, mobileNumber })
      );
    },
    clearUserAuth: (state) => {
      localStorage.removeItem("userData");
      return initialState; // Reset to the initial empty state
    },
  },
});

export const { user_auth, clearUserAuth } = userAuth.actions;
export default userAuth.reducer;
