import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: false,
};

export const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    setDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setDarkMode } = darkModeSlice.actions;

export default darkModeSlice.reducer;
