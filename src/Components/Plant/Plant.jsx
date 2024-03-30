import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { sliderSettings } from "../../Utils/common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";
import { faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons";

const SliderButton = () => {
  const swiper = useSwiper();
  return (
    <div className="flex items-center justify-between px-4 py-6">
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

const Plant = ({dataPlant}) => {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Danh sách cây trồng</span>
          <span className="primaryText">Cây trồng phổ biến</span>
          <button className="bg-green-300 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mt-5 mb-3">
            Xem tất cả
          </button>
        </div>

        <Swiper {...sliderSettings}>
          <SliderButton />
          {dataPlant.map((card, i) => (
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
                      Phân loại : {card.type}
                    </p>
                    <p className="mb-1 sm:mb-4 ml-4 text-lg font-semibold text-gray-800">
                    {card.name}
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