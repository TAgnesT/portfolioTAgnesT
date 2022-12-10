import React from 'react'
import './Testimonials.css'
import imgr1 from '../../assets/user1.jpg'
import imgr2 from '../../assets/user2.jpg'
import imgr3 from '../../assets/user3.jpg'
import imgr4 from '../../assets/user4.jpg'

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar: imgr1,
    name: 'Kimo Kalani',
    review: 'SoCal cockroaches are unwelcome, crafty, and tenacious. This frontend development keeps them away...heard about this on gypsy jazz radio, decided to give it a try. This frontend development works excessively well.'
  },
  {
    avatar: imgr2,
    name: 'Marvyn Theobald',
    review: 'If you want real marketing that works and effective implementation - frontend is got you covered. I would be lost without you.'
  },
  {
    avatar: imgr3,
    name: 'Christian Danny',
    review: 'Our new page has really helped our business. I dont always clop, but when I do, it is because of my page. I couldnt have asked for more than this. You guys rock!'
  },
  {
    avatar: imgr4,
    name: 'Ratu Eka',
    review: 'The new webpage has really helped our business. Thank you so much for your help. I would like to personally thank you for your outstanding product. I would be lost without it.'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials_container'
      modules={[ Pagination ]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, review}, index) => {

            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className='client_avatar'>
                  <img src={avatar} />
                </div>
                <h5 className='client_name'>{name}</h5>
                <small className='client_review'>
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>  
    </section>
  )
}

export default Testimonials