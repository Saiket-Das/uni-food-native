import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cart/cartSlice";
import filterSlice from "./features/filter/filterSlice";
import foodSlice from "./features/food/foodSlice";

const store = configureStore({
  reducer: {
    food: foodSlice,
    cart: cartSlice,
    filter: filterSlice,
  },
});

export default store;
