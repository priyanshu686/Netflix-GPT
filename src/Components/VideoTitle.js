import React from 'react'
import { useSelector } from 'react-redux'

const VideoTitle = () => {
    const data = useSelector((store)=> store.movie.movies);
    if(!data) return; 

    // console.log(data[1]);
  return (
    <div className='w-screen aspect-video  pt-[20%] px-20 absolute text-white bg-gradient-to-r from-black'>
    
      <h1 className=' text-6xl font-bold'>{data[0].title}</h1>
      <p className='py-6 text-xs w-1/4'>{data[0].overview}</p>
      <div>
        <button className='bg-white text-black p-4 px-12 text-xl  rounded-lg hover:bg-opacity-80'> Play </button>
        <button className='mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg'> More Info </button>
      </div>
    </div>
  )
}

export default VideoTitle
