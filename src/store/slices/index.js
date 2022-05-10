import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  themeMode: localStorage.getItem("themeMode") ?? "light",
  loginState: {
    isLogin: localStorage.getItem("isLogin") ?? false,
    name: localStorage.getItem("name") ?? "",
  },
};

const store = createSlice({
  name: "store",
  initialState,
  reducers: {
    setThemeMode: (state, action) => ({
      ...state,
      themeMode: action.payload,
    }),
    setLoginState: (state, action) => ({
      ...state,
      loginState: action.payload,
    }),
  },
});

export const { setThemeMode, setLoginState } = store.actions;
export default store.reducer;
