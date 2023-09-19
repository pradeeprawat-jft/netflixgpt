import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/util";
import { addUpComingMovie } from "../utils/movieSlice";

const useUpComingMovie = () => {
  const dispatch = useDispatch();
  const upComingmovies = useSelector((store) => store.movies.upComingMovie);
  const getUpComingMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const movieData = await data.json();

    dispatch(addUpComingMovie(movieData.results));
  };

  useEffect(() => {
    !upComingmovies && getUpComingMovie();
  }, []);
};

export default useUpComingMovie;
