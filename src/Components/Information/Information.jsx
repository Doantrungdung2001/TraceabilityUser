import React, { useEffect, useState } from "react";
import "./infor.css";
import { Card, Typography, Carousel, Spinner } from "@material-tailwind/react";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { useParams } from "react-router-dom";
import useInformation from "./useInformation";
import {
  formatDateTime,
  formatTransactionHashTable,
} from "../../Utils/helpers";
import Calendar from "../Calendar/Calendar";
import Tables from "../Tables/Tables";
import DeleteProcess from "../Process/DeleteProcess";
import ProcessInformation from "../Process/ProcessInformation";
import SampleProcess from "../Process/SampleProcess";
import Certificates from "../CertificatesPicture/Certificates";

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

const Information = () => {
  const projectId = useParams().projectId;
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const {
    ImageProduct,
    allDistributerWithAmount,
    Output,
    isSuccessOutput,
    isLoadingOutput,
    projectInfo,
    isSuccessProjectInfo,
    isLoadingProjectInfo,
    dataProcess,
    nonProcessObjectDetection,
    isSuccessProcess,
    isLoadingProcess,
    dataExpect,
    isSuccessExpect,
    isLoadingExpect,
    dataCertificateImages,
    isSuccessCertificateImages,
    isLoadingCertificateImages,
    dataPlantFarming,
    isSuccessPlantFarming,
    isLoadingPlantFarming,
    dataDeleteProcess,
    isSuccessDeleteProcess,
    isLoadingDeleteProcess,
  } = useInformation({ projectId });

  //open more information
  const [open, setOpen] = useState(1);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  // delete process
  const [openDeleteProcess, setOpenDeleteProcess] = useState(0);
  const handleOpenDeleteProcess = (value) =>
    setOpenDeleteProcess(openDeleteProcess === value ? 0 : value);

  const [openHarvest, setOpenHarvest] = useState(false); // Phần output chỗ thu hoạch
  const handleOpenHarvest = () => setOpenHarvest(!openHarvest);

  // output in more inoformation
  const [openOutput, setOpenOutput] = useState(0);
  const handleOpenOutput = (value) =>
    setOpenOutput(openOutput === value ? 0 : value);

  return (
    <section className="information">
      <div data-aos="fade-up" className="r-title">
        <button className="button">Mã truy xuất : {projectId}</button>
      </div>

      <section className="content">
        <section className="infor">
          <div className=" p-10 flex flex-col justify-between lg:flex-row gap-10 lg:items-center">
            <div data-aos="fade-up" className="picture">
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
                {isSuccessOutput &&
                  ImageProduct.map((url, index) => (
                    <img
                      key={index}
                      src={url.img}
                      className="h-full w-full object-cover rounded-xl"
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                  ))}
                {isLoadingOutput && <Spinner />}
              </Carousel>
            </div>
            <div data-aos="fade-up" className="product">
              <div className="flex flex-col gap-6 lg:w-2/4">
                {isSuccessProjectInfo && (
                  <div>
                    <div className="px-4 sm:px-0">
                      <h3 className="text-base font-semibold leading-7 text-gray-900">
                        Thông tin chi tiết của sản phẩm
                      </h3>
                    </div>
                    <div className="mt-6 border-t border-gray-900">
                      <dl className="divide-y divide-gray-800">
                        <div className="px-2 py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                          <dt className="text-sm font-medium leaading-3 text-gray-900">
                            Transaction Hash (Khởi tạo dự án)
                          </dt>
                          <dd className="mt-1 text-sm font-semibold leaading-3 text-blue-900 sm:col-span-2 sm:mt-0">
                            {formatTransactionHashTable({
                              str: projectInfo?.txHash,
                              a: 8,
                              b: 5,
                            })}
                          </dd>
                        </div>
                        <div className="px-2 py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                          <dt className="text-sm font-medium leaading-3 text-gray-900">
                            Nông trại sản xuất
                          </dt>
                          <dd className="mt-1 text-sm font-semibold leaading-3 text-gray-900 sm:col-span-2 sm:mt-0">
                            {projectInfo?.farm?.name}
                          </dd>
                        </div>

                        <div className="px-2 py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                          <dt className="text-sm font-medium leaading-3 text-gray-900">
                            Tên cây
                          </dt>
                          <dd className="mt-0 text-sm font-semibold leaading-3 text-gray-900 sm:col-span-2 sm:mt-0">
                            {projectInfo?.plant?.plant_name}
                          </dd>
                        </div>

                        <div className="px-2 py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                          <dt className="text-sm font-medium leaading-3 text-gray-900">
                            Tên hạt giống
                          </dt>
                          <dd className="mt-1 text-sm font-semibold leaading-3 text-gray-900 sm:col-span-2 sm:mt-0">
                            {projectInfo?.seed?.seed_name}
                          </dd>
                        </div>
                        <div className="px-2 py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                          <dt className="text-sm font-medium leaading-3 text-gray-900">
                            Ngày trồng
                          </dt>
                          <dd className="mt-1 text-sm font-semibold leaading-3 text-gray-900 sm:col-span-2 sm:mt-0">
                            {formatDateTime(projectInfo?.startDate)}
                          </dd>
                        </div>
                        <div className="px-2 py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                          <dt className="text-sm font-medium leaading-3 text-gray-900">
                            Diện tích trồng (m2 )
                          </dt>
                          <dd className="mt-1 text-sm font-semibold leaading-3 text-gray-900 sm:col-span-2 sm:mt-0">
                            {projectInfo?.square}
                          </dd>
                        </div>
                        <div className="px-2 py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                          <dt className="text-sm font-medium leaading-3 text-gray-900">
                            Mô tả
                          </dt>
                          <dd className="mt-1 text-sm font-semibold leaading-3 text-gray-900 sm:col-span-2 sm:mt-0">
                            {projectInfo?.description}
                          </dd>
                        </div>
                        <div className="px-2 py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                          <dt className="text-sm font-medium leaading-3 text-gray-900">
                            Nhà phân phối
                          </dt>
                          <dd className="mt-1 text-sm font-semibold leading-3 text-gray-900 sm:col-span-2 sm:mt-0">
                            <ul className="py-1">
                              {allDistributerWithAmount?.map((item, index) => (
                                <li className="py-1" key={index}>
                                  {item.distributer?.name}
                                </li>
                              ))}
                            </ul>
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                )}
                {isLoadingProjectInfo && <Spinner />}
              </div>
            </div>
          </div>
        </section>
        <section className="timeline">
          {isSuccessProcess && <ProcessInformation processInfo={dataProcess} />}
          {isLoadingProcess && <Spinner />}
        </section>
      </section>

      <section data-aos="fade-up" className="more-infor">
        <>
          <Accordion
            open={open === 1}
            className="rounded-lg border border-blue-gray-300 px-4 mb-2 max-w-3xl mx-auto"
          >
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className={`border-b-0 transition-colors ${
                open === 1 ? "text-green-400 hover:!text-green-700" : ""
              }`}
            >
              Video không có hoạt động tương ứng
            </AccordionHeader>
            <AccordionBody className="text-base font-normal">
              {isSuccessProcess && (
                <section className="max-w-3xl rounded-lg px-4 py-5 mx-auto bg-white dark:bg-gray-900">
                  <div>
                    <div className="rounded-lg shadow bg-green-100 p-1">
                      <p className="text-2xl font-bold mb-4">Thông tin</p>
                      <p className="mb-1">
                        Bắt đầu:{" "}
                        {formatDateTime(
                          nonProcessObjectDetection[0].start_time
                        )}
                      </p>
                      <p className="mb-1">
                        Kết thúc:{" "}
                        {formatDateTime(nonProcessObjectDetection[0].end_time)}
                      </p>
                      <p className="text-blue-700 mb-1">
                        {formatTransactionHashTable({
                          str: nonProcessObjectDetection[0].tx_hash,
                          a: 8,
                          b: 5,
                        })}
                      </p>
                    </div>
                  </div>
                  {nonProcessObjectDetection.length > 0 ? (
                    nonProcessObjectDetection.map((data, index) => (
                      <div key={index} className="mt-5 px-2">
                        <video
                          className="h-full w-full my-2 rounded-lg "
                          controls
                          autoPlay
                          muted
                        >
                          <source src={data.video_url} type="video/mp4" />
                          Your browser does not support the video ta
                        </video>
                      </div>
                    ))
                  ) : (
                    <div className="lg:text-lg text-gray-400 text-base mt-4 ">
                      Không có video
                    </div>
                  )}
                  {isLoadingProcess && <Spinner />}
                </section>
              )}
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 2}
            className="rounded-lg border border-blue-gray-300 px-4 mb-2 max-w-3xl mx-auto"
          >
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className={`border-b-0 transition-colors ${
                open === 2 ? "text-green-400 hover:!text-green-700" : ""
              }`}
            >
              Thông tin dự kiến sản lượng
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              <section>
                {isSuccessExpect && <Tables infoData={dataExpect} />}
                {isLoadingExpect && <Spinner />}
              </section>
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 3}
            className="rounded-lg border border-blue-gray-300 px-4 mb-2 max-w-3xl mx-auto"
          >
            <AccordionHeader
              onClick={() => handleOpen(3)}
              className={`border-b-0 transition-colors ${
                open === 3 ? "text-green-400 hover:!text-green-700" : ""
              }`}
            >
              Quy trình mẫu
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              {isSuccessPlantFarming && (
                <section>
                  <SampleProcess dataDetailSmapleProces={dataPlantFarming} />
                </section>
              )}
              {isLoadingPlantFarming && <Spinner />}
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 4}
            className="rounded-lg border border-blue-gray-300 px-4 mb-2 max-w-3xl mx-auto"
          >
            <AccordionHeader
              onClick={() => handleOpen(4)}
              className={`border-b-0 transition-colors ${
                open === 4 ? "text-green-400 hover:!text-green-700" : ""
              }`}
            >
              Đầu ra
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              <section>
                <>
                  {isSuccessOutput &&
                    Output.map((item, index) => (
                      <Accordion
                        key={index} // Make sure to provide a unique key for each item
                        open={openOutput === 1}
                        icon={<Icon id={1} open={openOutput} />}
                      >
                        <AccordionHeader
                          className="text-base"
                          onClick={() => handleOpenOutput(1)}
                        >
                          Lần thu hoạch thứ {index + 1}
                        </AccordionHeader>
                        <AccordionBody>
                          <section className="flex items-center justify-center">
                            <div className="max-w-[500px] w-full rounded-xl border border-gray-200 bg-white py-4 px-3 shadow-md shadow-gray-100">
                              <div className="flex max-h-[400px] w-full flex-col overflow-y-scroll">
                                <div className="flex items-center">
                                  <p className="text-gray-900 font-semibold mr-2">
                                    Transaction :
                                  </p>
                                  <p className="font-semibold text-blue-700">
                                    {formatTransactionHashTable({
                                      str: item?.tx,
                                      a: 8,
                                      b: 5,
                                    })}
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <p className="text-gray-900 font-semibold mr-2">
                                    Thời gian :
                                  </p>
                                  <p className="font-semibold text-gray-500">
                                    {formatDateTime(item?.time)}
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <p className="text-gray-900 font-semibold mr-2">
                                    Số lượng :
                                  </p>
                                  <p className="font-semibold text-gray-500">
                                    {item?.amount}
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <p className="text-gray-900 font-semibold mr-2">
                                    Sản lượng / 1 sản phẩm :
                                  </p>
                                  <p className="font-semibold text-gray-500">
                                    {item?.amountPerOne}
                                  </p>
                                </div>
                                <div>
                                  <p className="text-gray-900 font-semibold mr-2">
                                    Nhà phân phối :
                                  </p>
                                  <ul>
                                    {item.distributerWithAmount?.map(
                                      (data, index) => (
                                        <li
                                          key={index}
                                          className="font-semibold text-gray-500"
                                        >
                                          {data.distributer.name} (Số lượng :{" "}
                                          {data.amount})
                                        </li>
                                      )
                                    )}
                                  </ul>
                                </div>
                                <p className="text-blue-800 font-semibold mr-2">
                                  <span
                                    className="italic underline cursor-pointer"
                                    onClick={handleOpenHarvest}
                                  >
                                    Lịch sử chỉnh sửa(Click vào)
                                  </span>
                                </p>
                              </div>
                            </div>
                            <Dialog
                              open={openHarvest}
                              handler={handleOpenHarvest}
                            >
                              <DialogHeader> Lịch sử chỉnh sửa </DialogHeader>
                              <DialogBody>
                                <div>
                                  <div className="max-w-screen-md text-xs">
                                    <h4 className="text-lg font-semibold  text-gray-900">
                                      Mã Hash
                                    </h4>
                                    <p className="text-blue-500 mb-4">afdsfa</p>
                                    <h3 className="text-lg  text-gray-900 font-semibold">
                                      afsafd
                                    </h3>
                                    <p className="font-semibold text-gray-500">
                                      afafa
                                    </p>
                                  </div>
                                </div>
                              </DialogBody>
                              <DialogFooter>
                                <Button
                                  variant="text"
                                  color="red"
                                  onClick={handleOpenHarvest}
                                  className="mr-1"
                                >
                                  <span>Thoát</span>
                                </Button>
                              </DialogFooter>
                            </Dialog>
                          </section>
                        </AccordionBody>
                      </Accordion>
                    ))}
                  {isLoadingOutput && <Spinner />}
                </>
              </section>
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 5}
            className="rounded-lg border border-blue-gray-300 px-4 mb-2 max-w-3xl mx-auto"
          >
            <AccordionHeader
              onClick={() => handleOpen(5)}
              className={`border-b-0 transition-colors ${
                open === 5 ? "text-green-400 hover:!text-green-700" : ""
              }`}
            >
              Hình ảnh và thời tiết
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              <section className="px-4">
                <div>
                  <Calendar />
                </div>
              </section>
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 6}
            className="rounded-lg border border-blue-gray-300 px-4 mb-2 max-w-3xl mx-auto"
          >
            <AccordionHeader
              onClick={() => handleOpen(6)}
              className={`border-b-0 transition-colors ${
                open === 6 ? "text-green-400 hover:!text-green-700" : ""
              }`}
            >
              Các chứng nhận
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              {isSuccessCertificateImages && (
                <Certificates
                  dataPicture={dataCertificateImages}
                  isSuccessCertificateImages={isSuccessCertificateImages}
                />
              )}
              {isLoadingCertificateImages && <Spinner />}
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 7}
            className="rounded-lg border border-blue-gray-300 px-4 mb-2 max-w-3xl mx-auto"
          >
            <AccordionHeader
              onClick={() => handleOpen(7)}
              className={`border-b-0 transition-colors ${
                open === 7 ? "text-green-400 hover:!text-green-700" : ""
              }`}
            >
              Các hoạt động bị xóa
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              <section className="px-1">
                {isSuccessDeleteProcess && (
                  <>
                    <Accordion
                      open={openDeleteProcess === 1}
                      icon={<Icon id={1} open={openDeleteProcess} />}
                    >
                      <AccordionHeader
                        className="text-base"
                        onClick={() => handleOpenDeleteProcess(1)}
                      >
                        Hoạt động canh tác
                      </AccordionHeader>
                      <AccordionBody>
                        <DeleteProcess
                          dataDeleteProcess={dataDeleteProcess.deletedProcess}
                        />
                      </AccordionBody>
                    </Accordion>
                    <Accordion
                      open={openDeleteProcess === 2}
                      icon={<Icon id={2} open={openDeleteProcess} />}
                    >
                      <AccordionHeader
                        className="text-base"
                        onClick={() => handleOpenDeleteProcess(2)}
                      >
                        Kỳ vọng
                      </AccordionHeader>
                      <AccordionBody>
                        <section className="flex items-center justify-center">
                          <Tables infoData={dataDeleteProcess.deletedExpect} />
                        </section>
                      </AccordionBody>
                    </Accordion>
                    <Accordion
                      open={openDeleteProcess === 3}
                      icon={<Icon id={3} open={openDeleteProcess} />}
                    >
                      <AccordionHeader
                        className="text-base"
                        onClick={() => handleOpenDeleteProcess(3)}
                      >
                        Đầu ra
                      </AccordionHeader>
                      <AccordionBody>
                        <section className="flex items-center justify-center">
                          {dataDeleteProcess?.deletedOutput?.length ? (
                            <section></section>
                          ) : (
                            <div className="lg:text-2xl text-gray-400 text-base mt-5">
                              Không có dữ liệu
                            </div>
                          )}
                        </section>
                      </AccordionBody>
                    </Accordion>
                  </>
                )}
                {isLoadingDeleteProcess && <Spinner />}
              </section>
            </AccordionBody>
          </Accordion>
        </>
      </section>
    </section>
  );
};

export default Information;
