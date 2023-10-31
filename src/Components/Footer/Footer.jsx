import React from 'react'
import video from '../../Assets/Video/video2.mp4'
import {AiOutlineSend} from 'react-icons/ai'

const Footer = () => {
  return (
    <section className='footer'>
      <div className="videoDiv">
        <video src={video} loop autoPlay muted type="video/mp4">
        </video>
      </div>
      
      <div className="secContent container">
        <div className="contactDiv flex">
          <div className="text">
            <small>KEEP IN TOUCH</small>
            <h2>With us</h2>
          </div>
          
          <div className="inputDiv flex">
            <input type="text" placeholder='Enter Email Address' />
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