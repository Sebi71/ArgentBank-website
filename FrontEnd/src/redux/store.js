import { configureStore } from "@reduxjs/toolkit";
import signInSlice from "./Slice/connectSlice"
import profileSlice from "./Slice/profileSlice";

export const store = configureStore({
    reducer: {
        signIn : signInSlice,
        profile: profileSlice,
    }
})