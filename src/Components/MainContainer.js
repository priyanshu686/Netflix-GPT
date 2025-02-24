import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const data = useSelector((store)=> store.movie.movies);
    if(!data) return;

    const {id} = data[1];
  return (
    <div>
        <VideoTitle />
        <VideoBackground id={id} />
        
      
    </div>
  )
}

export default MainContainer
