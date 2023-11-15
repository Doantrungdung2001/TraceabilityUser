import React from 'react'
import './avatar.css'
import farm1 from '../../Assets/Image/farm1.jpg'

const Avatar = () => {
  return (
    <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container">
            <div className="hero-left">
                Left section
            </div>

            <div className="flexCenter hero-right">
                <div className="image-container">
                    <img src={farm1} alt="" />
                </div>
            </div>
        </div>

    </section>
  )
}

export default Avatar