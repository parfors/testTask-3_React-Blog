import { createSlice } from "@reduxjs/toolkit";
import * as blogOperation from "./blog-operations";

const initialState = {
  blogs: [],
  loading: false,
  error: null,
};

const blogSlice = createSlice({
  name: "blogs",
  initialState: initialState,
  reducers: {},
  extraReducers: {},
});

export default blogSlice.reducer;
