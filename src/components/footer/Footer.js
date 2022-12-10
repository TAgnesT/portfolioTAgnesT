import React from 'react'
import './Footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiNetlify} from 'react-icons/si'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer-logo'>AGNES TOTH</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/agnes-toth-b79200172/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/TAgnesT" target="_blank"><FaGithub /></a>
        <a href="https://app.netlify.com/teams/tagnest/" target="_blank"><SiNetlify /></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer