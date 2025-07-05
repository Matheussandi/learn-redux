import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieSlide";

export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: {
    movies: movieReducer,
  },
});
