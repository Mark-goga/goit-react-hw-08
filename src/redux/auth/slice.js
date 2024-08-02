import { createSlice } from "@reduxjs/toolkit";
import { login, logOut, refreshUser, register } from "./operations";
import toast from "react-hot-toast";

function erorrToast(text) {
  toast.dismiss();
  toast.error(text);
}
function successToast(text) {
  toast.dismiss();
  toast.success(text);
}

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
    builder.addCase(register.pending, () => { 
      toast.loading("loading..")
    }
    ).addCase(register.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      successToast("you register");
    })
      .addCase(register.rejected, (state , action) => {
        state.user = { name: null, email: null, }
        state.token = null;
        state.isLoggedIn = false;
        erorrToast("please reload page");
      })
      .addCase(login.pending, () => { 
        toast.loading("loading..");
      }
      ).addCase(login.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      successToast("you logIn");
    })
      .addCase(login.rejected, (state) => {
        state.user = { name: null, email: null, }
        state.token = null;
        state.isLoggedIn = false;
        erorrToast("please reload page");
      }).addCase(logOut.pending, () => { 
        toast.loading("loading..");
      }
      ).addCase(logOut.fulfilled, (state) => {
        state.user = { name: null, email: null, }
        state.token = null;
        state.isLoggedIn = false;
        successToast("you logOut");
      }).addCase(logOut.rejected, () => { 
        erorrToast("please reload page");
      }
      ).addCase(refreshUser.pending, (state) => { 
        state.isRefreshing = true;
        // toast.loading("loading..");
      })
      .addCase(refreshUser.fulfilled, (state , action) => {
        state.isRefreshing = false;
        state.isLoggedIn = true;
        state.user = action.payload;
        // successToast("success");
      }).addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
        // erorrToast("please reload page");
      })
  }
})

export default slice.reducer