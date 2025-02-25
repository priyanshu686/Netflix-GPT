import React from 'react'
import useMoviesCall from '../Hooks/useMoviesCall';
import MainContainer from './MainContainer';
import usePopularWebseries from '../Hooks/usePopularWebseries';
import usePopularMovies from '../Hooks/usePopularMovies';
import SecondaryContainer from './SecondaryContainer';
import useTopRatedMovie from '../Hooks/useTopRatedMovie';
// import useTrailerCall from '../Hooks/UseTrailerCall';
import useUpcomingMovie from '../Hooks/useUpcomingMovie';

const Browser = () => {
  useMoviesCall();
  usePopularWebseries();
  usePopularMovies();
  useTopRatedMovie();
  useUpcomingMovie();
  return (
    <div>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browser;