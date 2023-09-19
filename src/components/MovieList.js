import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return;
  return (
    <div className="text-white px-3  overflow-x-auto scroll-smooth hover:scroll-auto">
      <p className="py-6 px-4 font-bold">{title}</p>
      <div className="flex  ">
        <div className="flex ">
          {movies.map(
            (movie) =>
              movie.poster_path && (
                <MovieCard
                  key={movie.id}
                  postrePath={movie.poster_path}
                ></MovieCard>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
