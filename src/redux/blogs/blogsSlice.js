import { createSlice } from "@reduxjs/toolkit";
import * as blogOperation from "./blog-operations";

const initialState = {
  blogs: [],
  blogLoading: false,
  blogError: null,
  total: "",
};

const blogSlice = createSlice({
  name: "blogs",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [blogOperation.getAllBlogs.pending]: (state) => {
      state.blogLoading = true;
      state.blogError = false;
    },
    [blogOperation.getAllBlogs.fulfilled]: (state, { payload }) => {
      state.blogLoading = false;
      state.blogs = payload.data;
      state.total = payload.total;
    },
    [blogOperation.getAllBlogs.rejected]: (state, { payload }) => {
      state.blogLoading = false;
      state.blogError = payload;
    },
    [blogOperation.addBlog.pending]: (state, { payload }) => {
      state.blogLoading = true;
      state.blogError = false;
    },
    [blogOperation.addBlog.fulfilled]: (state, { payload }) => {
      state.blogLoading = false;
      state.blogs.push(payload.data);
    },
    [blogOperation.addBlog.rejected]: (state, { payload }) => {
      state.blogLoading = false;
      state.blogError = payload;
    },
    [blogOperation.deleteBlog.pending]: (state) => {
      state.blogLoading = true;
      state.blogError = false;
    },
    [blogOperation.deleteBlog.fulfilled]: (state, { payload }) => {
      state.blogLoading = false;
      state.blogs = state.blogs.filter((el) => el._id !== payload);
    },
    [blogOperation.deleteBlog.rejected]: (state, { payload }) => {
      state.blogLoading = false;
      state.blogError = payload;
    },
    [blogOperation.getCategoryBlogs.pending]: (state) => {
      state.blogLoading = true;
      state.blogError = false;
    },
    [blogOperation.getCategoryBlogs.fulfilled]: (state, { payload }) => {
      state.blogLoading = false;
      state.blogs = payload.data;
    },
    [blogOperation.getCategoryBlogs.rejected]: (state, { payload }) => {
      state.blogLoading = false;
      state.blogError = payload;
      state.blogs = [];
      state.total = "";
    },
    [blogOperation.getMyBlogs.pending]: (state) => {
      state.blogLoading = true;
      state.blogError = false;
    },
    [blogOperation.getMyBlogs.fulfilled]: (state, { payload }) => {
      state.blogLoading = false;
      state.blogs = payload.data;
    },
    [blogOperation.getMyBlogs.rejected]: (state, { payload }) => {
      state.blogLoading = false;
      state.blogError = payload;
      state.blogs = [];
      state.total = "";
    },
  },
});

export default blogSlice.reducer;
