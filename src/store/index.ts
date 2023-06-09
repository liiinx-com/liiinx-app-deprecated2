import { configureStore } from "@reduxjs/toolkit";

import webpageReducer from "./webpage.slice";

export const store = configureStore({
  reducer: {
    webpage: webpageReducer,
  },
  //    middleware(getDefaultMiddleware) {
  //      return getDefaultMiddleware().concat(pokemonApi.middleware);
  //    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
