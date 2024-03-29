import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { sliderSettings } from "../../Utils/common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";
import { faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons";

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
    <div className="flex items-center justify-between px-4 py-2">
      <button
        className="bg-green-300 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-l-lg"
        onClick={() => swiper.slidePrev()}
      >
        <FontAwesomeIcon icon={faArrowAltCircleLeft} />
      </button>
      <button
        className="bg-green-300 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-r-lg"
        onClick={() => swiper.slideNext()}
      >
        <FontAwesomeIcon icon={faArrowAltCircleRight} />
      </button>
    </div>
  );
};

const Plant = () => {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Danh sách cây trồng</span>
          <span className="primaryText">Cây trồng phổ biến</span>
          <button className="bg-green-300 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mt-5">
            Xem tất cả
          </button>
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
                      src={card.image}
                      alt="product"
                    />
                    <p className="my-2 sm:my-4 pl-4 font-bold text-gray-500 text-sm sm:text-base md:text-lg lg:text-xl">
                      {card.name}
                    </p>
                    <p className="mb-2 sm:mb-4 ml-4 text-lg font-semibold text-gray-800">
                      {card.price}
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

export default Plant;
