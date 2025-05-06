import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./modules/productsSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});
