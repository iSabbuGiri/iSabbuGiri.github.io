import React from 'react'
import './testimonials.css'
import AVT1 from '../../assets/avatar1.jpg'
import AVT2 from '../../assets/avatar2.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import {Swiper, SwiperSlide } from 'swiper/react';

//Import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVT1,
    name: 'JOhn john',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, ut.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, ut.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, ut.'
  },
  {
    avatar: AVT2,
    name: 'JOhn john',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, ut.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, ut.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, ut.'
  }
]

const testimonials = () => {
  return (
    <section id='testimonials'>
        <h5>Review from clients</h5>
        <h2>Testimonials</h2>

        <Swiper className='container testimonials__container'>
          
            {
              data.map(({avatar, name, review}, index) => {
                return (
                  <SwiperSlide key={index} className='testimonial'>
                    <div className="client__avatar">
                        <img src={avatar} />
                    </div>
                    <h5 className='client__name'>{name}</h5>
                    <small className='client__review'>
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

export default testimonials