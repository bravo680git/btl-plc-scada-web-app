import { configureStore } from "@reduxjs/toolkit";
import storeReducer from "./slices";

const store = configureStore({
  reducer: {
    store: storeReducer,
  },
});

export default store;
