import React from 'react'
import './Nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { HiOutlineUser } from 'react-icons/hi'
import { SiFacebookgaming } from 'react-icons/si'
import { MdCollectionsBookmark } from 'react-icons/md'
import { RiContactsLine } from 'react-icons/ri'
import { useState } from 'react'

const Nav = () => {

  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><HiOutlineUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><SiFacebookgaming /></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><MdCollectionsBookmark /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><RiContactsLine /></a>
    </nav>
  )
}

export default Nav