import React, { useEffect, useState } from "react";
import "./infor.css";
import { Card, Typography, Carousel, Spinner } from "@material-tailwind/react";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  TabPanel,
  Tab,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
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
import { DetailActivity } from "../Activity/DetailActivity";
import Tables from "../Tables/Tables";

const TABLE_HEAD = ["Thời gian", "Dự kiến (kg)"];
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

function ActivityLogItem({ index, text, time, note }) {
  return (
    <div className="flex items-center w-full my-5 -ml-1.5 px-2">
      <div className="">
        <div className="text-green-500 font-bold text-xl">
          <p>Lần thứ {index}</p>
        </div>
        <p className="text-sm text-gray-800 font-bold py-1">
          Sản lượng :<span className="text-gray-600"> {text}</span>
        </p>

        <p className="text-xs text-gray-600">{time}</p>
        <p className="text-sm  text-gray-800 font-bold">
          Ghi chú : <span className="text-xs text-gray-600 ">{note}</span>
        </p>
      </div>
    </div>
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

  const [active, setActive] = useState();
  useEffect(() => {
    if (dataCertificateImages && dataCertificateImages.length > 0)
      setActive(dataCertificateImages[0].imgelink);
  }, [isSuccessCertificateImages]);

  //open more information
  const [open, setOpen] = useState(1);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  // open Sample process
  const [openExpect, setOpenExpect] = useState(0);
  const handleOpenExpect = (value) =>
    setOpenExpect(openExpect === value ? 0 : value);

  // delete process
  const [openDeleteProcess, setOpenDeleteProcess] = useState(0);
  const handleOpenDeleteProcess = (value) =>
    setOpenDeleteProcess(openDeleteProcess === value ? 0 : value);

  const [openTimeline, setOpenTimeline] = useState(false);
  const handleOpenTimeline = () => setOpenTimeline(!openTimeline);

  const [openTable, setOpenTable] = useState(false);
  const handleOpenTable = () => setOpenTable(!openTable);

  const [reportsOpen, setReportsOpen] = useState(0);
  const handleReportsOpen = (value) =>
    setReportsOpen(reportsOpen === value ? 0 : value);

  //process
  const [selectedProcess, setSelectedProcess] = useState(null);
  const [selectedExpect, setSelectedExpect] = useState(null);
  const [selectedCultivation, setSelectedCultivation] = useState(null);
  const [selectedPlanting, setSelectedPlanting] = useState(null);
  const [selectedFertilize, setSelectedFertilize] = useState(null);
  const [selectedPesticide, setSelectedPesticide] = useState(null);

  const [openCultivation, setOpenCultivation] = useState(false); // Làm đất
  const handleOpenCultivation = () => setOpenCultivation(!openCultivation);
  const [openpPlanting, setOpenuPlanting] = useState(false); // Trồng cây
  const handleOpenpPlanting = () => setOpenuPlanting(!openpPlanting);
  const [openFertilize, setOpenFertilize] = useState(false); // Bón phân
  const handleOpenFertilize = () => setOpenFertilize(!openFertilize);
  const [openPesticide, setOpenPesticide] = useState(false); // Thuốc trừ sâu
  const handleOpenPesticide = () => setOpenPesticide(!openPesticide);

  const [openHarvest, setOpenHarvest] = useState(false); // Phần output chỗ thu hoạch
  const handleOpenHarvest = () => setOpenHarvest(!openHarvest);

  // output in more inoformation
  const [openOutput, setOpenOutput] = useState(0);
  const handleOpenOutput = (value) =>
    setOpenOutput(openOutput === value ? 0 : value);

  const data = [
    {
      label: "Thông tin",
      value: "infor",
      desc: (
        <DialogBody className="h-[39rem]">
          <section className="infor">
            {selectedProcess && (
              <>
                <Accordion
                  open={reportsOpen === 1}
                  icon={<Icon id={1} open={reportsOpen} />}
                >
                  <AccordionHeader
                    onClick={() => handleReportsOpen(1)}
                    style={{ color: "green" }}
                  >
                    Công việc
                  </AccordionHeader>
                  <AccordionBody>
                    <div className="w-full md:w-[40rem]">
                      {selectedProcess.type === "pesticide" && (
                        <div>
                          <div className="max-w-screen-md text-sm mb-3">
                            <h3 class="text-blue-600">
                              {formatDateTime(selectedProcess.time)}
                            </h3>

                            <h4 className="text-lg font-semibold">Mã Hash</h4>
                            <p class="text-blue-600">
                              {formatTransactionHashTable({
                                str: selectedProcess.detail.tx,
                                a: 8,
                                b: 5,
                              })}
                            </p>
                            <h3 className="text-lg font-semibold">Đối tượng</h3>
                            <p>{selectedProcess.detail.name}</p>
                            <h3 className="text-lg font-semibold">Kiểu</h3>
                            <p>
                              {selectedProcess.detail.type === "pest"
                                ? "Sâu"
                                : "Bệnh"}
                            </p>
                            <h3 className="text-lg font-semibold">
                              Triệu chứng
                            </h3>
                            <p>{selectedProcess.detail.symptoms}</p>
                            <h3 className="text-lg font-semibold">Giải pháp</h3>
                            {selectedProcess.detail.solution.map(
                              (item, index) => (
                                <p key={index}>
                                  {index + 1}-{item}
                                </p>
                              )
                            )}
                          </div>
                        </div>
                      )}

                      {selectedProcess.type === "fertilize" && (
                        <div>
                          <div className="max-w-screen-md mb-3 text-sm">
                            <h3 class="text-blue-600">
                              {formatDateTime(selectedProcess.time)}
                            </h3>

                            <h4 className="text-lg font-semibold mb-2">
                              Mã Hash
                            </h4>
                            <p class="text-blue-600">
                              {formatTransactionHashTable({
                                str: selectedProcess.detail.tx,
                                a: 8,
                                b: 5,
                              })}
                            </p>
                            <h3 className="text-lg font-semibold mb-2">
                              Thời điểm trồng
                            </h3>
                            <p>{selectedProcess.detail.fertilizationTime}</p>
                            <h3 className="text-lg font-semibold mb-2">Kiểu</h3>
                            <p>
                              {selectedProcess.detail.type === "baseFertilizer"
                                ? "Bón lót"
                                : "Bón thúc"}
                            </p>
                            <h3 className="text-lg font-semibold mb-2">
                              Mô tả
                            </h3>
                            <p>{selectedProcess.detail.description}</p>
                          </div>
                        </div>
                      )}

                      {selectedProcess.type === "planting" && (
                        <div>
                          <div className="max-w-screen-md mb-3 text-sm">
                            <h3 class="text-blue-600">
                              {formatDateTime(selectedProcess.time)}
                            </h3>

                            <h4 className="text-lg font-semibold">Mã Hash</h4>
                            <p class="text-blue-600">
                              {formatTransactionHashTable({
                                str: selectedProcess.detail.tx,
                                a: 8,
                                b: 5,
                              })}
                            </p>
                            <h3 className="text-lg font-semibold">Mật độ</h3>
                            <p>{selectedProcess.detail.density}</p>
                            <h3 className="text-lg font-semibold">Mô tả</h3>
                            <p>{selectedProcess.detail.description}</p>
                          </div>
                        </div>
                      )}

                      {selectedProcess.type === "other" && (
                        <div>
                          <div>
                            <div className="max-w-screen-md mb-3 text-sm">
                              <h3 class="text-blue-600">
                                {formatDateTime(selectedProcess.time)}
                              </h3>

                              <h4 className="text-lg font-semibold">Mã Hash</h4>
                              <p class="text-blue-600">
                                {formatTransactionHashTable({
                                  str: selectedProcess.detail.tx,
                                  a: 8,
                                  b: 5,
                                })}
                              </p>
                              <h3 className="text-lg font-semibold">Kiểu</h3>
                              <p>Hoạt động khác</p>
                              <h3 className="text-lg font-semibold">Mô tả</h3>
                              <p>{selectedProcess.detail.description}</p>
                            </div>
                          </div>
                        </div>
                      )}

                      {selectedProcess.type === "cultivation" && (
                        <div>
                          <div>
                            <div className="max-w-screen-md mb-3 text-sm">
                              <h3 class="text-blue-600">
                                {formatDateTime(selectedProcess.time)}
                              </h3>

                              <h4 className="text-lg font-semibold">Mã Hash</h4>
                              <p class="text-blue-600">
                                {formatTransactionHashTable({
                                  str: selectedProcess.detail.tx,
                                  a: 8,
                                  b: 5,
                                })}
                              </p>
                              <h3 className="text-lg font-semibold">
                                Hoạt động
                              </h3>
                              <p>{selectedProcess.detail.name}</p>
                              <h3 className="text-lg font-semibold">Mô tả</h3>
                              <p>{selectedProcess.detail.description}</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </AccordionBody>
                </Accordion>
                <Accordion
                  open={reportsOpen === 2}
                  icon={<Icon id={2} open={reportsOpen} />}
                >
                  <AccordionHeader
                    onClick={() => handleReportsOpen(2)}
                    style={{ color: "green" }}
                  >
                    Lịch sử chỉnh sửa
                  </AccordionHeader>
                  <AccordionBody>
                    {selectedProcess?.historyProcess.length > 0 ? (
                      selectedProcess.historyProcess.map((data, index) => (
                        <div key={index}>
                          <DetailActivity
                            index={index + 1}
                            dataActivity={data}
                          />
                        </div>
                      ))
                    ) : (
                      <div>Không có chỉnh sửa</div>
                    )}
                  </AccordionBody>
                </Accordion>
              </>
            )}
            {isLoadingProcess && <Spinner />}
          </section>
        </DialogBody>
      ),
    },
    {
      label: "Video",
      value: "Input",
      desc: (
        <div>
          {selectedProcess && (
            <div>
              <div className="rounded-lg border border-gray-300 p-4">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Bắt đầu:{" "}
                  {formatDateTime(
                    selectedProcess?.objectDetections[0].start_time
                  )}
                </p>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Kết thúc:{" "}
                  {formatDateTime(
                    selectedProcess?.objectDetections[0].end_time
                  )}
                </p>
                <p className="text-sm text-gray-900 dark:text-white">
                  Mã hash:{" "}
                  <span className="text-blue-700">
                    {formatTransactionHashTable({
                      str: selectedProcess?.objectDetections[0].tx_hash,
                      a: 8,
                      b: 5,
                    })}
                  </span>
                </p>
              </div>

              {selectedProcess?.objectDetections.length > 0 ? (
                selectedProcess.objectDetections.map((data, index) => (
                  <div key={index}>
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
                <div>Không có video</div>
              )}
            </div>
          )}
          {isLoadingProcess && <Spinner />}
        </div>
      ),
    },
  ];
  const renderType = (type) => {
    switch (type) {
      case "pesticide":
        return "Phòng trừ sâu bệnh";
      case "fertilize":
        return "Bón phân";
      case "planting":
        return "Gieo trồng";
      case "other":
        return "Hoạt động khác";
      case "cultivation":
        return "Làm đất";
    }
  };
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
          <div className="r-time">
            <div data-aos="fade-up" className="w-full sm:w-[50rem]">
              <Timeline className="flex flex-col">
                {isSuccessProcess &&
                  dataProcess.map((process, index) => (
                    <div>
                      <TimelineItem style={{ height: "7rem" }} key={index}>
                        <TimelineConnector className="!w-[50px]" />
                        <TimelineHeader
                          className="relative rounded-xl border border-blue-gray-50 bg-white py-1 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5"
                          onClick={() => {
                            setSelectedProcess(process);
                            handleOpenTimeline();
                          }}
                        >
                          <TimelineIcon
                            className="p-2"
                            variant="ghost"
                          ></TimelineIcon>
                          <div className="flex flex-col gap-1">
                            <Typography
                              variant="h6"
                              color="blue-gray"
                              className="text-sm sm:text-base"
                            >
                              {process.name.length > 20
                                ? process.name.slice(0, 20) + "..."
                                : process.name}
                            </Typography>
                            <Typography
                              variant="small"
                              color="blue"
                              className="font-medium text-xs sm:text-xs"
                            >
                              {renderType(process.type)}
                            </Typography>
                            <Typography
                              variant="small"
                              color="gray"
                              className="font-normal text-xs sm:text-xs"
                            >
                              {formatDateTime(process.time)}
                            </Typography>
                          </div>
                        </TimelineHeader>
                      </TimelineItem>
                    </div>
                  ))}

                {isLoadingProcess && <Spinner />}
              </Timeline>
            </div>
            <Dialog open={openTimeline} handler={handleOpenTimeline}>
              <DialogHeader>Chi tiết công việc</DialogHeader>

              <DialogBody className="h-[25rem] overflow-scroll">
                <section className="content"></section>
                <Tabs className="tab" id="custom-animation" value="infor">
                  <TabsHeader className="tab-header">
                    {data.map(({ label, value }) => (
                      <Tab key={value} value={value}>
                        {label}
                      </Tab>
                    ))}
                  </TabsHeader>
                  <TabsBody
                    animate={{
                      initial: { y: 250 },
                      mount: { y: 0 },
                      unmount: { y: 250 },
                    }}
                  >
                    {data.map(({ value, desc }) => (
                      <TabPanel key={value} value={value}>
                        {desc}
                      </TabPanel>
                    ))}
                  </TabsBody>
                </Tabs>
              </DialogBody>
              <DialogFooter>
                <Button
                  variant="text"
                  color="red"
                  onClick={handleOpenTimeline}
                  className="mr-1"
                >
                  <span>Thoát</span>
                </Button>
              </DialogFooter>
            </Dialog>
          </div>
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
                  {/*  */}
                  <div>
                    {/* <p className="text-gray-700 dark:text-gray-300">
                      Dưới đây là tổng hợp video mà hệ thống đã ghi lại được.
                    </p> */}
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
                    <div>Không có video</div>
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
                <div>
                  <Card className="overflow-scroll max-h-80 overflow-y-scroll mx-auto">
                    <div className="block overflow-x-auto">
                      <table className="w-full min-w-max text-center border border-collapse">
                        <thead>
                          <tr>
                            {TABLE_HEAD.map((head) => (
                              <th
                                key={head}
                                className="border-b border-blue-gray-600 bg-blue-gray-200 p-2 sm:p-2"
                              >
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal leading-none opacity-70"
                                >
                                  {head}
                                </Typography>
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {isSuccessExpect &&
                            dataExpect.map((expect, index) => {
                              const isLast = index === dataExpect.length - 1;
                              const classes = isLast
                                ? "p-2 sm:p-4"
                                : "p-2 sm:p-4 border-b border-blue-gray-50";

                              return (
                                <tr key={index}>
                                  <td className={`${classes} border`}>
                                    <Typography
                                      variant="small"
                                      color="blue-gray"
                                      className="font-normal text-xs sm:text-sm"
                                    >
                                      {formatDateTime(expect.time)}
                                    </Typography>
                                  </td>
                                  <td
                                    className={`${classes} bg-blue-gray-50/50`}
                                  >
                                    <Typography
                                      variant="small"
                                      color="blue-gray"
                                      className="font-normal text-xs sm:text-sm"
                                    >
                                      {expect.amount}
                                    </Typography>
                                  </td>
                                  <td>
                                    <div>
                                      <svg
                                        onClick={() => {
                                          setSelectedExpect(expect);
                                          handleOpenTable();
                                        }}
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                                        />
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                        />
                                      </svg>
                                    </div>
                                  </td>
                                </tr>
                              );
                            })}
                          {isLoadingExpect && <Spinner />}
                        </tbody>
                      </table>
                    </div>
                    <Dialog open={openTable} handler={handleOpenTable}>
                      <DialogHeader>Nội dung </DialogHeader>
                      <DialogBody>
                        {isSuccessExpect && selectedExpect && (
                          <div>
                            <div className="max-w-screen-md text-xs">
                              <h4 className="text-lg font-semibold  text-gray-800">
                                Mã Hash
                              </h4>
                              <p className="text-blue-600 mb-4">
                                {formatTransactionHashTable({
                                  str: selectedExpect.tx,
                                  a: 8,
                                  b: 5,
                                })}
                              </p>
                              <h3 className="text-lg  text-gray-800 font-semibold">
                                Ghi chú
                              </h3>
                              <p className="font-semibold text-gray-600">
                                {selectedExpect.note}
                              </p>
                            </div>

                            {selectedExpect?.isEdited && (
                              <>
                                <h4 className="text-lg  text-gray-800 font-semibold mt-4">
                                  Lịch sử chỉnh sửa
                                </h4>
                                {selectedExpect.historyExpect.map(
                                  (data, index) => (
                                    <ActivityLogItem
                                      key={index} // Assuming each item has a unique key
                                      text={data.amount}
                                      linkText={formatTransactionHashTable({
                                        str: selectedExpect.tx,
                                        a: 8,
                                        b: 5,
                                      })}
                                      time={formatDateTime(data.time)}
                                      note={data.note}
                                    />
                                  )
                                )}
                              </>
                            )}
                          </div>
                        )}
                        {isLoadingExpect && <Spinner />}
                      </DialogBody>
                      <DialogFooter>
                        <Button
                          variant="text"
                          color="red"
                          onClick={handleOpenTable}
                          className="mr-1"
                        >
                          <span>Thoát</span>
                        </Button>
                      </DialogFooter>
                    </Dialog>
                  </Card>
                </div>
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
                <section className="px-4">
                  <>
                    <Accordion
                      open={openExpect === 1}
                      icon={<Icon id={1} open={openExpect} />}
                    >
                      <AccordionHeader
                        className="text-base"
                        onClick={() => handleOpenExpect(1)}
                      >
                        Hoạt động làm đất
                      </AccordionHeader>
                      <AccordionBody>
                        <section className="flex items-center justify-center">
                          <div
                            className="max-w-[500px] w-full rounded-xl border border-gray-200 bg-white py-4 px-1 shadow-md shadow-gray-100"
                            onClick={handleOpenCultivation}
                          >
                            <div className="flex items-center justify-between px-2 text-lg md:text-base font-medium text-gray-700"></div>
                            <div className="mt-1">
                              <div className="flex max-h-[400px] w-full flex-col overflow-y-scroll">
                                {dataPlantFarming?.cultivationActivities?.map(
                                  (item, index) => (
                                    <button
                                      key={index}
                                      className="group flex items-center gap-x-5 rounded-md px-2.5 py-2 transition-all duration-75 hover:bg-green-100"
                                      onClick={() => {
                                        setSelectedCultivation(item);
                                        handleOpenCultivation();
                                      }}
                                    >
                                      <div
                                        className="flex items-center rounded-lg bg-gray-200 text-black group-hover:bg-green-200"
                                        style={{
                                          width: "30px",
                                          height: "30px",
                                          flexShrink: 0,
                                        }}
                                      >
                                        <span className="tag w-full text-center text-xl font-medium text-gray-700 group-hover:text-green-900">
                                          <svg
                                            className="mx-auto h-6 w-6"
                                            aria-hidden="true"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                            ></path>
                                          </svg>
                                        </span>
                                      </div>
                                      <div className="flex flex-col items-start text-gray-600">
                                        <p
                                          className="font-semibold text-blue-500"
                                          style={{
                                            float: "left",
                                            width: "100%",
                                            textAlign: "justify",
                                          }}
                                        >
                                          {item?.name}
                                        </p>
                                      </div>
                                    </button>
                                  )
                                )}
                              </div>
                            </div>
                          </div>
                          <Dialog
                            open={openCultivation}
                            handler={handleOpenCultivation}
                          >
                            <DialogHeader>Họat động làm đất </DialogHeader>
                            {selectedCultivation && (
                              <DialogBody>
                                <div>
                                  <div className="max-w-screen-md text-xs">
                                    <h4 className="text-lg font-semibold  text-gray-800">
                                      Tên hoạt động
                                    </h4>
                                    <p className="font-semibold text-gray-600 mb-4">
                                      {selectedCultivation?.name}
                                    </p>
                                    <h3 className="text-lg  text-gray-800 font-semibold">
                                      Mô tả
                                    </h3>
                                    <p className="font-semibold text-gray-600">
                                      {selectedCultivation?.description}
                                    </p>
                                  </div>
                                </div>
                              </DialogBody>
                            )}

                            <DialogFooter>
                              <Button
                                variant="text"
                                color="red"
                                onClick={handleOpenCultivation}
                                className="mr-1"
                              >
                                <span>Thoát</span>
                              </Button>
                            </DialogFooter>
                          </Dialog>
                        </section>
                      </AccordionBody>
                    </Accordion>
                    <Accordion
                      open={openExpect === 2}
                      icon={<Icon id={2} open={openExpect} />}
                    >
                      <AccordionHeader
                        className="text-base"
                        onClick={() => handleOpenExpect(2)}
                      >
                        Hoạt động gieo trồng
                      </AccordionHeader>
                      <AccordionBody>
                        <section className="flex items-center justify-center">
                          <div className="max-w-[500px] w-full rounded-xl border border-gray-200 bg-white py-4 px-1 shadow-md shadow-gray-100">
                            <div className="flex items-center justify-between px-2 text-lg md:text-base font-medium text-gray-700"></div>
                            <div className="mt-1">
                              <div className="flex max-h-[400px] w-full flex-col overflow-y-scroll">
                                <button
                                  className="group flex items-center gap-x-5 rounded-md px-2.5 py-2 transition-all duration-75 hover:bg-green-100"
                                  onClick={() => {
                                    setSelectedPlanting(
                                      dataPlantFarming?.plantingActivity
                                    );
                                    handleOpenpPlanting();
                                  }}
                                >
                                  <div
                                    className="flex items-center rounded-lg bg-gray-200 text-black group-hover:bg-green-200"
                                    style={{
                                      width: "30px",
                                      height: "30px",
                                      flexShrink: 0,
                                    }}
                                  >
                                    <span className="tag w-full text-center text-xl font-medium text-gray-700 group-hover:text-green-900">
                                      <svg
                                        className="mx-auto h-6 w-6"
                                        aria-hidden="true"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                      </svg>
                                    </span>
                                  </div>

                                  <div className="flex flex-col items-start justify-between font-light text-gray-600">
                                    <p
                                      className="font-semibold text-blue-500"
                                      style={{
                                        float: "left",
                                        width: "100%",
                                        textAlign: "justify",
                                      }}
                                    >
                                      {
                                        dataPlantFarming?.plantingActivity
                                          .density
                                      }
                                    </p>
                                  </div>
                                </button>
                              </div>
                            </div>
                          </div>
                          <Dialog
                            open={openpPlanting}
                            handler={handleOpenpPlanting}
                          >
                            <DialogHeader> Hoạt động gieo trồng </DialogHeader>
                            {selectedPlanting && (
                              <DialogBody>
                                <div>
                                  <div className="max-w-screen-md text-xs">
                                    <h4 className="text-lg font-semibold  text-gray-800">
                                      Nội dung
                                    </h4>
                                    <p className="font-semibold text-gray-600 mb-4">
                                      {selectedPlanting.density}
                                    </p>
                                    <h3 className="text-lg  text-gray-800 font-semibold">
                                      Mô tả
                                    </h3>
                                    <p className="font-semibold text-gray-600">
                                      {selectedPlanting.description}
                                    </p>
                                  </div>
                                </div>
                              </DialogBody>
                            )}

                            <DialogFooter>
                              <Button
                                variant="text"
                                color="red"
                                onClick={handleOpenpPlanting}
                                className="mr-1"
                              >
                                <span>Thoát</span>
                              </Button>
                            </DialogFooter>
                          </Dialog>
                        </section>
                      </AccordionBody>
                    </Accordion>
                    <Accordion
                      open={openExpect === 3}
                      icon={<Icon id={3} open={openExpect} />}
                    >
                      <AccordionHeader
                        className="text-base"
                        onClick={() => handleOpenExpect(3)}
                      >
                        Hoạt động bón phân
                      </AccordionHeader>
                      <AccordionBody>
                        <section className="flex items-center justify-center">
                          <div className="max-w-[500px] w-full rounded-xl border border-gray-200 bg-white py-4 px-1 shadow-md shadow-gray-100">
                            <div className="flex items-center justify-between px-2 text-lg md:text-base font-medium text-gray-700"></div>
                            <div className="mt-1">
                              <div className="flex max-h-[400px] w-full flex-col overflow-y-scroll">
                                {dataPlantFarming?.fertilizationActivities?.map(
                                  (item, index) => (
                                    <button
                                      key={index}
                                      className="group flex items-center gap-x-5 rounded-md px-2.5 py-2 transition-all duration-75 hover:bg-green-100"
                                      onClick={() => {
                                        setSelectedFertilize(item);
                                        handleOpenFertilize();
                                      }}
                                    >
                                      <div
                                        className="flex items-center rounded-lg bg-gray-200 text-black group-hover:bg-green-200"
                                        style={{
                                          width: "30px",
                                          height: "30px",
                                          flexShrink: 0,
                                        }}
                                      >
                                        <span className="tag w-full text-center text-xl font-medium text-gray-700 group-hover:text-green-900">
                                          <svg
                                            className="mx-auto h-6 w-6"
                                            aria-hidden="true"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                            ></path>
                                          </svg>
                                        </span>
                                      </div>
                                      <div className="flex flex-col items-start justify-between font-light text-gray-600">
                                        <p
                                          className="font-semibold text-blue-500"
                                          style={{
                                            float: "left",
                                            width: "100%",
                                            textAlign: "justify",
                                          }}
                                        >
                                          {item?.fertilizationTime}
                                        </p>
                                      </div>
                                    </button>
                                  )
                                )}
                              </div>
                            </div>
                          </div>
                          <Dialog
                            open={openFertilize}
                            handler={handleOpenFertilize}
                          >
                            <DialogHeader>Hoạt động bón phân </DialogHeader>
                            {selectedFertilize && (
                              <DialogBody>
                                <div>
                                  <div className="max-w-screen-md text-xs">
                                    <h4 className="text-lg font-semibold  text-gray-800">
                                      Quy trình
                                    </h4>
                                    <p className="font-semibold text-gray-600 mb-4">
                                      {selectedFertilize.fertilizationTime}
                                    </p>
                                    <h3 className="text-lg  text-gray-800 font-semibold">
                                      Kiểu
                                    </h3>
                                    <p className="font-semibold text-gray-600 mb-4">
                                      {selectedFertilize.type}
                                    </p>
                                    <h3 className="text-lg  text-gray-800 font-semibold">
                                      Mô tả
                                    </h3>
                                    <p className="font-semibold text-gray-600">
                                      {selectedFertilize.description}
                                    </p>
                                  </div>
                                </div>
                              </DialogBody>
                            )}

                            <DialogFooter>
                              <Button
                                variant="text"
                                color="red"
                                onClick={handleOpenFertilize}
                                className="mr-1"
                              >
                                <span>Thoát</span>
                              </Button>
                            </DialogFooter>
                          </Dialog>
                        </section>
                      </AccordionBody>
                    </Accordion>
                    <Accordion
                      open={openExpect === 4}
                      icon={<Icon id={4} open={openExpect} />}
                    >
                      <AccordionHeader
                        className="text-base"
                        onClick={() => handleOpenExpect(4)}
                      >
                        Phòng trừ sâu bệnh
                      </AccordionHeader>
                      <AccordionBody>
                        <section className="flex items-center justify-center">
                          <div className="max-w-[500px] w-full rounded-xl border border-gray-200 bg-white py-4 px-1 shadow-md shadow-gray-100">
                            <div className="flex items-center justify-between px-2 text-lg md:text-base font-medium text-gray-700"></div>
                            <div className="mt-1">
                              <div className="flex max-h-[400px] w-full flex-col overflow-y-scroll">
                                {dataPlantFarming?.pestAndDiseaseControlActivities?.map(
                                  (item, index) => (
                                    <button
                                      key={index}
                                      className="group flex items-center gap-x-5 rounded-md px-2.5 py-2 transition-all duration-75 hover:bg-green-100"
                                      onClick={() => {
                                        setSelectedPesticide(item);
                                        handleOpenPesticide();
                                      }}
                                    >
                                      <div
                                        className="flex items-center rounded-lg bg-gray-200 text-black group-hover:bg-green-200"
                                        style={{
                                          width: "30px",
                                          height: "30px",
                                          flexShrink: 0,
                                        }}
                                      >
                                        <span className="tag w-full text-center text-xl font-medium text-gray-700 group-hover:text-green-900">
                                          <svg
                                            className="mx-auto h-6 w-6"
                                            aria-hidden="true"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                            ></path>
                                          </svg>
                                        </span>
                                      </div>

                                      <div className="flex flex-col items-start justify-between font-light text-gray-600">
                                        <p
                                          className="font-semibold text-blue-500"
                                          style={{
                                            float: "left",
                                            width: "100%",
                                            textAlign: "justify",
                                          }}
                                        >
                                          {item?.name}
                                        </p>
                                      </div>
                                    </button>
                                  )
                                )}
                              </div>
                            </div>
                          </div>
                          <Dialog
                            open={openPesticide}
                            handler={handleOpenPesticide}
                          >
                            <DialogHeader> Phòng trừ sâu bệnh </DialogHeader>
                            {selectedPesticide && (
                              <DialogBody>
                                <div>
                                  <div className="max-w-screen-md text-xs">
                                    <h4 className="text-lg font-semibold  text-gray-800">
                                      Tên
                                    </h4>
                                    <p className="font-semibold text-gray-600 mb-4">
                                      {selectedPesticide.name}
                                    </p>
                                    <h3 className="text-lg  text-gray-800 font-semibold">
                                      Kiểu
                                    </h3>
                                    <p className="font-semibold text-gray-600 mb-4">
                                      {selectedPesticide.type}
                                    </p>
                                    <h3 className="text-lg  text-gray-800 font-semibold">
                                      Triệu chứng
                                    </h3>
                                    <p className="font-semibold text-gray-600 mb-4">
                                      {selectedPesticide.symptoms}
                                    </p>
                                    <h3 className="text-lg  text-gray-800 font-semibold">
                                      Mô tả
                                    </h3>
                                    <p className="font-semibold text-gray-600 mb-4">
                                      {selectedPesticide.description}
                                    </p>
                                    <h3 className="text-lg  text-gray-800 font-semibold">
                                      Giải pháp
                                    </h3>
                                    <ul>
                                      {selectedPesticide?.solution.map(
                                        (data) => (
                                          <li className="font-semibold text-gray-600">
                                            {data}
                                          </li>
                                        )
                                      )}
                                    </ul>
                                  </div>
                                </div>
                              </DialogBody>
                            )}
                            <DialogFooter>
                              <Button
                                variant="text"
                                color="red"
                                onClick={handleOpenPesticide}
                                className="mr-1"
                              >
                                <span>Thoát</span>
                              </Button>
                            </DialogFooter>
                          </Dialog>
                        </section>
                      </AccordionBody>
                    </Accordion>
                  </>
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
              <div className="grid gap-4">
                <div>
                  <img
                    className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
                    src={active}
                    alt=""
                  />
                </div>
                <div className="grid grid-cols-5 gap-4">
                  {isSuccessCertificateImages &&
                    dataCertificateImages.map(({ imgelink }, index) => (
                      <div key={index}>
                        <img
                          onClick={() => setActive(imgelink)}
                          src={imgelink}
                          className="h-15 max-w-full cursor-pointer rounded-lg object-cover object-center"
                          alt="gallery-image"
                        />
                      </div>
                    ))}
                  {isLoadingCertificateImages && <Spinner />}
                </div>
              </div>
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
                        <section className="flex items-center justify-center">
                          <div className="max-w-[500px] w-full rounded-xl border border-gray-200 bg-white py-4 px-1 shadow-md shadow-gray-100">
                            <div className="flex items-center justify-between px-2 text-lg md:text-base font-medium text-gray-700"></div>
                            <div className="mt-1">
                              <div className="flex max-h-[400px] w-full flex-col overflow-y-scroll">
                                <button
                                  className="group flex items-center gap-x-5 rounded-md px-2.5 py-2 transition-all duration-75 hover:bg-green-100"
                                  onClick={() => {}}
                                >
                                  <div
                                    className="flex items-center rounded-lg bg-gray-200 text-black group-hover:bg-green-200"
                                    style={{
                                      width: "30px",
                                      height: "30px",
                                      flexShrink: 0,
                                    }}
                                  >
                                    <span className="tag w-full text-center text-xl font-medium text-gray-700 group-hover:text-green-900">
                                      <svg
                                        className="mx-auto h-6 w-6"
                                        aria-hidden="true"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                      </svg>
                                    </span>
                                  </div>
                                  <div className="flex flex-col items-start text-gray-600">
                                    <p
                                      className="font-semibold text-blue-500"
                                      style={{
                                        float: "left",
                                        width: "100%",
                                        textAlign: "justify",
                                      }}
                                    >
                                      fasdf
                                    </p>
                                  </div>
                                </button>
                              </div>
                            </div>
                          </div>
                        </section>
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
                          <Tables />
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
                          {dataDeleteProcess?.deletedOutput.length ? (
                            <div>Có dữ liệu</div>
                          ) : (
                            <div>Không có dữ liệu</div>
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
