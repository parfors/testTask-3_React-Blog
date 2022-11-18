import { createSlice } from "@reduxjs/toolkit";
// import posts from "helpers/posts";
import posts from "helpers/posts";
import { toast } from "react-toastify";

const blogSlice = createSlice({
  name: "blogs",
  initialState: { blogs: posts },
  reducers: {
    addBlog: (state, action) => {
      state.blogs.push(action.payload);

      toast.success("Пост добавлен успешно");
    },
    deleteBlog: (state, action) => {
      state.blogs = state.blogs.filter((el) => el.id !== action.payload);
      toast.success("Пост удален");
    },
  },
});

export const { addBlog, deleteBlog } = blogSlice.actions;

export default blogSlice.reducer;
