import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  address: null,
  startDate: null,
  startBlock: 0,
  ethPrice: 0,
};

export const FilterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    updateState: (state, action) => {
      state[action.payload.key] = action.payload.value;
    },
  },
});

export const { updateState } = FilterSlice.actions;

export default FilterSlice.reducer;
