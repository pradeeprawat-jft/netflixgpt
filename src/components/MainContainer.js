import React from "react";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovie);

  const getRandomNumber = () => {
    return Math.floor(Math.random() * 20) + 1;
  };

  if (!movies) return null;

  const randomMovieIndex = getRandomNumber();

  const selectedMovie = movies[randomMovieIndex];

  const { original_title, overview, id } = selectedMovie;

  return (
    <div className="pt-[40%] bg-black md:pt-0">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
