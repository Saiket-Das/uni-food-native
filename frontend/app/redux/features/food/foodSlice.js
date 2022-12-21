import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  food: [],
  isLoading: false,
  postSuccess: false,
  isError: false,
  error: "",
};

const foodSlice = createSlice({
  name: "food",
  initialState,

  reducers: {},
});

export default foodSlice.reducer;
