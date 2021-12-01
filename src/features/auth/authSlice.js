import { createSlice } from "@reduxjs/toolkit";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = user
  ? { email: user.email, token: user.token, isLoggedIn: true }
  : { email: null, token: null, isLoggedIn: false };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, { payload: { email, token } }) => {
      state.email = email;
      state.token = token;
      state.isLoggedIn = true;
    },
  },
});

export const { setCredentials } = authSlice.actions;

export default authSlice.reducer;
