import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import Footer from "./Footer";

const SecondaryContainer = () => {
  const nowPlayingmovies = useSelector((store) => store.movies.nowPlayingMovie);
  const upComingmovies = useSelector((store) => store.movies.upComingMovie);
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovie);
  return (
    <div className="bg-black">
      <div className="mt-0 md:-mt-52 p-2 md:pl-12 relative z-20">
        <MovieList title="Now Playing" movies={nowPlayingmovies}></MovieList>
        <MovieList title="UpComing Movies" movies={upComingmovies}></MovieList>
        <MovieList title="Top Rated Movies" movies={topRatedMovies}></MovieList>
        <MovieList title="Popular" movies={upComingmovies}></MovieList>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default SecondaryContainer;
