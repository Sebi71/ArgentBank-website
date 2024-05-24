import { createSlice } from "@reduxjs/toolkit"
import { auth } from "../../services/callAPI"

const initialState = {
    token: null,
    loading: false,
    isLoggedIn: false,
    error: null,
}

export const signInSlice = createSlice({
    name: "signIn",
    initialState,
    reducers: {
        signOut: (state) => {
            state.token = null
            state.isLoggedIn = false
            state.loading = false
            state.error = null
            sessionStorage.clear()
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(auth.fulfilled, (state, action) => {
            state.token = action.payload
            state.loading = false
            state.isLoggedIn = true
            state.error = null
        })
        .addCase(auth.pending, (state) => {
            state.token = null
            state.loading = true
            state.isLoggedIn = true
            state.error = null
        })
        .addCase(auth.rejected, (state, action) => {
            state.token = null
            state.loading = false
            state.isLoggedIn = false
            action.error.message.includes("400") ? state.error = "invalid email or password" : "Unknown error"
            action.error.message.includes("500") ? state.error = "Server error" : "Unknown error"
            action.error.message.includes("Network Error") ? state.error = "Server error" : "Unknown error"
        })
    }
})


export const {signOut} = signInSlice.actions
export default signInSlice.reducer

