import React, { useEffect,useState } from "react";
import "./search.css";
import video from "../../Assets/Video/video1.mp4";
import Aos from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const Search = ({ projectId }) => {
  const navigate = useNavigate();
  const [inputData, setInputData] = useState('');

  const handleChange = (event) => {
    setInputData(event.target.value);
  };
  // Create a react hook to add aa scroll animation
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const handleClick = ({ data }) => {
    // if (projectId && data === projectId) {
    //   navigate(`/results/${projectId}`);
    // } else {
    //   navigate(`/404-notfound`);
    // }
  };

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
              value={inputData}
              onChange={handleChange}
            />
            <button className="btn flex" onClick={handleClick(inputData)}>
              Tra
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
