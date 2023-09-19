import React, { useRef,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import lang from "../utils/languageConstraint";
import { API_OPTIONS } from "../utils/util";
import openai from "../utils/openAi";
import { addGptMovieResult } from "../utils/gptSlice";
import SpinnerComponent from "./SpinnerComponent";

const GptSearchBar = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const prompt = useRef(null);
  const language = useSelector((store) => store.config.lang);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
        "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
        API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const {movieResults, movieNames} = useSelector((store) => store.gpt);

  const handleGptSearchClick = async () => {
    const searchText = prompt.current.value;

    const gptQuery =
        "Act as a Movie Recommendation system and suggest some movies for the query : " +
        searchText +
        ". only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    setLoading(true); // Set loading to true

    try {
      const gptResults = await openai.chat.completions.create({
        messages: [{role: "user", content: gptQuery}],
        model: "gpt-3.5-turbo",
      });
      console.log(gptResults.choices?.[0]?.message?.content);

      const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

      const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

      const tmdbResults = await Promise.all(promiseArray);

      console.log(tmdbResults);

      dispatch(
          addGptMovieResult({movieNames: gptMovies, movieResults: tmdbResults})
      );
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false); // Clear loading state when the request is complete (success or error)
    }
  };


  return (
      <div className="pt-[35%] md:pt-[10%] flex justify-center items-center">
        <form
            className="w-full md:w-1/2 bg-black grid grid-cols-12"
            onSubmit={(e) => e.preventDefault()}
        >
          <input
              ref={prompt}
              type="text"
              className="p-3 md:p-4 m-2 md:m-4 col-span-9 rounded-md"
              placeholder={lang[language].placeholder}
          />
          <button
              className="col-span-3 m-2 md:m-4 py-1 md:py-2 px-2 md:px-4 bg-red-700 text-white rounded-lg text-center flex justify-center items-center"
              onClick={handleGptSearchClick}
          >
            {loading ? <SpinnerComponent/> : lang[language].button}
          </button>
        </form>
      </div>
  );
};

export default GptSearchBar;
