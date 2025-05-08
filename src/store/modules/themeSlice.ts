import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../types-hooks";

interface ThemeInterface {
  value: "dark" | "light";
}

const initialState: ThemeInterface = {
  value: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (currentState) => {
      currentState.value = currentState.value === "light" ? "dark" : "light";
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export const selectTheme = (store: RootState) => store.theme;

export const themeReducer = themeSlice.reducer;
