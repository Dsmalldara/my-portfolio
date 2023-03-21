import React from "react";
import "./services.css";
import {FaStarOfDavid} from 'react-icons/fa';
const Services = () => {
  return (
    <section id="service">
      <h5>what i offer</h5>
      <h2>Services</h2>
      <div className="service">
      <FaStarOfDavid className="iconss"/><p>Building of top notch website's user-facing code and the architecture of its immersive user experience design</p>
        <br></br>
        <FaStarOfDavid className="iconss"/><p>Developing and maintaining the user interface of a website</p>
        <br></br>
         <FaStarOfDavid className="iconss"/><p>implementing design on mobile webiste and creating tools that improve site interaction regardless of the browser</p>
      </div>
    </section>
  
  );
};

export default Services;
