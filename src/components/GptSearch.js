import React from "react";
import { LOGIN_BG } from "../utils/util";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          className="h-screen md:h-full   md object-cover"
          src={LOGIN_BG}
          alt="logo"
        />
      </div>
      <div className="md:pt-0 pt-[20%]">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearch;
