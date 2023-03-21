import React from 'react'
import './About.css'
import image from '../../assets/Profile.jpg'
import { FaAward } from 'react-icons/fa'
import {FiUsers} from "react-icons/fi"
import { VscFolderLibrary } from 'react-icons/vsc'
const About = () => {
  return (
<section id='about'>
    <div className='heading'>
        <h5>Get To Know Me</h5>
        <h2> About me</h2>
  </div>
  <div className="about__container">
    <div className="about__me">
      <div className="about__image">
        <img src={image} className="abt" alt='dara' />
      </div>
    </div>
    <div className='about__info'>                             
      <div className="about__card">
        <article className='about__cards'>
          <FaAward className="icon"/>
          <h5>Experience</h5>
          <h2>1+ year Working Experience</h2>
        </article>
        <article className='about__cards'>
            <FiUsers className="icon"/>
            <h5>Clients</h5>
            <h2>50+ clients </h2>
        </article>
        <article className='about__cards'>
            <VscFolderLibrary className='icon'/>
            <h5>Projects</h5>
            <h2>20+ completed projects</h2>
        </article>    
      </div>
    <p className='p__about'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Dolores ab dignissimos possimus reprehenderit ea delectus 
      modi explicabo perspiciatis veniam voluptas
      sapiente quidem nobis minus reiciendis,
      cupiditate, ratione neque ipsam aspernatur?
    </p>  
  </div>
          <div className='btnabout'>
              <a href="#contact" className='btn'>Let's Talk</a>
          </div>
          </div>
</section>
  )
}

export default About;