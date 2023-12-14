import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  total: 0,
  amount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart: (state, action) => {
      state.amount += 1;
      const cartItem = state.cartItems.find((item) => {
        return item.id === action.payload.id;
      });
      cartItem
        ? (cartItem.amount = cartItem.amount + 1)
        : state.cartItems.push({ ...action.payload, amount: 1 });
    },
    removeFromCart: (state, action) => {
      state.amount -= 1;
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    increase: (state, action) => {
      state.amount += 1;
      const itemIndex = state.cartItems.findIndex((item) => {
        return item.id === action.payload;
      });
      console.log(itemIndex);
      state.cartItems[itemIndex].amount += 1;
    },
    decreament: (state, action) => {
      if (state.amount > 1 && state.amount > 0) {
        state.amount -= 1;
      }
      const itemIndex = state.cartItems.findIndex((item) => {
        return item.id === action.payload;
      });

      if (state.cartItems[itemIndex].amount > 1) {
        state.cartItems[itemIndex].amount -= 1;
      }
    },
    reset: (state, action) => {
      state.amount = 0;
      state.cartItems = [];
    },
  },
});

export const { addToCart, removeFromCart, increase, decreament, reset, total } =
  cartSlice.actions;
export default cartSlice.reducer;
