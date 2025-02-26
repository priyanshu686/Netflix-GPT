import React from "react";
import useMoviesCall from "../Hooks/useMoviesCall";
import MainContainer from "./MainContainer";
import usePopularWebseries from "../Hooks/usePopularWebseries";
import usePopularMovies from "../Hooks/usePopularMovies";
import SecondaryContainer from "./SecondaryContainer";
import useTopRatedMovie from "../Hooks/useTopRatedMovie";
import useUpcomingMovie from "../Hooks/useUpcomingMovie";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";

const Browser = () => {
  useMoviesCall();
  usePopularWebseries();
  usePopularMovies();
  useTopRatedMovie();
  useUpcomingMovie();
  const toggle = useSelector((store) => store.Toggle?.Toggle);
  return (
    <div>
      {toggle ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer /> <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browser;
