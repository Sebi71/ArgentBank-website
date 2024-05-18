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
        state.error = null;
      })
      .addCase(profile.pending, (state) => {
        state.user = null;
        state.error = null;
      })
      .addCase(profile.rejected, (state, action) => {
        state.user = null;
        state.error = action.error.message;
      });
  },
});

export default profileSlice.reducer;
