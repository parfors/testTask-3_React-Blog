import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../helpers/api";
import instance from "../../helpers/api";
import { toast } from "react-toastify";

const token = {
  setToken(token) {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  deleteToken() {
    instance.defaults.headers.common.Authorization = "";
  },
};

export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      const result = await api.performRegistration(user);
      toast.success("Registration success");
      return result;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    const result = await api.performLogin(user);
    toast.success("Login success");
    token.setToken(result.token);
    return result;
  } catch (error) {
    toast.error(error.response.data.message);
    return thunkAPI.rejectWithValue(error);
  }
});

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    const result = await api.performLogout();
    token.deleteToken();
    toast.success("Logout success");
    return result;
  } catch (error) {
    toast.error(error.response.data.message);
    return thunkAPI.rejectWithValue(error);
  }
});

export const current = createAsyncThunk(
  "auth/current",
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    if (state.auth.token === "") {
      return rejectWithValue("no user found");
    }
    token.setToken(state.auth.token);
    try {
      const result = api.getCurrent();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
