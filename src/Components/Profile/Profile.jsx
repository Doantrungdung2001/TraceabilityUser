import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { sliderSettings } from "../../Utils/common";
import { useParams } from "react-router-dom";
import { Carousel, Spinner } from "@material-tailwind/react";
import useProfile from "./useProfile";

const SliderButton = () => {
  const swiper = useSwiper();
  return (
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

const ProfileFarm = () => {
  const { farmId } = useParams();
  const { farmInfo, isSuccessFarmInfo, isLoadingFarmInfo } = useProfile({
    farmId,
  });

  function PlantCard({ category, name, price, image, color }) {
    return (
      <div
        className={`flex-shrink-0 m-6 relative overflow-hidden bg-${color}-500 rounded-lg max-w-xs shadow-lg`}
      >
        <svg
          className="absolute bottom-0 left-0 mb-8"
          viewBox="0 0 375 283"
          fill="none"
          style={{ transform: "scale(1.5)", opacity: "0.1" }}
        >
          <rect
            x="159.52"
            y="175"
            width="152"
            height="152"
            rx="8"
            transform="rotate(-45 159.52 175)"
            fill="white"
          />
          <rect
            y="107.48"
            width="152"
            height="152"
            rx="8"
            transform="rotate(-45 0 107.48)"
            fill="white"
          />
        </svg>
        <div className="relative pt-10 px-10 flex items-center justify-center">
          <div
            className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
            style={{
              background: "radial-gradient(black, transparent 60%)",
              transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
              opacity: "0.2",
            }}
          ></div>
          <img className="relative w-40" src={image} alt={name} />
        </div>
        <div className="relative text-white px-6 pb-6 mt-6">
          <span className="block opacity-75 -mb-1">{category}</span>
          <div className="flex justify-between">
            <span className="block font-semibold text-xl">{name}</span>
            <span className="block bg-white rounded-full text-purple-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
              ${price}
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto pt-20">
      <section>
        <div className="picture">
          <Carousel
            className="rounded-xl"
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                      activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                    }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}
          >
            {isSuccessFarmInfo &&
              farmInfo?.images?.map((url, index) => (
                <img
                  key={index}
                  src={url}
                  className="h-full w-full object-cover rounded-xl"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              ))}
            {isLoadingFarmInfo && <Spinner />}
          </Carousel>
        </div>
      </section>

      <section className="relative py-8 bg-blueGray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mt-3">
            <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
              Jenna Stones
            </h3>
            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
              Los Angeles, California
            </div>
            <div className="mb-2 text-blueGray-600 mt-10">
              <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
              Solution Manager - Creative Tim Officer
            </div>
            <div className="mb-2 text-blueGray-600">
              <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
              University of Computer Science
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfileFarm;
