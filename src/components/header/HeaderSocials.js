import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiNetlify} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/agnes-toth-b79200172/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/TAgnesT" target="_blank"><FaGithub /></a>
        <a href="https://app.netlify.com/teams/tagnest/" target="_blank"><SiNetlify /></a>
    </div>
  )
}

export default HeaderSocials