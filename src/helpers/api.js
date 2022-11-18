import axios from "axios";

const BASE_URL = "http://localhost:3002/";

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

export const getAllBlogs = async () => {
  const { data } = await instance.get("/api/blogs");
  return data;
};

export const performLogout = async () => {
  const { data } = await instance.get("api/users/logout");
  return data;
};

export default instance;
