import { configureStore } from "@reduxjs/toolkit";
import signInSlice from "./Slice/connectSlice"

export const store = configureStore({
    reducer: {
        signIn : signInSlice,
    }
})