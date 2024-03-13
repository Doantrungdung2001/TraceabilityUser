import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./project.css";
import { sliderSettings } from "../../Utils/common";
const data = [
  {
    name: "Aliva Priva Jardin",
    price: "47,043",
    detail:
      "Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur , DKI Jakarta",
    image: "https://wallpaperaccess.com/full/803471.jpg",
  },
  {
    name: "Asatti Garden City",
    price: "63,043",
    detail: "Pahlawan Street XVII No.215",
    image: "http://getwallpapers.com/wallpaper/full/d/d/d/426328.jpg",
  },
  {
    name: "Citralan Pulri Serang",
    price: "35.853",
    detail:
      "Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur , DKI Jakarta",
    image: "https://wallpapercave.com/wp/wp3644160.jpg",
  },
  {
    name: "Aliva Priva Jardin",
    price: "47,043",
    detail:
      "Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur , DKI Jakarta",
    image: "http://getwallpapers.com/wallpaper/full/e/6/e/425797.jpg",
  },
  {
    name: "Aliva Priva Jardin",
    price: "47,043",
    detail:
      "Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur , DKI Jakarta",
    image: "https://wallpaperaccess.com/full/803473.jpg",
  },
];

const SliderButton = () => {
  const swiper = useSwiper();
  return (
    // <div className="flexCenter r-buttons">
    //   <button onClick={() => swiper.slidePrev()}>&lt;</button>
    //   <button onClick={() => swiper.slideNext()}>&gt;</button>
    // </div>
    <div className="flex items-center justify-center lg:justify-between px-4 py-2">
      <button
        className="bg-green-300 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-l-lg mr-2"
        onClick={() => swiper.slidePrev()}
      >
        &lt;
      </button>
      <button
        className="bg-green-300 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-r-lg ml-2"
        onClick={() => swiper.slideNext()}
      >
        &gt;
      </button>
    </div>
  );
};

const Project = () => {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">List Project</span>
          <span className="primaryText">Popular Residencies</span>
        </div>

        <Swiper {...sliderSettings}>
          <SliderButton />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flex items-center justify-center bg-gray-100">
                <div className="mx-auto px-5">
                  <div className="max-w-xs w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl cursor-pointer rounded-lg bg-white p-4 sm:p-6 shadow-md duration-150 hover:scale-105 hover:shadow-lg">
                    <img
                      className="w-full rounded-lg object-cover object-center"
                      src="https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="product"
                    />
                    <p className="my-2 sm:my-4 pl-4 font-bold text-gray-500 text-sm sm:text-base md:text-lg lg:text-xl">
                      Product Name
                    </p>
                    <p className="mb-2 sm:mb-4 ml-4 text-lg font-semibold text-gray-800">
                      $399
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Project;
