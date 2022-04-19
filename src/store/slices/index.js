import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  themeMode: localStorage.getItem("themeMode") ?? "light",
};

const store = createSlice({
  name: "store",
  initialState,
  reducers: {
    setThemeMode: (state, action) => ({
      ...state,
      themeMode: action.payload,
    }),
  },
});

export const { setThemeMode } = store.actions;
export default store.reducer;
