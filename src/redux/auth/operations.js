import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global/";

function setAuthHeader(token) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`
}

export const register = createAsyncThunk("auth/register", async (newUser , thunkAPI) => {
  try {
    const response = await axios.post("/users/signup", newUser);
    setAuthHeader(response.data.token);
    return response.data
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message)
  }
})
export const login = createAsyncThunk("auth/login", async (value , thunkAPI) => {
  try {
    const response = await axios.post("users/login", value);
    setAuthHeader(response.data.token);
    return response.data
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message)
    
  }
})
export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    const response = await axios.post("/users/logout");
    setAuthHeader("");  
  }catch(e) {
    return thunkAPI.rejectWithValue(e.message);
  }
})
export const refreshUser = createAsyncThunk("auth/refresh", async (_, thunkAPI) => {
  const reduxState = thunkAPI.getState();
  setAuthHeader(reduxState.auth.token);
  try {
    const response = await axios.get("/users/current");
    return response.data
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
},
  {
    condition: (_, thunkAPI) => {
    const reduxState = thunkAPI.getState();
      return reduxState.auth.token !== null;
  }}
)