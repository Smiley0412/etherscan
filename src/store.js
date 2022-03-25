import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./services/FilterSlice";

export const store = configureStore({
  reducer: {
    filter: filterSlice,
  },
});
