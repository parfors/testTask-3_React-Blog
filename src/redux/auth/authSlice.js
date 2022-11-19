import { createSlice } from "@reduxjs/toolkit";
import * as authOperations from "./auth-operations";

const initialState = {
  user: { name: "", email: "" },
  token: "",
  isLoggedIn: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [authOperations.register.pending]: (state) => {
      state.error = null;
      state.loading = true;
    },
    [authOperations.register.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.loading = false;
    },
    [authOperations.register.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [authOperations.login.pending]: (state) => {
      state.error = null;
      state.loading = true;
      state.isLoggedIn = false;
    },
    [authOperations.login.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.token = payload.token;
      state.user.name = payload.user.name;
      state.user.email = payload.user.email;
      state.isLoggedIn = true;
    },
    [authOperations.login.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [authOperations.logout.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [authOperations.logout.fulfilled]: (state) => {
      state.loading = false;
      state.user.name = "";
      state.user.email = "";
      state.token = "";
      state.isLoggedIn = false;
    },
    [authOperations.logout.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [authOperations.current.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [authOperations.current.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.user.name = payload.name;
      state.user.email = payload.email;
      state.isLoggedIn = true;
    },
    [authOperations.current.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.user.name = "";
      state.user.email = "";
      state.token = "";
      state.isLoggedIn = false;
    },
  },
});

export default authSlice.reducer;
