import React from 'react'
import './Contact.css'
import {SiMinutemailer} from 'react-icons/si'
import {FaWhatsapp} from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_34clbtz', 'template_x9mtexa', form.current, 'qMYtJBgbJ3GG7lwHx')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">

          <article className="contact_option">
            <SiMinutemailer className='contact_option-icon'/>
            <h4>E-mail</h4>
            <h5>gmagiic@hotmail.com</h5>
            <a href="mailto:gmagiic@gmail.com" target="_blank">Send A Message</a>
          </article>

          <article className="contact_option">
            <FaWhatsapp className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+123456789</h5>
            <a href="https://api.whatsapp.com/send?phone+393203264527" target="_blank">Send A Message</a>
          </article>

        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message Here' required></textarea>
          <button type='submit' className='btnx btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact