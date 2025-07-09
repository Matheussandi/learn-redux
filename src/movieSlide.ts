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
      const newMovie = {
        id: state.movies[state.movies.length - 1].id + 1,
        title: action.payload.title,
        description: action.payload.description,
        image: action.payload.image,
        star: action.payload.star,
      }
      state.movies.push(newMovie);
    },
    removeMovie: (state, action) => {
      state.movies = state.movies.filter(movie => movie.id !== action.payload);
    },
  },
});

export const { addMovie, removeMovie } = movieSlice.actions;
export default movieSlice.reducer;
