import { createSlice } from "@reduxjs/toolkit"
import { profile } from "../../services/callAPI"

const initialState = {
    // user:null,
    email: null,
    password: null,
    fisrtName: null,
    lastName: null,
    userName: null,
    token: sessionStorage.getItem("token"),
    error: null,
}

export const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
   
    },
    extraReducers: (builder) => {
        builder
        .addCase(profile.fulfilled, (state, action) => {
            // state.user = action.payload
            state.email = action.payload
            state.email = action.payload
            state.fisrtName = action.payload
            state.lastName = action.payload
            state.userName = action.payload
            state.token = action.payload.token
       })
        .addCase(profile.pending, (state) => {

            state.error = null
        })
        .addCase(profile.rejected, (state, action) => {

            state.error = action.error.message
        })
}
})


export default profileSlice.reducer