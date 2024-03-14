import React, { useEffect, useState } from "react";
import "./infor.css";
import { Card, Typography, Carousel, Spinner } from "@material-tailwind/react";
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
  TimelineBody,
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

const TABLE_HEAD = ["Thời gian", "Dự kiến (kg)"];
const cultivation = [];
const planting = [];
const fertilize = [];
const pesticide = [];

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
  const {
    ImageProduct,
    isSuccessOutput,
    isLoadingOutput,
    projectInfo,
    isSuccessProjectInfo,
    isLoadingProjectInfo,
    dataProcess,
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
  } = useInformation({ projectId });

  const [active, setActive] = useState();
  useEffect(() => {
    if (dataCertificateImages && dataCertificateImages.length > 0)
      setActive(dataCertificateImages[0].imgelink);
  }, [isSuccessCertificateImages]);

  const [open, setOpen] = useState(1);
  const [openExpect, setOpenExpect] = useState(0);
  const [selectedProcess, setSelectedProcess] = useState(null);
  const [selectedExpect, setSelectedExpect] = useState(null);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  const handleOpenExpect = (value) =>
    setOpenExpect(openExpect === value ? 0 : value);
  const [openTimeline, setOpenTimeline] = useState(false);
  const handleOpenTimeline = () => setOpenTimeline(!openTimeline);

  const [openTable, setOpenTable] = useState(false);
  const handleOpenTable = () => setOpenTable(!openTable);

  const data = [
    {
      label: "Thông tin",
      value: "infor",
      desc: (
        <DialogBody className="h-[39rem] overflow-scroll">
          <section className="content"></section>
          <section className="infor">
            <div className="specific-information-container">
              <div className="w-full md:w-[32rem]">
                {selectedProcess && selectedProcess.type === "pesticide" && (
                  <div>
                    <Typography variant="h3" color="green">
                      {selectedProcess.detail.name}
                    </Typography>
                    <Typography variant="h4" color="blue">
                      {formatTransactionHashTable({
                        str: selectedProcess.detail.tx,
                        a: 8,
                        b: 5,
                      })}
                    </Typography>
                    <Typography variant="paragraph">
                      {selectedProcess.detail.symptoms}
                    </Typography>
                    {/* <Typography variant="paragraph">
                        {selectedProcess.detail.solution}
                      </Typography> */}
                    <Typography variant="paragraph">
                      {selectedProcess.detail.type}
                    </Typography>
                  </div>
                )}

                {selectedProcess && selectedProcess.type === "fertilize" && (
                  <div>
                    <Typography variant="h3" color="green">
                      {formatDateTime(selectedProcess.time)}
                    </Typography>
                    <Typography variant="h4" color="blue">
                      {formatTransactionHashTable({
                        str: selectedProcess.detail.tx,
                        a: 8,
                        b: 5,
                      })}
                    </Typography>
                    <Typography variant="paragraph">
                      {selectedProcess.detail.description}
                    </Typography>
                    <Typography variant="paragraph">
                      {selectedProcess.detail.type}
                    </Typography>
                  </div>
                )}

                {selectedProcess && selectedProcess.type === "planting" && (
                  <div>
                    <Typography variant="h3" color="green">
                      {selectedProcess.detail.density}
                    </Typography>
                    <Typography variant="h4" color="blue">
                      {formatTransactionHashTable({
                        str: selectedProcess.detail.tx,
                        a: 8,
                        b: 5,
                      })}
                    </Typography>
                    <Typography variant="paragraph">
                      {selectedProcess.detail.description}
                    </Typography>
                  </div>
                )}

                {selectedProcess && selectedProcess.type === "other" && (
                  <div>
                    <Typography variant="h4" color="blue">
                      {formatTransactionHashTable({
                        str: selectedProcess.detail.tx,
                        a: 8,
                        b: 5,
                      })}
                    </Typography>
                    <Typography variant="paragraph">
                      {selectedProcess.detail.description}
                    </Typography>
                  </div>
                )}

                {selectedProcess && selectedProcess.type === "cultivation" && (
                  <div>
                    <Typography variant="h3" color="green">
                      {selectedProcess.detail.name}
                    </Typography>
                    <Typography variant="h4" color="blue">
                      {formatTransactionHashTable({
                        str: selectedProcess.detail.tx,
                        a: 8,
                        b: 5,
                      })}
                    </Typography>
                    <Typography variant="paragraph">
                      {selectedProcess.detail.description}
                    </Typography>
                  </div>
                )}
              </div>
            </div>
          </section>
        </DialogBody>
      ),
    },
    {
      label: "Video",
      value: "Input",
      desc: (
        <div>
          <video
            className="h-full w-full my-2 rounded-lg "
            controls
            autoPlay
            muted
          >
            <source
              src="https://docs.material-tailwind.com/demo.mp4"
              type="video/mp4"
            />
            Your browser does not support the video ta
          </video>
          <video className="h-full w-full rounded-lg" controls autoPlay muted>
            <source
              src="https://docs.material-tailwind.com/demo.mp4"
              type="video/mp4"
            />
            Your browser does not support the video ta
          </video>
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
      <div className="r-title">
        <button className="button">Mã truy xuất : {projectId}</button>
      </div>

      <section className="content">
        <section className="infor">
          <div className=" p-10 flex flex-col justify-between lg:flex-row gap-10 lg:items-center">
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
                {isSuccessOutput &&
                  ImageProduct.map((url, index) => (
                    <img
                      key={index}
                      src={url.img}
                      className="h-full w-full object-cover"
                    />
                  ))}
                {isLoadingOutput && <Spinner />}
              </Carousel>
            </div>
            <div className="product">
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
                            Transaction Hash
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
            <div className="w-full sm:w-[50rem]">
              <Timeline className="flex flex-col">
                {isSuccessProcess &&
                  dataProcess.map((process, index) => (
                    <div>
                      <TimelineItem className="flex-grow h-[7rem]" key={index}>
                        <TimelineConnector className="!w-[60px]" />
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
                              {process.name}
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

              <DialogBody className="h-[39rem] overflow-scroll">
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

      <section className="more-infor">
        <>
          <Accordion
            open={open === 1}
            className="mb-2 rounded-lg border border-blue-gray-300 px-2"
          >
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className={`border-b-0 transition-colors ${
                open === 1 ? "text-green-400 hover:!text-green-700" : ""
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
                      <DialogHeader>Its a simple dialog.</DialogHeader>
                      <DialogBody>
                        The key to more success is to have a lot of pillows. Put
                        it this way, it took me twenty five years to get these
                        plants, twenty five years of blood sweat and tears, and
                        I&apos;m never giving up, I&apos;m just getting started.
                        I&apos;m up to something. Fan luv.
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
            open={open === 2}
            className="mb-2 rounded-lg border border-blue-gray-300 px-4"
          >
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className={`border-b-0 transition-colors ${
                open === 2 ? "text-green-400 hover:!text-green-700" : ""
              }`}
            >
              Quy trình mẫu
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
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
                      {/* <section className="py-1 bg-blueGray-50 min-h-screen">
                        <div className="w-full px-4 mx-auto">
                          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                            <div className="rounded-t mb-0 px-4 py-3 border-0">
                              <div className="flex flex-wrap items-center">
                                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                                  <h3 className="font-semibold text-sm sm:text-base text-blueGray-700">
                                    Page Visits
                                  </h3>
                                </div>
                                <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                                  <button
                                    className="bg-indigo-500 text-white active:bg-indigo-600 text-xs sm:text-sm font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                  >
                                    See all
                                  </button>
                                </div>
                              </div>
                            </div>

                            <div className="block w-full overflow-x-auto">
                              <div className="table w-full">
                                <table className="items-center bg-transparent w-full border-collapse">
                                  <thead>
                                    <tr>
                                      <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-2 text-xs sm:text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left sm:table-cell">
                                        Page name
                                      </th>
                                      <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-2 text-xs sm:text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left sm:table-cell">
                                        Visitors
                                      </th>
                                      <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-2 text-xs sm:text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left sm:table-cell">
                                        Unique users
                                      </th>
                                      <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-2 text-xs sm:text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left sm:table-cell">
                                        Bounce rate
                                      </th>
                                    </tr>
                                  </thead>

                                  <tbody>
                                    <tr>
                                      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs sm:text-sm whitespace-nowrap p-4 text-left text-blueGray-700 sm:table-cell">
                                        /argon/
                                      </th>
                                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs sm:text-sm whitespace-nowrap p-4">
                                        4,569
                                      </td>
                                      <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs sm:text-sm whitespace-nowrap p-4">
                                        340
                                      </td>
                                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs sm:text-sm whitespace-nowrap p-4">
                                        <i className="fas fa-arrow-up text-emerald-500 mr-2 sm:mr-4"></i>
                                        46,53%
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section> */}
                      <section className="flex items-center justify-center">
                        <div className="max-w-[500px] w-full rounded-xl border border-gray-200 bg-white py-4 px-1 shadow-md shadow-gray-100">
                          <div className="flex items-center justify-between px-2 text-lg md:text-base font-medium text-gray-700"></div>
                          <div className="mt-1">
                            <div className="flex max-h-[400px] w-full flex-col overflow-y-scroll">
                              <button className="group flex items-center gap-x-5 rounded-md px-2.5 py-2 transition-all duration-75 hover:bg-green-100">
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
                                  <p className="text-blue-500 text-[15px]">
                                    Click vào xem chi tiết
                                  </p>
                                  <span className="text-xs font-light text-gray-400">
                                    Add a box with additional info
                                  </span>
                                </div>
                              </button>
                              <button className="group flex items-center gap-x-5 rounded-md px-2.5 py-2 transition-all duration-75 hover:bg-green-100">
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
                                  <p className="text-blue-500 text-[15px]">
                                    Click vào xem chi tiết
                                  </p>
                                  <span className="text-xs font-light text-gray-400">
                                    Add a box with additional info
                                  </span>
                                </div>
                              </button>
                              <button className="group flex items-center gap-x-5 rounded-md px-2.5 py-2 transition-all duration-75 hover:bg-green-100">
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
                                  <p className="text-blue-500 text-[15px]">
                                    Click vào xem chi tiết
                                  </p>
                                  <span className="text-xs font-light text-gray-400">
                                    Add a box with additional info
                                  </span>
                                </div>
                              </button>
                              <button className="group flex items-center gap-x-5 rounded-md px-2.5 py-2 transition-all duration-75 hover:bg-green-100">
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
                                  <p className="text-blue-500 text-[15px]">
                                    Click vào xem chi tiết
                                  </p>
                                  <span className="text-xs font-light text-gray-400">
                                    Add a box with additional info
                                  </span>
                                </div>
                              </button>
                              <button className="group flex items-center gap-x-5 rounded-md px-2.5 py-2 transition-all duration-75 hover:bg-green-100">
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
                                  <p className="text-blue-500 text-[15px]">
                                    Click vào xem chi tiết
                                  </p>
                                  <span className="text-xs font-light text-gray-400">
                                    Add a box with additional info
                                  </span>
                                </div>
                              </button>
                            </div>
                          </div>
                        </div>
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
                              <button className="group flex items-center gap-x-5 rounded-md px-2.5 py-2 transition-all duration-75 hover:bg-green-100">
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
                                  <p className="text-blue-500 text-[15px]">
                                    Click vào xem chi tiết
                                  </p>
                                  <span className="text-xs font-light text-gray-400">
                                    Add a box with additional info
                                  </span>
                                </div>
                              </button>
                              <button className="group flex items-center gap-x-5 rounded-md px-2.5 py-2 transition-all duration-75 hover:bg-green-100">
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
                                  <p className="text-blue-500 text-[15px]">
                                    Click vào xem chi tiết
                                  </p>
                                  <span className="text-xs font-light text-gray-400">
                                    Add a box with additional info
                                  </span>
                                </div>
                              </button>
                              <button className="group flex items-center gap-x-5 rounded-md px-2.5 py-2 transition-all duration-75 hover:bg-green-100">
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
                                  <p className="text-blue-500 text-[15px]">
                                    Click vào xem chi tiết
                                  </p>
                                  <span className="text-xs font-light text-gray-400">
                                    Add a box with additional info
                                  </span>
                                </div>
                              </button>
                              <button className="group flex items-center gap-x-5 rounded-md px-2.5 py-2 transition-all duration-75 hover:bg-green-100">
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
                                  <p className="text-blue-500 text-[15px]">
                                    Click vào xem chi tiết
                                  </p>
                                  <span className="text-xs font-light text-gray-400">
                                    Add a box with additional info
                                  </span>
                                </div>
                              </button>
                              <button className="group flex items-center gap-x-5 rounded-md px-2.5 py-2 transition-all duration-75 hover:bg-green-100">
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
                                  <p className="text-blue-500 text-[15px]">
                                    Click vào xem chi tiết
                                  </p>
                                  <span className="text-xs font-light text-gray-400">
                                    Add a box with additional info
                                  </span>
                                </div>
                              </button>
                            </div>
                          </div>
                        </div>
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
                      We&apos;re not always in the position that we want to be
                      at. We&apos;re constantly growing. We&apos;re constantly
                      making mistakes. We&apos;re constantly trying to express
                      ourselves and actualize our dreams.
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
                      We&apos;re not always in the position that we want to be
                      at. We&apos;re constantly growing. We&apos;re constantly
                      making mistakes. We&apos;re constantly trying to express
                      ourselves and actualize our dreams.
                    </AccordionBody>
                  </Accordion>
                </>
              </section>
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 3}
            className="mb-2 rounded-lg border border-blue-gray-300 px-4"
          >
            <AccordionHeader
              onClick={() => handleOpen(3)}
              className={`border-b-0 transition-colors ${
                open === 3 ? "text-green-400 hover:!text-green-700" : ""
              }`}
            >
              Đầu ra
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal"></AccordionBody>
          </Accordion>
          <Accordion
            open={open === 4}
            className="rounded-lg border border-blue-gray-300 px-4"
          >
            <AccordionHeader
              onClick={() => handleOpen(4)}
              className={`border-b-0 transition-colors ${
                open === 4 ? "text-green-400 hover:!text-green-700" : ""
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
        </>
      </section>
    </section>
  );
};

export default Information;
