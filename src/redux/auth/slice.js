import { createSlice } from "@reduxjs/toolkit";
import { login, logOut, refreshUser, register } from "./operations";

export const slice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: builder => {
    builder.addCase(register.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    })
      .addCase(register.rejected, (state) => {
        state.user = { name: null, email: null, }
        state.token = null;
        state.isLoggedIn = false;
      })
    .addCase(login.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    })
      .addCase(login.rejected, (state) => {
        state.user = { name: null, email: null, }
        state.token = null;
        state.isLoggedIn = false;
      }).addCase(logOut.fulfilled, (state) => {
        state.user = { name: null, email: null, }
        state.token = null;
        state.isLoggedIn = false;
      }).addCase(refreshUser.pending, (state) => { 
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state , action) => {
        state.isRefreshing = false;
        state.isLoggedIn = true;
        state.user = action.payload;
      }).addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      })
  }
})

export default slice.reducer