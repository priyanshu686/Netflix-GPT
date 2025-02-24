import React from 'react'
import UseMoviesCall from '../Hooks/UseMoviesCall'
import MainContainer from './MainContainer';

const Browser = () => {
  UseMoviesCall();
  return (
    <div>
      <MainContainer/>
    </div>
  )
}

export default Browser;