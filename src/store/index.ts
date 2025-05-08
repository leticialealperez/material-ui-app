import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./root-reducer";
import {
  persistReducer,
  persistStore,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import localStorage from "redux-persist/lib/storage";

const persistedReducers = persistReducer(
  {
    key: "app-ecommerce",
    storage: localStorage,
    // whitelist: ["theme"], // quero que esteja presente lá no localStorage
    // blacklist: ['products'] // eu não quero que seja armazenado
  },
  rootReducer
);

export const store = configureStore({
  reducer: persistedReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE],
      },
    }),
});

export const persistedStore = persistStore(store);
