import React, { useEffect } from "react";
import "./search.css";
import video from "../../Assets/Video/video1.mp4";

import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";

import Aos from "aos";
import "aos/dist/aos.css";

const Search = () => {
  // Create a react hook to add aa scroll animation
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="home">
      <div className="overlay"></div>
      <video
        className="video"
        src={video}
        muted
        autoPlay
        loop
        type="video/mp4"
      ></video>

      <div className="homeContent container">
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">
            Here We Go
          </span>
          <h1 data-aos="fade-up" className="homeTitle">
            Truy xuất nguồn gốc
          </h1>
        </div>

        <div className="searchDiv">
          <div className="inputDiv flex">
            <input
              className="input"
              type="text"
              placeholder="Nhập mã code....."
            />
            <button className="btn flex" type="submit">
              Search
            </button>
          </div>
        </div>
        {/* <div data-aos="fade-up" className="homeFooterIcons flex">
          <div className="rightIcons">
            <FiFacebook className='icon'/>
            <AiOutlineInstagram className='icon'/>
          </div>

          <div className="leftIcons">

          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Search;
