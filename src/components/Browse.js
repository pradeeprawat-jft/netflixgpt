import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import SecondaryContainer from "./SecondaryContainer";
import MainContainer from "./MainContainer";
import useUpComingMovie from "../hooks/useUpcomingMovies";
import useTopRatedMovies from "../hooks/useTopRated";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const toggle = useSelector((store) => store.gpt.toggledgptbtn);

  useNowPlayingMovies();
  useUpComingMovie();
  useTopRatedMovies();

  return (
    <div>
      <Header />
      {toggle ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
