import React from 'react'
import { Logo_Netflix } from '../Utils/Img_Links'

const Header = () => {
  return (
    <div className=' absolute px-8 py-2  bg-gradient-to-b from-black w-full z-30'>
      <img className="w-44"  src={Logo_Netflix} alt='Logo'/>
    </div>
  )
}

export default Header
