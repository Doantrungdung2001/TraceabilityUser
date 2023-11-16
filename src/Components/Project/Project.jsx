import React from 'react'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import "swiper/css"
import './project.css'
import { sliderSettings } from '../../Utils/common'
const data = [
  {
    "name" : "Aliva Priva Jardin",
    "price" : "47,043",
    "detail": "Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur , DKI Jakarta",
    "image" : "https://wallpaperaccess.com/full/803471.jpg"
  },
  {
    "name" : "Asatti Garden City",
    "price" : "63,043",
    "detail": "Pahlawan Street XVII No.215",
    "image" : "http://getwallpapers.com/wallpaper/full/d/d/d/426328.jpg"
  },
  {
    "name" : "Citralan Pulri Serang",
    "price" : "35.853",
    "detail": "Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur , DKI Jakarta",
    "image" : "https://wallpapercave.com/wp/wp3644160.jpg"
  },
  {
    "name" : "Aliva Priva Jardin",
    "price" : "47,043",
    "detail": "Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur , DKI Jakarta",
    "image" : "http://getwallpapers.com/wallpaper/full/e/6/e/425797.jpg"
  },
  {
    "name" : "Aliva Priva Jardin",
    "price" : "47,043",
    "detail": "Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur , DKI Jakarta",
    "image" : "https://wallpaperaccess.com/full/803473.jpg"
  }
]

const SliderButton = () =>{
  const swiper = useSwiper();
  return(
    <div className="flexCenter r-buttons">
        <button onClick={()=> swiper.slidePrev()}>&lt;</button>
        <button onClick={()=> swiper.slideNext()}>&gt;</button>
    </div>
  )
}

const Project = () => {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className='orangeText'>List Project</span>
          <span className='primaryText'>Popular Residencies</span>
        </div>

        <Swiper {...sliderSettings}>
          <SliderButton />
          {
            data.map((card , i) => (
              <SwiperSlide key={i}>
                <div className="flexColStart r-card">
                  <img className='r-image' src={card.image} alt="home" />

                  <span className='secondaryText r-price'>
                    <span style={{color: "orange"}}>$</span>
                    <span>{card.price}</span>
                  </span>

                  <span className='primaryText'>{card.name}</span>
                  <span className='secondaryText'>{card.detail}</span>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </section>
  )
}

export default Project