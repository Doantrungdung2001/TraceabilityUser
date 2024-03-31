import React, { useEffect } from "react";
import "./search.css";
import video from "../../Assets/Video/video1.mp4";


import Aos from "aos";
import "aos/dist/aos.css";

const Search = ({projectId}) => {
  // Create a react hook to add aa scroll animation
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const handleClick = () => {
    // window.location.href = '/';
  }

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
          {/* <span data-aos="fade-up" className="smallText">
            Here We Go
          </span> */}
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
            <button className="btn flex" onClick={handleClick()}>
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
