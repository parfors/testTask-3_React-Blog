import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../helpers/api";
import { toast } from "react-toastify";

export const getAllBlogs = createAsyncThunk(
  "blog/getAll",
  async (_, thunkAPI) => {
    try {
      const result = await api.getAllBlogs();
      return result;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addBlog = createAsyncThunk("blog/add", async (blog, thunkAPI) => {
  try {
    const result = await api.addBlog(blog);
    toast.success(result.message);
    return result;
  } catch (error) {
    toast.error(error.response.data.message);
    return thunkAPI.rejectWithValue(error);
  }
});

export const deleteBlog = createAsyncThunk(
  "blog/delete",
  async (id, thunkAPI) => {
    try {
      await api.deleteBlog(id);
      toast.success("Article deleted successfully");
      return id;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getCategoryBlogs = createAsyncThunk(
  "blog/getCategory",
  async (category, thunkAPI) => {
    try {
      const result = await api.getCategoryBlogs(category);
      return result;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getMyBlogs = createAsyncThunk(
  "blog/getMy",
  async (_, thunkAPI) => {
    try {
      const result = await api.getMyBlogs();
      return result;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
