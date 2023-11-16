import React from 'react'
import './avatar.css'
import farm1 from '../../Assets/Image/farm1.jpg'
import CountUp from 'react-countup';

const Avatar = () => {
  return (
    <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container ">
            {/* left side */}

            <div className="flexColStart hero-left">
                <div className="orange-circle" />
                <div className="hero-title">
                    <h1>
                        Farm 1
                    </h1>
                </div>

                <div className="flexColStart hero-des">
                    <span> Information of Farm </span>
                    <ul>
                        <li>Intruduction</li>
                        <li>Project</li>
                    </ul>
                </div>

                <div className="flexCenter stats">
                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start={8000} end={9000} duration={4}/>
                            <span>+</span>
                        </span>
                        <span className='secondaryText' >Projects</span>
                    </div>

                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start={20} end={40} duration={4}/>
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>Custumers</span>
                    </div>
                </div>
            </div>

            {/* right side */}
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