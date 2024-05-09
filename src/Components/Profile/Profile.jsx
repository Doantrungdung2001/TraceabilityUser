import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "@material-tailwind/react";
import useProfile from "./useProfile";
import Plant from "../Plant/Plant";
import Project from "../Project/Project";
import Avarta from "../Avarta/Avarta";
import Aos from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
const ProfileFarm = () => {
  const navigate = useNavigate();
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const { farmId } = useParams();
  const {
    farmInfo,
    isSuccessFarmInfo,
    isLoadingFarmInfo,
    allPlant,
    isSuccessPlant,
    isLoadingPlant,
    allProject,
    isSuccessProject,
    isLoadingProject,
    plantsCount,
    inProgressProjectsCount,
    finishedProjectsCount,
    canceledProjectsCount,
    totalQRCount,
    scannedQRCount,
    distributorsByFarm,
    isSuccessQR,
    isLoadingQR,
    isSuccessDistributorByFarm,
    isLoadingDistributorByFarm,
  } = useProfile({
    farmId,
  });
  if (isSuccessFarmInfo && !farmInfo.id) {
    navigate("/404-notfound");
  }
  return (
    <>
      <div data-aos="fade-up" className="mx-auto pt-20">
        {isSuccessFarmInfo && farmInfo.id && <Avarta data={farmInfo.images} />}
        {isLoadingFarmInfo && <Spinner />}

        <section data-aos="fade-up" className="relative py-8 bg-blueGray-200">
          {isSuccessFarmInfo && farmInfo.id && (
            <div className="container mx-auto px-4">
              <div className="text-center mt-1">
                <h3 className="text-4xl font-semibold leading-normal text-blueGray-700 mb-1">
                  {farmInfo.name}
                </h3>
                <div className="text-sm leading-normal mt-0 mb-1 text-blueGray-400 font-bold uppercase">
                  <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                  {farmInfo.address}
                </div>
                {farmInfo?.email?.map((email) => (
                  <div className="mb-2 text-blue-500 mt-3">
                    <i className="fas fa-mail-bulk mr-2 text-lg"></i>
                    <span>{email}</span>
                  </div>
                ))}
                <div className="mb-2 text-blue-500">
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

        <section>
          {isSuccessFarmInfo && farmInfo.id && (
            <div
              data-aos="fade-up"
              className="bg-[#f3f6ff] flex justify-center items-center min-h-screen"
            >
              <div className="w-full ml-1 mr-1 flex flex-col justify-center items-center sm:w-96 border-gray-700 text-center lg:w-[900px]">
                <div className="w-full rounded-2xl p-8 text-white bg-gradient-to-br from-[#5f99f9] to-[#8868dc] pb-44 relative">
                  <h1 className="text-xl mb-4">Lời giới thiệu</h1>
                  <p>{farmInfo.description}</p>
                </div>
                <div className="text-center bg-white shadow-lg w-[80%] rounded-xl -mt-32 z-10 p-9 flex items-center flex-col">
                  {/* <h2 className="font-semibold text-xl">Start chatting</h2> */}
                  <img
                    src={farmInfo.images[0]}
                    alt="Profile"
                    className="w-[40%] rounded-full mt-7"
                  />
                  <p className="mt-3 font-semibold text-lg">{farmInfo.name}</p>
                  {farmInfo.status === "active" ? (
                    <span className="text-slate-500 rounded-xl border-slate-100 text-sm mt-2 pl-3 pr-3 border-[1px]">
                      <span className="bg-green-500 w-2 h-2 rounded-full mt-0.5 inline-block"></span>{" "}
                      Đang hoạt động
                    </span>
                  ) : (
                    <span className="text-slate-500 rounded-xl border-slate-100 text-sm mt-2 pl-3 pr-3 border-[1px]">
                      <span className="bg-red-500 w-2 h-2 rounded-full mt-0.5 inline-block"></span>{" "}
                      Dừng hoạt động
                    </span>
                  )}
                </div>
              </div>
            </div>
          )}
          {isLoadingFarmInfo && <Spinner />}
        </section>
      </div>
      {
        isSuccessQR && isSuccessDistributorByFarm && isSuccessPlant && isSuccessProject && (
          <section>
            <span className="primaryText">Tổng quan trang trại</span>
            <div className="border border-gray-300 shadow-sm rounded-lg overflow-hidden mx-auto mt-8 lg:w-[900px]">
              <table className="w-full text-sm leading-5 lg:text-lg">
                <tbody>
                  <tr>
                    <td className="py-3 px-4 text-left font-medium text-gray-600">Số cây trang trại canh tác</td>
                    <td className="py-3 px-4 text-left">{plantsCount}</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 text-left font-medium text-gray-600">Số dự án đang thực hiện</td>
                    <td className="py-3 px-4 text-left">{inProgressProjectsCount}</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-left font-medium text-gray-600">Số dự án đã hoàn thành</td>
                    <td className="py-3 px-4 text-left">{finishedProjectsCount}</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 text-left font-medium text-gray-600">Số dự án đã hủy</td>
                    <td className="py-3 px-4 text-left">{canceledProjectsCount}</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-left font-medium text-gray-600">Tổng số mã QR đã tạo</td>
                    <td className="py-3 px-4 text-left">{totalQRCount}</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 text-left font-medium text-gray-600">Tổng số mã QR đã quét</td>
                    <td className="py-3 px-4 text-left">{scannedQRCount}</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-left font-medium text-gray-600">Số lượng đối tác phân phối</td>
                    <td className="py-3 px-4 text-left">
                      <ul>
                        {
                          distributorsByFarm.map(distributor => {
                            return (
                              <li>{distributor.name} - {distributor.totalAmount} (sản phẩm)</li>
                            )
                          })
                        }
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        )
      }

      {isSuccessPlant && <Plant dataPlant={allPlant} />}
      {isLoadingPlant && <Spinner />}

      {isSuccessProject && <Project dataProject={allProject} />}
      {isLoadingProject && <Spinner />}
    </>
  );
};

export default ProfileFarm;
