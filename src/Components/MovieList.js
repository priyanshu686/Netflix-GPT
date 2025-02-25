import React from 'react'
import MovieCard from './MovieCard';
const MovieList = ({title , info}) => {
    // console.log(info);
  return (
    <div>
      <div>
        <h1 className='text-3xl text-white pb-3 hide-scrollbar my-3'>{title}</h1>
        <div className='flex overflow-x-scroll hide-scrollbar'>
            {info.map((movie) => <MovieCard key={movie.id} info={movie}/> )}
        </div>
      </div>
    </div>
  )
}

export default MovieList
