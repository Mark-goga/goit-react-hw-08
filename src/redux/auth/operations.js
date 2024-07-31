import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global/"

export const register = createAsyncThunk("auth/register", async (newUser , thunkAPI) => {
  try {
    const response = await axios.post("/users/signup", newUser);
    console.log(response);
    return response.data
  } catch (e) {
    console.log(e);
    thunkAPI.rejectWithValue(e.message)
  }
})
export const login = createAsyncThunk("auth/login", async (value , thunkAPI) => {
  try {
    const response = await axios.post("users/login", value);
    console.log(response);
    return response.data
  } catch (e) {
    thunkAPI.rejectWithValue(e.message)
    
  }
})