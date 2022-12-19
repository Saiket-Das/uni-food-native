import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart: (state, action) => {
      const selectedFood = state.cart.find(
        (food) => food._id === action.payload._id
      );

      if (!selectedFood) {
        const food = { ...action.payload, quantity: 1 };
        state.cart.push(food);
      } else {
        selectedFood.quantity += 1;

        state.cart
          .filter((food) => food._id !== action.payload._id)
          .push(selectedFood);
      }
    },

    removeFromCart: (state, action) => {
      if (action.payload.quantity > 1) {
        const food = {
          ...action.payload,
          quantity: action.payload.quantity - 1,
        };

        state.cart = state.cart.filter(
          (food) => food._id !== action.payload._id
        );
        state.cart.push(food);
      } else {
        state.cart = state.cart.filter(
          (food) => food._id !== action.payload._id
        );
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
