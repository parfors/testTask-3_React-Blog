import axios from "axios";

const BASE_URL = "https://test-task-3-node-blog.onrender.com/";

const instance = axios.create({
  baseURL: BASE_URL,
});

export const performRegistration = async (body) => {
  const { data } = await instance.post("/api/users/register", body);
  return data;
};

export const performLogin = async (body) => {
  const { data } = await instance.post("/api/users/login", body);
  return data;
};

export const performLogout = async () => {
  const { data } = await instance.get("api/users/logout");
  return data;
};

export const getCurrent = async () => {
  const { data } = await instance.get("api/users/current");
  return data;
};

export const getAllBlogs = async ({ page, limit }) => {
  const { data } = await instance.get("/api/blogs", {
    params: {
      page,
      limit,
    },
  });
  return data;
};

export const getCategoryBlogs = async (category) => {
  const { data } = await instance.get(`/api/blogs/${category}`);
  return data;
};
export const getMyBlogs = async () => {
  const { data } = await instance.get(`/api/blogs/my_articles`);
  return data;
};

export const addBlog = async (blog) => {
  const { data } = await instance.post("/api/blogs", blog, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data;
};

export const deleteBlog = async (id) => {
  const { data } = await instance.delete(`/api/blogs/${id}`);
  return data;
};

export default instance;
