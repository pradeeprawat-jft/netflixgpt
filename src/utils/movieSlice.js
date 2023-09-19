import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovie: null,
    videoBackground: null,
    upComingMovie: null,
    topRatedMovie: null,
  },
  reducers: {
    addNowPlayingMovie: (state, action) => {
      state.nowPlayingMovie = action.payload;
    },
    addVideoBackground: (state, action) => {
      state.videoBackground = action.payload;
    },
    addUpComingMovie: (state, action) => {
      state.upComingMovie = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovie = action.payload;
    },
  },
});

export const {
  addNowPlayingMovie,
  addVideoBackground,
  addUpComingMovie,
  addTopRatedMovies,
} = movieSlice.actions;
export default movieSlice.reducer;
