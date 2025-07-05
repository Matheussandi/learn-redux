import { createSlice } from "@reduxjs/toolkit";
import type { MovieState } from "./types/movieType";
import { moviesMock } from "./mock/movies";

const initialState: MovieState = {
  movies: moviesMock,
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      state.movies.push(action.payload);
    },
    removeMovie: (state, action) => {
      state.movies = state.movies.filter(movie => movie.id !== action.payload.id);
    },
  },
});

export const { addMovie, removeMovie } = movieSlice.actions;
export default movieSlice.reducer;
