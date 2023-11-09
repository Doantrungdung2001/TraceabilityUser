import React, {useEffect} from 'react'
import video from '../../Assets/Video/video2.mp4'
import {AiOutlineSend} from 'react-icons/ai'
import './footer.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
  // Create a react hook to add aa scroll animation
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
    <section className='footer'>
      <div className="videoDiv">
        <video className='video' src={video} loop autoPlay muted type="video/mp4">
        </video>
      </div>
      
      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small className='small'>KEEP IN TOUCH</small>
            <h2>With us</h2>
          </div>
          
          <div className="inputDiv flex">
            <input className='input' data-aos="fade-up" type="text" placeholder='Enter Email Address' />
            <button className='btn flex' type='submit'>
              SEND
              <AiOutlineSend className="icon"/>
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          
        </div>
      </div>
    </section>
  )
}

export default Footer