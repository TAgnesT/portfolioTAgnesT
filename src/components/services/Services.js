import React from 'react'
import './Services.css'
import {MdCheck} from 'react-icons/md'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className='service'>
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service_list'>
            <li>
              <MdCheck className='service_list-icon'/>
              <p>Design Research - Design Thinking </p>
            </li>
            <li>
              <MdCheck className='service_list-icon'/>
              <p>Aware Of User Needs - Functionality exploration </p>
            </li>
            <li>
              <MdCheck className='service_list-icon'/>
              <p>Product That Delights Users - Prototypes </p>
            </li>
            <li>
              <MdCheck className='service_list-icon'/>
              <p>Visual- And Interaction Design </p>
            </li>
            <li>
              <MdCheck className='service_list-icon'/>
              <p>Usability testing - Technology & Functionality </p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service_head">
            <h3>Web Development</h3>
          </div>

          <ul className='service_list'>
            <li>
              <MdCheck className='service_list-icon'/>
              <p>Ideas, requirements - Understanding the needed content </p>
            </li>
            <li>
              <MdCheck className='service_list-icon'/>
              <p>Plannning- Understanding the available resources, deciding on technologies </p>
            </li>
            <li>
              <MdCheck className='service_list-icon'/>
              <p>Design & Development - Finding the structure and design, ensure correct flow </p>
            </li>
            <li>
              <MdCheck className='service_list-icon'/>
              <p>Maintenance - Changes and re-designs </p>
            </li>
            <li>
              <MdCheck className='service_list-icon'/>
              <p>Launch - On live server!  </p>
            </li>
            <li>
              <MdCheck className='service_list-icon'/>
              <p>Testing - Complete functionality cross-browser </p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service_head">
            <h3>Content Creation & Marketing</h3>
          </div>

          <ul className='service_list'>
            <li>
              <MdCheck className='service_list-icon'/>
              <p>Content Goals - Strategy, costumer experience goals, purpose of content </p>
            </li>
            <li>
              <MdCheck className='service_list-icon'/>
              <p>Useful & Quality Content - Post topics and working titles </p>
            </li>
            <li>
              <MdCheck className='service_list-icon'/>
              <p>Content Audit - To reveal opportunities, promotion of content </p>
            </li>
            <li>
              <MdCheck className='service_list-icon'/>
              <p>Content Plan - Complete content calendar </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services