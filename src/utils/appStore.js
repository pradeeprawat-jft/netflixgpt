import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./userSlice";
import gptReducer from "./gptSlice";
import movieReducer from "./movieSlice";
import ConfigReducer from "./configSlice";


const appStore = configureStore({
  reducer: {
    user: useReducer,
    movies: movieReducer,
    gpt: gptReducer,
    config: ConfigReducer,
  },
});

export default appStore;
