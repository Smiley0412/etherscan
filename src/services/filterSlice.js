import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  address: "",
  startBlock: 0,
  ethPrice: 0,
  balance: 0,
  balanceHistory: 0,
  data: {
    total: 0,
    page: 0,
    page_size: 25,
    result: [],
  },
  tokens: [],
  selectedToken: null,
  errorMessage: null,
};

export const FilterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    updateState: (state, action) => {
      state[action.payload.key] = action.payload.value;
      state.loading = false;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
      state.loading = false;
    },
  },
});

export const { updateState, setLoading, setErrorMessage } = FilterSlice.actions;

export default FilterSlice.reducer;
