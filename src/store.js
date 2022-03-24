import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./services/filterSlice";

export const store = configureStore({
  reducer: {
    filter: filterSlice,
  },
});
