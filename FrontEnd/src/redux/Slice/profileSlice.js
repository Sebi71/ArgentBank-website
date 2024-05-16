import { createSlice } from "@reduxjs/toolkit";
import { profile } from "../../services/callAPI";

const initialState = {
  user: null,
  error: null,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(profile.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(profile.pending, (state) => {
        state.error = null;
      })
      .addCase(profile.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default profileSlice.reducer;
