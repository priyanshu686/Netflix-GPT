import React from 'react'
import { IMG_CDN_Link } from '../Utils/Img_Links'

const MovieCard = ({info}) => {
  // console.log(info);
  return (
    <div>
      <div className='w-48 px-2 '>
        <img alt="Movie" src={IMG_CDN_Link+info.poster_path}/>
      </div>
    </div>
  )
}

export default MovieCard
