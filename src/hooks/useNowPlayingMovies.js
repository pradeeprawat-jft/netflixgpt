import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/util";
import { addNowPlayingMovie } from "../utils/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const nowPlayingmovies = useSelector((store) => store.movies.nowPlayingMovie);

  const getNowPlaying = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const movieData = await data.json();

    dispatch(addNowPlayingMovie(movieData.results));
  };

  useEffect(() => {
    !nowPlayingmovies && getNowPlaying();
  }, []);
};

export default useNowPlayingMovies;
