import { combineReducers } from "@reduxjs/toolkit";
import { productsReducer } from "./modules/productsSlice";
import { themeReducer } from "./modules/themeSlice";
import { usersReducer } from "./modules/usersSlice";
import { userLoggedReducer } from "./modules/userLoggedSlice";

export const rootReducer = combineReducers({
  products: productsReducer,
  theme: themeReducer,
  users: usersReducer,
  userLogged: userLoggedReducer,
});
