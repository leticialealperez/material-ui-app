import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NewProduct, Product } from "../../interfaces/product";
import { RootState } from "../types-hooks";

const initialState: Product[] = [];

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    add: (currentState, action: PayloadAction<NewProduct>) => {
      currentState.push({
        id: new Date().getTime(),
        isFavorite: false,
        ...action.payload,
      });
    },
    togglefavorite: (currentState, action: PayloadAction<number>) => {
      currentState.forEach((product) => {
        if (product.id === action.payload) {
          product.isFavorite = !product.isFavorite;
        }
      });
    },
  },
});

// Exportamos para poder disparar essas ações no componentes
export const { add, togglefavorite } = productsSlice.actions;

export const selectProducts = (store: RootState) => store.products;

export const productsReducer = productsSlice.reducer;
