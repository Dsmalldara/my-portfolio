import React from 'react'
import './header.css'
import  Profile from '../../assets/Profile.jpg'
import Headersocials from '../Header/Headersocials'
import Control from '../Header/Control'
const Header = () => {
  return (
<header id='header'>
  <div className="container header__container">
   <div className='headnav'>
    <h5>Hello I'm </h5>
    <h1>Dada Darasimi</h1>
    <h5 className='text-light'>Frontend Developer</h5>
    </div>
   <div className='ctrl'>
   <Control/>
   </div>
    <Headersocials />
    <div>
    <a href="#contact" className='scroll__down'>Scroll Down</a>
      <img src={Profile} alt='me' className='img1' />
    </div>
    
  </div>
</header>
  )
}

export default Header;