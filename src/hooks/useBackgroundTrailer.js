import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/util";
import { addVideoBackground } from "../utils/movieSlice";

const useBackgroundTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getBackgroundTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const info = await data.json();

    const filteredVideo = info.results.filter(
      (video) => video.type === "Trailer"
    );
    const finalTrailer =
      filteredVideo.length > 0 ? filteredVideo[0] : info.results[0];

    dispatch(addVideoBackground(finalTrailer));
  };

  useEffect(() => {
    getBackgroundTrailer();
  }, []);
};

export default useBackgroundTrailer;
