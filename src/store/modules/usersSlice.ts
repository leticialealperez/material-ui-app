import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../interfaces/user";
import { RootState } from "../types-hooks";

const initialState: User[] = [];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    register: (state, action: PayloadAction<Omit<User, "id">>) => {
      state.push({
        ...action.payload,
        id: new Date().getTime(),
      });
    },
  },
});

export const { register } = usersSlice.actions;

export const selectUsers = (store: RootState) => store.users;

export const usersReducer = usersSlice.reducer;
