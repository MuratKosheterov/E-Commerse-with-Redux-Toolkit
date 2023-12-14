import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import sidebarSlice from "./sidebarSlice";
export const store = configureStore({
  reducer: {
    cartAdd: cartSlice,
    sidebar: sidebarSlice
  },
});
