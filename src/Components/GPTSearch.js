import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import { BG_Netflix } from '../Utils/Img_Links'

const GPTSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img className="h-709" src={BG_Netflix} alt="Background-Image" />
      </div>
      <GPTSearchBar/>
    </div>
  )
}

export default GPTSearch
