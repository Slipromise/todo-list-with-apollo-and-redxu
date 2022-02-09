import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { api } from "./TodoApi";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
});

setupListeners(store.dispatch);


export default store;

export type RootState = ReturnType<typeof store.getState>;