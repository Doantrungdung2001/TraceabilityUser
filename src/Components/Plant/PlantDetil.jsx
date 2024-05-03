import React, { useState, useEffect } from "react";
import Avarta from "../Avarta/Avarta";
import {
  formatDateTime,
  formatTransactionHashTable,
} from "../../Utils/helpers";
import Aos from "aos";
import "aos/dist/aos.css";
import { useParams } from "react-router-dom";
import usePlants from "./usePlants";
import Footer from "../Footer/Footer";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Button,
  Spinner,
  Typography,
} from "@material-tailwind/react";
import useProfile from "../Profile/useProfile";

const PlantDetil = () => {
  const { farmId, plantId } = useParams();
  const { farmInfo, isSuccessFarmInfo, isLoadingFarmInfo } = useProfile({
    farmId,
  });
  const { dataPlantFarm, isSuccessPlantFarmById, isLoadingPlantFarmById } =
    usePlants({
      plantId,
    });
  const [open, setOpen] = useState(0);
  const [openPlantFarming, setOpenPlantFarming] = useState(0);

  const [openDialogCultivationActivities, setOpenDialogCultivationActivities] =
    useState(false);
  const [openDialogPlantingActivity, setOpenDialogPlantingActivity] =
    useState(false);
  const [
    openDialogFertilizationActivities,
    setOpenDialogFertilizationActivities,
  ] = useState(false);
  const [
    openDialogPestAndDiseaseControlActivities,
    setOpenDialogPestAndDiseaseControlActivities,
  ] = useState(false);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const handleOpenPlantFarming = (value) =>
    setOpenPlantFarming(openPlantFarming === value ? 0 : value);

  const handleOpenCultivationActivities = () =>
    setOpenDialogCultivationActivities(!openDialogCultivationActivities);
  const handleOpenPlantingActivity = () =>
    setOpenDialogPlantingActivity(!openDialogPlantingActivity);
  const handleOpenFertilizationActivities = () =>
    setOpenDialogFertilizationActivities(!openDialogFertilizationActivities);
  const handleOpenPestAndDiseaseControlActivities = () =>
    setOpenDialogPestAndDiseaseControlActivities(
      !openDialogPestAndDiseaseControlActivities
    );
  const renderPlantType = (type) => {
    switch (type) {
      case "herb":
        return "Rau gia vị";
      case "leafy":
        return "Rau ăn lá";
      case "root":
        return "Củ";
      case "fruit":
        return "Quả";
      default:
        return type;
    }
  };
  function Icon({ id, open }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`${
          id === open ? "rotate-180" : ""
        } h-5 w-5 transition-transform`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    );
  }
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  function DialogDefault({ data, isOpen, handleClose }) {
    return (
      <>
        <Dialog open={isOpen} handler={handleClose}>
          <DialogHeader>Thông tin</DialogHeader>
          <DialogBody>
            <section>
              <div>
                {data?.name && (
                  <div className="max-w-screen-md text-xs">
                    <h4 className="text-lg font-semibold  text-gray-900 mb-2">
                      Tên hoạt động :
                    </h4>
                    <p className="font-semibold text-gray-700 mb-4">
                      {data?.name}
                    </p>
                  </div>
                )}
                {data?.density && (
                  <div className="max-w-screen-md text-xs">
                    <h4 className="text-lg font-semibold  text-gray-900 mb-2">
                      Tỷ trọng :
                    </h4>
                    <p className="font-semibold text-gray-700 mb-4">
                      {data?.density}
                    </p>
                  </div>
                )}
                {data?.description && (
                  <div className="max-w-screen-md text-xs">
                    <h4 className="text-lg font-semibold  text-gray-900 mb-2">
                      Mô tả :
                    </h4>
                    <p className="font-semibold text-gray-700 mb-4">
                      {data?.description}
                    </p>
                  </div>
                )}
                {data?.fertilizationTime && (
                  <div className="max-w-screen-md text-xs">
                    <h4 className="text-lg font-semibold  text-gray-900 mb-2">
                      Thời điểm :
                    </h4>
                    <p className="font-semibold text-gray-700 mb-4">
                      {data?.fertilizationTime}
                    </p>
                  </div>
                )}
                {data?.type && (
                  <div className="max-w-screen-md text-xs">
                    <h4 className="text-lg font-semibold  text-gray-900 mb-2">
                      Kiểu loại :
                    </h4>
                    <p className="font-semibold text-gray-700 mb-4">
                      {data?.type}
                    </p>
                  </div>
                )}
                {data?.symptoms && (
                  <div className="max-w-screen-md text-xs">
                    <h4 className="text-lg font-semibold  text-gray-900 mb-2">
                      Triệu chứng :
                    </h4>
                    <p className="font-semibold text-gray-700 mb-4">
                      {data?.symptoms}
                    </p>
                  </div>
                )}
                {data?.solution && (
                  <div className="max-w-screen-md text-xs">
                    <h4 className="text-lg font-semibold  text-gray-900 mb-2">
                      Giải pháp :
                    </h4>

                    {data?.solution.map((solution, index) => (
                      <p className="font-semibold text-gray-700 mb-4">Giải pháp {index + 1} : {solution}</p>
                    ))}
                  </div>
                )}
              </div>
            </section>
          </DialogBody>

          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={handleClose}
              className="mr-1"
            >
              <span>Thoát</span>
            </Button>
          </DialogFooter>
        </Dialog>
      </>
    );
  }

  return (
    <section data-aos="fade-up" className="mx-auto pt-20">
      <>
        {isSuccessFarmInfo && (
          <>
            <Avarta data={farmInfo.images} />
            <section
              data-aos="fade-up"
              className="relative py-8 bg-blueGray-200"
            >
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
            </section>
          </>
        )}
        {isLoadingFarmInfo && <Spinner />}
        {isSuccessPlantFarmById && (
          <>
            <section className="mb-5">
              <div className="container mx-auto my-5 px-2 sm:px-0">
                <div className="md:flex md:flex-wrap">
                  <div className="w-full md:w-3/12 md:pr-2">
                    <div className="bg-white p-3 border-t-4 border-green-400">
                      <div className="image overflow-hidden">
                        <img
                          className="h-auto w-full mx-auto"
                          src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                          alt=""
                        />
                      </div>
                      <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
                        Thông tin chung
                      </h1>
                      <h3 className="text-gray-900 font-bold text-semibold leading-7">
                        {dataPlantFarm[0].plant.plant_name}
                      </h3>
                      <p className="text-sm text-gray-600 hover:text-gray-600 leading-6">
                        {dataPlantFarm[0].plant.plant_description}
                      </p>
                      <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                        <li className="flex items-center py-3">
                          <span>Phân loại</span>
                          <span className="ml-auto">
                            <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">
                              {renderPlantType(
                                dataPlantFarm[0].plant.plant_type
                              )}
                            </span>
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="my-4"></div>
                  </div>
                  <div className="w-full md:w-9/12 md:pl-2">
                    <div className="bg-white p-3 shadow-sm rounded-sm">
                      <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                        <span className="text-green-500">
                          <svg
                            className="h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                        </span>
                        <span className="tracking-wide">Thông tin</span>
                      </div>
                      <div className="text-gray-700">
                        <div className="grid md:grid-cols-2 text-sm">
                          <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">
                              Tên dự án
                            </div>
                            <div className="px-4 py-2">
                              {dataPlantFarm[0].plant.plant_name}
                            </div>
                          </div>
                          <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">
                              Phân loại
                            </div>
                            <div className="px-4 py-2">
                              {renderPlantType(
                                dataPlantFarm[0].plant.plant_type
                              )}
                            </div>
                          </div>
                          <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">
                              Hạt giống
                            </div>
                            <div className="px-4 py-2">
                              {dataPlantFarm.map((seedPlant) => (
                                <span>
                                  <p></p>
                                  {seedPlant.seed.seed_name}{" "}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">Mô tả</div>
                            <div className="px-4 py-2">
                              {dataPlantFarm[0].plant.plant_description}
                            </div>
                          </div>
                        </div>
                      </div>
                      <button className="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
                        Xem chi tiết dưới đây
                      </button>
                    </div>

                    <div className="my-4"></div>
                  </div>
                </div>
              </div>
            </section>
            <section className="m-3 px-5 rounded-2xl bg-white">
              {dataPlantFarm.map((plantFarming, index) => (
                <>
                  <Accordion
                    open={open === index + 1}
                    icon={<Icon id={index + 1} open={open} />}
                  >
                    <AccordionHeader onClick={() => handleOpen(index + 1)}>
                      {plantFarming.seed.seed_name}
                    </AccordionHeader>
                    <AccordionBody>
                      <section className="mx-2">
                        <>
                          <Accordion
                            open={openPlantFarming === 1}
                            className="mb-2 rounded-lg border border-blue-gray-100 px-4"
                          >
                            <AccordionHeader
                              onClick={() => handleOpenPlantFarming(1)}
                              className={`border-b-0 transition-colors ${
                                openPlantFarming === 1
                                  ? "text-green-400 hover:!text-blue-900"
                                  : ""
                              }`}
                            >
                              Thông tin hạt giống
                            </AccordionHeader>
                            <AccordionBody className="pt-0 text-base font-normal">
                              <section>
                                <div className="grid md:grid-cols-2 text-sm">
                                  <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">
                                      Số hiệu
                                    </div>
                                    <div className="px-4 py-2">
                                      {plantFarming.id}
                                    </div>
                                  </div>
                                  <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">
                                      Tên
                                    </div>
                                    <div className="px-4 py-2">
                                      {plantFarming.seed.seed_name}
                                    </div>
                                  </div>
                                  <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">
                                      Hình ảnh
                                    </div>
                                    <a
                                      href={plantFarming.seed.seed_thumb}
                                      className="px-4 py-2 text-blue-900"
                                    >
                                      Tại đây
                                    </a>
                                  </div>
                                  <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">
                                      Mô tả
                                    </div>
                                    <div className="px-4 py-2">
                                      {plantFarming.seed.seed_description}
                                    </div>
                                  </div>
                                </div>
                              </section>
                            </AccordionBody>
                          </Accordion>
                          <Accordion
                            open={openPlantFarming === 2}
                            className="mb-2 rounded-lg border border-blue-gray-100 px-4"
                          >
                            <AccordionHeader
                              onClick={() => handleOpenPlantFarming(2)}
                              className={`border-b-0 transition-colors ${
                                openPlantFarming === 2
                                  ? "text-green-400 hover:!text-green-900"
                                  : ""
                              }`}
                            >
                              Hoạt động làm đất
                            </AccordionHeader>
                            <AccordionBody className="pt-0 text-base font-normal">
                              <section>
                                {plantFarming.cultivationActivities.map(
                                  (cultivationActivities, index) => (
                                    <>
                                      <Button
                                        key={index}
                                        className="m-1"
                                        style={{ backgroundColor: "#A5DD9B" }}
                                        onClick={() => {
                                          handleOpenCultivationActivities();
                                        }}
                                      >
                                        {cultivationActivities.name}
                                      </Button>
                                      {openDialogCultivationActivities && (
                                        <DialogDefault
                                          data={cultivationActivities}
                                          isOpen={
                                            openDialogCultivationActivities
                                          }
                                          handleClose={
                                            handleOpenCultivationActivities
                                          }
                                        />
                                      )}
                                    </>
                                  )
                                )}
                              </section>
                            </AccordionBody>
                          </Accordion>
                          <Accordion
                            open={openPlantFarming === 3}
                            className="rounded-lg border border-blue-gray-100 px-4"
                          >
                            <AccordionHeader
                              onClick={() => handleOpenPlantFarming(3)}
                              className={`border-b-0 transition-colors ${
                                openPlantFarming === 3
                                  ? "text-green-400 hover:!text-green-900"
                                  : ""
                              }`}
                            >
                              Hoạt động gieo trồng
                            </AccordionHeader>
                            <AccordionBody className="pt-0 text-base font-normal">
                              <section>
                                <Button
                                  className="m-1"
                                  style={{ backgroundColor: "#A5DD9B" }}
                                  onClick={() => {
                                    handleOpenPlantingActivity();
                                  }}
                                >
                                  {plantFarming.plantingActivity.density}
                                </Button>
                                {openDialogPlantingActivity && (
                                  <DialogDefault
                                    data={plantFarming.plantingActivity}
                                    isOpen={openDialogPlantingActivity}
                                    handleClose={handleOpenPlantingActivity}
                                  />
                                )}
                              </section>
                            </AccordionBody>
                          </Accordion>
                          <Accordion
                            open={openPlantFarming === 4}
                            className="rounded-lg border border-blue-gray-100 px-4"
                          >
                            <AccordionHeader
                              onClick={() => handleOpenPlantFarming(4)}
                              className={`border-b-0 transition-colors ${
                                openPlantFarming === 4
                                  ? "text-green-400 hover:!text-green-900"
                                  : ""
                              }`}
                            >
                              Hoạt động bón phân
                            </AccordionHeader>
                            <AccordionBody className="pt-0 text-base font-normal">
                              <section>
                                {plantFarming.fertilizationActivities.map(
                                  (fertilizationActivities, index) => (
                                    <>
                                      <Button
                                        key={index}
                                        className="m-1"
                                        style={{ backgroundColor: "#A5DD9B" }}
                                        onClick={() => {
                                          handleOpenFertilizationActivities();
                                        }}
                                      >
                                        {
                                          fertilizationActivities.fertilizationTime
                                        }
                                      </Button>
                                      {openDialogFertilizationActivities && (
                                        <DialogDefault
                                          data={fertilizationActivities}
                                          isOpen={
                                            openDialogFertilizationActivities
                                          }
                                          handleClose={
                                            handleOpenFertilizationActivities
                                          }
                                        />
                                      )}
                                    </>
                                  )
                                )}
                              </section>
                            </AccordionBody>
                          </Accordion>
                          <Accordion
                            open={openPlantFarming === 5}
                            className="rounded-lg border border-blue-gray-100 px-4"
                          >
                            <AccordionHeader
                              onClick={() => handleOpenPlantFarming(5)}
                              className={`border-b-0 transition-colors ${
                                openPlantFarming === 5
                                  ? "text-green-400 hover:!text-green-900"
                                  : ""
                              }`}
                            >
                              Phòng ngừa sâu bệnh
                            </AccordionHeader>
                            <AccordionBody className="pt-0 text-base font-normal">
                              <section>
                                {plantFarming.pestAndDiseaseControlActivities.map(
                                  (pestAndDiseaseControlActivities) => (
                                    <>
                                      <Button
                                        className="m-1"
                                        style={{ backgroundColor: "#A5DD9B" }}
                                        onClick={() => {
                                          handleOpenPestAndDiseaseControlActivities();
                                        }}
                                      >
                                        {pestAndDiseaseControlActivities.name}
                                      </Button>
                                      {openDialogPestAndDiseaseControlActivities && (
                                        <DialogDefault
                                          data={pestAndDiseaseControlActivities}
                                          isOpen={
                                            openDialogPestAndDiseaseControlActivities
                                          }
                                          handleClose={
                                            handleOpenPestAndDiseaseControlActivities
                                          }
                                        />
                                      )}
                                    </>
                                  )
                                )}
                              </section>
                            </AccordionBody>
                          </Accordion>
                        </>
                      </section>
                    </AccordionBody>
                  </Accordion>
                </>
              ))}
            </section>
          </>
        )}
        {isLoadingPlantFarmById && <Spinner />}
        <Footer />
      </>
    </section>
  );
};

export default PlantDetil;
