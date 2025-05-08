import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../interfaces/user";
import { RootState } from "../types-hooks";

const initialState: User = {
  id: 0,
  name: "",
  email: "",
  password: "",
};

const userLoggedSlice = createSlice({
  name: "userLogged",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    logout: (state) => {
      state.id = initialState.id;
      state.name = initialState.name;
      state.email = initialState.email;
      state.password = initialState.password;
    },
  },
});

export const { login, logout } = userLoggedSlice.actions;

export const selectUserLogged = (store: RootState) => store.userLogged;

export const userLoggedReducer = userLoggedSlice.reducer;
