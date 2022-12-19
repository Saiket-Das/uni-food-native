import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  available: false,
  categories: [],
  keyword: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,

  reducers: {},
});

export default filterSlice.reducer;
