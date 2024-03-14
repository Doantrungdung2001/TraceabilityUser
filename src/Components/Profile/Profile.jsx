import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
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
      <section className="relative block h-96">
        <div className="absolute top-0 w-full h-full bg-center bg-cover">
          <div
            className="absolute top-0 w-full h-full bg-black opacity-50"
            id="blackOverlay"
          ></div>
          <img
            alt="background"
            src="https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80"
            className="absolute top-0 left-0 w-full h-full bg-cover"
          />
        </div>
        <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-72">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
            className="absolute bottom-0 w-full h-full overflow-hidden"
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </section>

      <section className="relative py-16 bg-blueGray-200">
        <div className="container mx-auto px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                  <div
                    tabIndex="0"
                    className="focus:outline-none h-44 w-44 mb-4 lg:mb-0 mr-4"
                  >
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_3_7.png"
                      alt="man avatar"
                      className="h-full w-full rounded-full overflow-hidden shadow"
                    />
                  </div>
                </div>

                <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                  <div className="py-2 px-3 mt-8 sm:mt-0">
                    <button
                      className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                      Connect
                    </button>
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-2 lg:order-1">
                  <div className="flex justify-center py-4 lg:pt-4 pt-4">
                    <div className="mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        22
                      </span>
                      <span className="text-sm text-blueGray-400">Friends</span>
                    </div>
                    <div className="mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        10
                      </span>
                      <span className="text-sm text-blueGray-400">Photos</span>
                    </div>
                    <div className="lg:mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        89
                      </span>
                      <span className="text-sm text-blueGray-400">
                        Comments
                      </span>
                    </div>
                  </div>
                </div>
              </div>
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
              <div>
                <PlantCard
                  category="Indoor"
                  name="Peace Lily"
                  price="36.00"
                  image="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
                  color="orange"
                />
                <PlantCard
                  category="Outdoor"
                  name="Monstera"
                  price="45.00"
                  image="https://user-images.githubusercontent.com/2805249/64069998-305de300-cc9a-11e9-8ae7-5a0fe00299f2.png"
                  color="teal"
                />
                <PlantCard
                  category="Outdoor"
                  name="Oak Tree"
                  price="68.50"
                  image="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
                  color="purple"
                />
                {/* <Swiper {...sliderSettings}>
                  <SliderButton />
                  {data.map((card, i) => (
                    <SwiperSlide key={i}>
                      <div className="p-24 flex flex-wrap items-center justify-center">
                        <PlantCard
                          category="Indoor"
                          name="Peace Lily"
                          price="36.00"
                          image="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
                          color="orange"
                        />
                        <PlantCard
                        category="Outdoor"
                        name="Monstera"
                        price="45.00"
                        image="https://user-images.githubusercontent.com/2805249/64069998-305de300-cc9a-11e9-8ae7-5a0fe00299f2.png"
                        color="teal"
                      />
                      <PlantCard
                        category="Outdoor"
                        name="Oak Tree"
                        price="68.50"
                        image="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
                        color="purple"
                      />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper> */}
              </div>
              <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-9/12 px-4">
                    <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                      An artist of considerable range, Jenna the name taken by
                      Melbourne-raised, Brooklyn-based Nick Murphy writes,
                      performs and records all of his own music, giving it a
                      warm, intimate feel with a solid groove structure. An
                      artist of considerable range.
                    </p>
                    <a href="#pablo" className="font-normal text-pink-500">
                      Show more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfileFarm;
