import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  available: false,
  categories: [],
  keyword: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,

  reducers: {
    toggle: (state) => {
      state.available = !available.stock;
    },
  },
});

export default filterSlice.reducer;
