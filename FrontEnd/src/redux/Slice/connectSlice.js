import { createSlice } from "@reduxjs/toolkit"
import { auth } from "../../services/callAPI"

const initialState = {
    token: null,
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
            state.error = false
            sessionStorage.clear()
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(auth.fulfilled, (state, action) => {
            state.token = action.payload
            state.isLoggedIn = true
            state.error = null
        })
        .addCase(auth.pending, (state) => {
            state.token = null
            state.isLoggedIn = true
            state.error = null
        })
        .addCase(auth.rejected, (state, action) => {
            state.token = null
            state.isLoggedIn = false
            state.error = action.error.message
        })
    }
})


export const {signOut} = signInSlice.actions
export default signInSlice.reducer