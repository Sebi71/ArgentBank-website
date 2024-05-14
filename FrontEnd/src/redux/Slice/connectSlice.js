import { createSlice } from "@reduxjs/toolkit"
import { auth } from "../../services/callAPI"

const initialState = {
    user: null,
    token: null,
    isLoggedIn: false,
    error: null,
}

export const signInSlice = createSlice({
    name: "signIn",
    initialState,
    reducers: {
        signOut: (state) => {
            state.user = null
            state.token = null
            state.isLoggedIn = false
            state.error = false
            localStorage.clear()
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(auth.fulfilled, (state, action) => {
            state.user = action.payload
            state.token = action.payload.token
            state.isLoggedIn = true
            state.error = null
            localStorage.setItem("token", action.payload.token)
        })
        .addCase(auth.pending, (state) => {
            state.user = null
            state.token = null
            state.isLoggedIn = true
            state.error = null
        })
        .addCase(auth.rejected, (state, action) => {
            state.user = null
            state.token = null
            state.isLoggedIn = false
            state.error = action.error.message
        })
}
})


export const {signOut} = signInSlice.actions
export default signInSlice.reducer