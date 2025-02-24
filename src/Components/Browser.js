import React, { useEffect } from 'react'
import UseMoviesCall from '../Hooks/UseMoviesCall'

const Browser = () => {
  UseMoviesCall();
  return (
    <div>
      <p>Browser</p>
      <h1>Hello</h1>
    </div>
  )
}

export default Browser;