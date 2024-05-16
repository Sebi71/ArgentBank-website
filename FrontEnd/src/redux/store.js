import { configureStore } from "@reduxjs/toolkit";
import signInSlice from "./Slice/connectSlice"
import profileSlice from "./Slice/profileSlice";
import editProfileSlice from "./Slice/editProfileSlice";

export const store = configureStore({
    reducer: {
        signIn : signInSlice,
        profile: profileSlice,
        editProfile: editProfileSlice,
    }
})