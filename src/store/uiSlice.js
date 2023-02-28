import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  windowSize: [window.innerWidth, window.innerHeight],
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialAuthState,
  reducers: {
    windowSize(state, action) {
      state.windowSize = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
