import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  address: null,
  startDate: null,
  startBlock: 0,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    updateState: (state, action) => {
      state[action.payload.key] = action.payload.value;
    },
  },
});

export const { updateState } = filterSlice.actions;

export default filterSlice.reducer;
