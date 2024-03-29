import React from "react";
import { useParams } from "react-router-dom";
import { Carousel, Spinner } from "@material-tailwind/react";
import useProfile from "./useProfile";

const ProfileFarm = () => {
  const { farmId } = useParams();
  const { farmInfo, isSuccessFarmInfo, isLoadingFarmInfo } = useProfile({
    farmId,
  });

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
                <img key={index} src={url} className="object-cover" />
              ))}
            {isLoadingFarmInfo && <Spinner />}
          </Carousel>
        </div>
      </section>

      <section className="relative py-8 bg-blueGray-200">
        {isSuccessFarmInfo && (
          <div className="container mx-auto px-4">
            <div className="text-center mt-3">
              <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                {farmInfo.name}
              </h3>
              <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                {farmInfo.address}
              </div>
              <div className="mb-2 text-blueGray-600 mt-10">
                <i class="fas fa-mail-bulk mr-2 text-lg text-blueGray-400"></i>
                <ul></ul>
                {farmInfo?.email?.map((email) => (
                  <li>{email}</li>
                ))}
              </div>
              <div className="mb-2 text-blueGray-600">
                <i className="fas fa-phone mr-2 text-lg text-blueGray-400"></i>
                {farmInfo?.phone?.map((phone) => (
                  <span> - {phone} </span>
                ))}
              </div>
            </div>
          </div>
        )}
        {isLoadingFarmInfo && <Spinner />}
      </section>

      {/* introduction */}
      <section>
        {isSuccessFarmInfo && (
          <div className="bg-[#f3f6ff] flex justify-center items-center min-h-screen">
            <div className="w-full ml-1 mr-1 flex flex-col justify-center items-center sm:w-96 border-gray-700 text-center">
              <div className="w-full rounded-2xl p-8 text-white bg-gradient-to-br from-[#5f99f9] to-[#8868dc] pb-44 relative">
                <h1 className="text-xl mb-4">Lời giới thiệu</h1>
                <p>
                  {farmInfo.description}
                </p>
              </div>
              <div className="text-center bg-white shadow-lg w-[80%] rounded-xl -mt-32 z-10 p-9 flex items-center flex-col">
                {/* <h2 className="font-semibold text-xl">Start chatting</h2> */}
                <img
                  src={farmInfo.images[0]}
                  alt="Profile"
                  className="w-[40%] rounded-full mt-7"
                />
                <p className="mt-3 font-semibold text-lg">{farmInfo.name}</p>
                <span className="text-slate-500 rounded-xl border-slate-100 text-sm mt-2 pl-3 pr-3 border-[1px]">
                  <span className="bg-green-500 w-2 h-2 rounded-full mt-0.5 inline-block"></span>{" "}
                  Active
                </span>
                {/* <button className="w-full gradient rounded-md text-white p-4 mt-4 hover:shadow-xl transition-all duration-200 ease-in">
                Send a message
              </button> */}
              </div>
            </div>
          </div>
        )}
        {isLoadingFarmInfo && <Spinner />}
      </section>
    </div>
  );
};

export default ProfileFarm;
