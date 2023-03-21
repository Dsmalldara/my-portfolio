import React from 'react'
import './experience.css'
import {BsPatchCheckFill}  from 'react-icons/bs'
const experience = () => {
  return (
    <section id='experience'>
      <h5>Skills i have</h5>
      <h2>My Experience</h2>
      <div className="experience_container">
        <div className="frontend_container">
        <h2>Frontend Development</h2>
      <div content>
          <article className='details flex'>
            <div>
              <BsPatchCheckFill />
            </div>
            <div>
              <h4>HTML</h4>
              <small className='text_small'>Experience</small>
            </div>
          </article>
          <article className='details flex'>
            <div>
            <BsPatchCheckFill/>
            </div>
            <div>
              <h4>CSS</h4>
              <small className='text_small'>Intermediate</small>
            </div>
          </article>
          <article className='details flex'>
              <div>
              <BsPatchCheckFill/>
            </div>
            <div>
              <h4>JavaScript</h4>
              <small className='text_small'>Intermediate</small>
            </div>
          </article>
          <article className='details flex'>
            <div>
              <BsPatchCheckFill/>
            </div>
            <div>
              <h4>Reactjs</h4>
              <small className='text_small'>Intermediate</small>
            </div>
          </article>
        </div>
      </div>
    <div className='experience_backend'>
      <h2>Backend Development</h2>
      <article className='details flex'>
    <div>
        <BsPatchCheckFill/>
        </div>
        <div>
          <h4>Node js</h4>
          <small className='text_small'>Experience</small>
        </div>
      </article>
      <article className='details flex'>
        <div>
          <BsPatchCheckFill/>
        </div>
        <div>
          <h4>CSS</h4>
          <small className='text_small'>Intermediate</small>
        </div>
      </article>
      <article className='details flex'>
        <div>
          <BsPatchCheckFill/>
        </div>
        <div>
          <h4>JavaScript</h4>
          <small className='text_small'>Intermediate</small>
        </div>
      </article>
      <article className='details flex'>
        <div>
          <BsPatchCheckFill/>
        </div>
        <div>
          <h4>Reactjs</h4>
          <small className='text_small'>Intermediate</small>
        </div>
      </article>
    </div>
    </div>
    </section>
  )
}

export default experience