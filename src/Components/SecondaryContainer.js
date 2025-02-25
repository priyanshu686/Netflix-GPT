import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const Movie = useSelector((store) => store.movie?.movies)
    const Webseries = useSelector((store) => store.movie?.webseries)
    const Popular = useSelector((store)=>store.movie?.PopularMovies) 
    const TopRated = useSelector((store) => store.movie?.TopRatedMovies)
    const Upcoming = useSelector((store) => store.movie?.UpcomingMovies)
    if(Movie == null) return ;
    if(Webseries == null) return;
    if(Popular == null) return;
    if(TopRated == null) return;
    if(Upcoming == null) return;
    // console.log(Movie);
  return (
    <div className='bg-black relative z-20 w-full'>
    <div className='-my-20 '>
      <MovieList title="Movies" info = {Movie}/>
      <MovieList title="Webseries" info = {Webseries}/>
      <MovieList title="Popular Movies" info = {Popular}/>
      <MovieList title="TopRated Movies" info = {TopRated}/>
      <MovieList title="Upcoming Movies" info = {Upcoming}/>
    </div>
    </div>
  )
}

export default SecondaryContainer
