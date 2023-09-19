import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    toggledgptbtn: false,
    movieResults: null,
    movieNames: null,
  },
  reducers: {
    showGptSearch: (state) => {
      state.toggledgptbtn = !state.toggledgptbtn;
    },
    addGptMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
  },
});

export const { showGptSearch, addGptMovieResult } = gptSlice.actions;
export default gptSlice.reducer;
