import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../helpers/api";
import instance from "../../helpers/api";
import { toast } from "react-toastify";

const getAllBlogs = createAsyncThunk("blog/getAll", async (_, thunkAPI) => {
  try {
    const result = await api.getAllBlogs();
    return result;
  } catch (error) {
    toast.error(error.response.data.message);
    return thunkAPI.rejectWithValue(error);
  }
});

const addBlog = createAsyncThunk("blog/add", async (blog, thunkAPI) => {
  try {
    const result = await api.addBlog(blog);
    toast.success(result.message);
  } catch (error) {
    toast.error(error.response.data.message);
    return thunkAPI.rejectWithValue(error);
  }
});

const deleteBlog = createAsyncThunk("blog/delete", async (id, thunkAPI) => {
  try {
    const result = await api.deleteBlog(id);
    toast.success("Article deleted successfully");
  } catch (error) {
    toast.error(error.response.data.message);
    return thunkAPI.rejectWithValue(error);
  }
});
