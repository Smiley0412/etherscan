import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  address: "",
  startDate: null,
  startBlock: 0,
  ethPrice: 0,
  data: {
    total: 0,
    page: 0,
    page_size: 25,
    result: []
  }
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
