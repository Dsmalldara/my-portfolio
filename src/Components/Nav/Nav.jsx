import React from 'react'
import './nav.css'
import {HiOutlineHome} from 'react-icons/hi'
import {CgProfile} from 'react-icons/cg'
import {VscBook} from 'react-icons/vsc'
import {RiServiceFill} from 'react-icons/ri'
import {MdOutlineContactPhone} from 'react-icons/md'
import { useState } from 'react';
const Nav = () => {
const [useNav, setUseNav] = useState("")
  return (
    <nav >
        <a  href="#header"  onClick={()=> setUseNav("#header")} className={ useNav==="#header" ? 'active' : ''}><HiOutlineHome/></a>
        <a href="#about" onClick={()=> setUseNav("#about")} className={useNav==='#about' ? "active" : ""}><CgProfile/></a>
        <a href="#experience" onClick={()=> setUseNav("#experience")} className={useNav==="#experience" ? 'active' : ""} ><VscBook/></a>
        <a href="#service" onClick={()=>setUseNav("#service")} className={useNav==="#service" ? 'active' : ""} ><RiServiceFill/></a>
     <a href="#contact"   onClick={()=> setUseNav("#contact")} className={useNav === '#contact' ? 'active' : ""}><MdOutlineContactPhone/></a>
    </nav>
  )
}
 
export default Nav;