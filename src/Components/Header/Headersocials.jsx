import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithubSquare} from 'react-icons/fa'
import {FcDribbble} from 'react-icons/fc'
const Headersocials = () => {
  return (
    <div className='Header__socials'>
        <a href="https://linkedin.com" target="__blank"><BsLinkedin/></a>
        <a href="https://github.com" target="__blank"><FaGithubSquare/></a>
        <a href="https://dribble.com" target="__blank"><FcDribbble/></a>
    </div>
  )
}

export default Headersocials;