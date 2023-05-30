import { configureStore } from "@reduxjs/toolkit";

import themeReducer from "./theme.slice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
  //    middleware(getDefaultMiddleware) {
  //      return getDefaultMiddleware().concat(pokemonApi.middleware);
  //    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
