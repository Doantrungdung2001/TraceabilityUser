import React from 'react'
import './home.css'
import video from '../../Assets/Video/video1.mp4'

const Home = () => {
  return (
    <section className='home'>
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop 
      type="video/mp4"></video>

      <div className="homeContent container">
        <div className="textDiv">
          <span className="smallText">
            Our Packages
          </span>
          <h1 className="homeTitle">
            Search Code
          </h1>
        </div>
      </div>
      
    </section>
  )
}

export default Home