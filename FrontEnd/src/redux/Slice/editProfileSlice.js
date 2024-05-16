import { createSlice } from "@reduxjs/toolkit";
import { editProfile } from "../../services/callAPI";

const initialState = {
  newUserName: null,
  error: null,
};

export const editProfileSlice = createSlice({
  name: "editProfile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(editProfile.fulfilled, (state, action) => {
        state.newUserName = action.payload
        state.error = null
    })
    .addCase(editProfile.pending, (state) => {
        state.newUserName = null
        state.error = null
    })
    .addCase(editProfile.rejected, (state, action) => {
        state.newUserName = null
        state.error = action.error.message
    })
}

});

export default editProfileSlice.reducer;


