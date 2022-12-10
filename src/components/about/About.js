import React from 'react'
import './About.css'
import ME from '../../assets/headprof2.jpg'
import {FaAward} from 'react-icons/fa'
import {FaUsers} from 'react-icons/fa'
import {BsFolder2Open} from 'react-icons/bs'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">

        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

          <div className="about_content">
            <div className="about_cards">
              <article className='about_card'>
                  <FaAward className='about_icon'/>
                  <h5>Experience</h5>
                  <small>Coding Languages</small>
              </article>

              <article className='about_card'>
                  <FaUsers className='about_icon'/>
                  <h5>Clients</h5>
                  <small>Worldwide</small>
              </article>

              <article className='about_card'>
                  <BsFolder2Open className='about_icon'/>
                  <h5>Projects</h5>
                  <small>80+ Projects Completed</small>
              </article>
            </div>

              <p>I am a Frontend developer, who's 
              always looking for new challenges and innovative technologies. I find it important to learn about different cultures and to gather experience from international environments. I speak hungarian, english, italian, german and spanish.</p>

              <a href="#contact" className='btn btn-primary'>Let's Talk</a>

          

        </div>
      </div>
    </section>
  )
}

export default About