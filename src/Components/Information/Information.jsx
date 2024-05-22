import React, { useEffect, useState } from "react";
import "./infor.css";
import { Spinner } from "@material-tailwind/react";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

import { useNavigate, useParams } from "react-router-dom";
import useInformation from "./useInformation";
import Calendar from "../Calendar/Calendar";
import Tables from "../Tables/Tables";
import DeleteProcess from "../Process/DeleteProcess";
import ProcessInformation from "../Process/ProcessInformation";
import SampleProcess from "../Process/SampleProcess";
import Certificates from "../CertificatesPicture/Certificates";
import AccordionOutput from "../Accordion/AccordionOutput";
import InformationOverview from "./InformationOverview";
import ListVideo from "../ListEvent/ListVideo";
import AccordionListVideo from "../Accordion/AccordionListVideo";

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

const VideoPlayer = ({ video_urls }) => {
  return video_urls.map((url, index) => (
    <video key={index} controls autoPlay className="mb-4 w-full h-full">
      <source src={url} type="video/mp4" />
    </video>
  ));
};

const Information = () => {
  const navigate = useNavigate();
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
    startTime,
    endTime,
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
    dataConnectionLoss,
    totalConnectionLossBySeconds,
    isSuccessConnectionLoss,
    isLoadingConnectionLoss,
    dataImage,
    isSuccessImage,
    isLoadingImage,
    dataWeather,
    isSuccessWeather,
    isLoadingWeather,
    dataCamera,
    totalCamera,
    isSuccessCamera,
    isLoadingCamera,
    totalEditProcess,
    processWithoutObjectDetectionCount,
    totalDeletedItem,
    editExpectCount,
    editOutputCount,
    totalQR,
    totalScannedQR,
    allDistributerWithQR,
    isSuccessQR,
    isLoadingQR,
  } = useInformation({ projectId });

  console.log("allDistributerWithQR", allDistributerWithQR);
  //open more information
  const [open, setOpen] = useState(1);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  // delete process
  const [openDeleteProcess, setOpenDeleteProcess] = useState(0);
  const handleOpenDeleteProcess = (value) =>
    setOpenDeleteProcess(openDeleteProcess === value ? 0 : value);

  if (isSuccessProjectInfo && !projectInfo.id) {
    navigate("/404-notfound");
  }
  const renderStatus = (status, output) => {
    if (status === "inProgress" && output?.length === 0) {
      return "Chưa thu hoạch";
    }
    if (status === "inProgress" && output?.length > 0) {
      return "Đang bày bán ";
    }

    if (status === "finished") {
      return "Đã kết thúc";
    }

    if (status === "cancel") {
      return "Đã hủy";
    }
  }
  return (
    <section className="information">
      <div data-aos="fade-up" className="r-title">
        <button className="button">Mã truy xuất : {projectId}</button>
        {isSuccessProjectInfo && (
          <button
            className="button"
            onClick={() =>
              navigate(`/search/index/${projectInfo.projectIndex}`)
            }
          >
            Mã dự án trên blockchain : {projectInfo.projectIndex}
          </button>
        )}
        {
          isSuccessProjectInfo && isSuccessOutput && (
            <button className="button">
              Trạng thái: {renderStatus(projectInfo.status, Output)}
            </button>
          )
        }
        {isLoadingProjectInfo && <Spinner />}
      </div>

      <section className="content">
        <section className="more-infor">
          <div className="px-4 text-gray-900 text-2xl font-bold mt-8 mb-4 lg:ml-8">
            Thông tin đánh giá
            <h3 className="text-green-700 font-semibold text-lg mr-2">
              Mức độ tin tưởng: Trung bình
            </h3>
          </div>

          <div className="block w-full overflow-x-auto lg:max-w-4xl border rounded-lg mx-auto mt-6 mb-4">
            <table className="items-center w-full bg-transparent border-collapse">
              <tbody className="divide-y divide-gray-100 ">
                <tr className="text-gray-500">
                  <th className="border-t-0 px-4 align-middle lg:text-base text-sm font-normal whitespace-nowrap p-4 text-left">
                    Số thời gian camera bị mất kết nối
                  </th>
                  <td className="border-t-0 px-4 align-middle lg:text-sm text-sm font-medium text-gray-900 whitespace-nowrap p-4">
                    {totalConnectionLossBySeconds / 60} phút
                  </td>
                </tr>
                <tr className="text-gray-500">
                  <th className="border-t-0 px-4 align-middle lg:text-base text-sm font-normal whitespace-nowrap p-4 text-left">
                    Số hoạt động không có video đi kèm
                  </th>
                  <td className="border-t-0 px-4 align-middle lg:text-sm text-sm font-medium text-gray-900 whitespace-nowrap p-4">
                    {processWithoutObjectDetectionCount}
                  </td>
                </tr>
                <tr className="text-gray-500">
                  <th className="border-t-0 px-4 align-middle lg:text-base text-sm font-normal whitespace-nowrap p-4 text-left">
                    Số lượng khai báo bị xoá
                  </th>
                  <td className="border-t-0 px-4 align-middle lg:text-sm text-sm font-medium text-gray-900 whitespace-nowrap p-4">
                    {totalDeletedItem}
                  </td>
                </tr>
                <tr className="text-gray-500">
                  <th className="border-t-0 px-4 align-middle lg:text-base text-sm font-normal whitespace-nowrap p-4 text-left">
                    Số lượng khai báo bị sửa đổi
                  </th>
                  <td className="border-t-0 px-4 align-middle lg:text-sm text-sm font-medium text-gray-900 whitespace-nowrap p-4">
                    {totalEditProcess + editExpectCount + editOutputCount} /{" "}
                    {dataProcess?.length + dataExpect?.length + Output?.length}
                  </td>
                </tr>
                <tr className="text-gray-500">
                  <th className="border-t-0 px-4 align-middle lg:text-base text-sm font-normal whitespace-nowrap p-4 text-left">
                    Số lượng camera
                  </th>
                  <td className="border-t-0 px-4 align-middle lg:text-sm text-sm font-medium text-gray-900 whitespace-nowrap p-4">
                    {totalCamera}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section className="more-infor">
          <div className="mb-4">Video tổng quan</div>
          {isSuccessProjectInfo && projectInfo?.video_urls?.length > 0 && (
            <div>
              <VideoPlayer video_urls={projectInfo.video_urls} />
            </div>
          )}
          {(isSuccessProjectInfo && !projectInfo?.video_urls) ||
            (projectInfo?.video_urls?.length === 0 && (
              <div className="text-base text-gray-300 font-normal p-4">
                Không có video tổng quan
              </div>
            ))}
        </section>
        <section className="infor">
          {isSuccessProjectInfo &&
            isSuccessQR &&
            isSuccessCamera &&
            isSuccessConnectionLoss &&
            isSuccessDeleteProcess &&
            isSuccessProcess &&
            isSuccessExpect &&
            isSuccessOutput &&
            projectInfo.id && (
              <InformationOverview
                allDistributerWithQR={allDistributerWithQR}
                dataInfoOverview={projectInfo}
              />
            )}
          {isLoadingProjectInfo && <Spinner />}
        </section>

        <section className="timeline">
          {isSuccessProcess && dataProcess && (
            <ProcessInformation processInfo={dataProcess} />
          )}
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
                open === 1 ? "text-green-400 hover:text-green-700" : ""
              } text-base lg:text-2xl`}
            >
              <h1>Video không tương ứng với hoạt động canh tác nào</h1>
              <div className="ml-4 bg-blue-400 lg:p-2 p-1 rounded-lg flex items-center text-xs px-4 lg:px-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-white" // Kích thước lớn hơn và màu xanh
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                  />
                </svg>

                <h1 className="text-white font-bold italic">Trusted</h1>
              </div>
            </AccordionHeader>
            <AccordionBody className="text-base font-normal">
              {nonProcessObjectDetection?.length ? (
                <AccordionListVideo dataAccordion={nonProcessObjectDetection} />
              ) : (
                // <>
                //   <ListVideo dataListVideo={nonProcessObjectDetection} />
                // </>
                <div className="text-base text-gray-300 font-normal p-4">
                  Không có video
                </div>
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
                open === 2 ? "text-green-400 hover:text-green-700" : ""
              } text-base lg:text-2xl`}
            >
              <div className="flex items-center ">
                <h1> Thông tin dự kiến sản lượng</h1>
                <div className="ml-4 bg-blue-400 lg:p-2 p-1 rounded-lg flex items-center text-xs px-4 lg:px-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-white" // Kích thước lớn hơn và màu xanh
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                    />
                  </svg>

                  <h1 className="text-white font-bold italic">Trusted</h1>
                </div>
              </div>
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              <section>
                {isSuccessExpect && dataExpect && (
                  <Tables infoData={dataExpect} />
                )}
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
                open === 3 ? "text-green-400 hover:text-green-700" : ""
              } text-base lg:text-2xl`}
            >
              Quy trình mẫu
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              {isSuccessPlantFarming && dataPlantFarming && (
                <section>
                  <SampleProcess
                    dataDetailSmapleProces={dataPlantFarming}
                    dataProcess={dataProcess}
                  />
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
                open === 4 ? "text-green-400 hover:text-green-700" : ""
              } text-base lg:text-2xl`}
            >
              <div className="flex items-center  flex-nowrap">
                <h1 className="whitespace-nowrap">Đầu ra</h1>
                <div className="ml-4 bg-blue-400 lg:p-2 p-1 rounded-lg flex items-center text-xs px-4 lg:px-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                    />
                  </svg>

                  <h1 className="text-white font-bold italic">Trusted</h1>
                </div>
              </div>
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              <section>
                {isSuccessOutput && Output && (
                  <AccordionOutput dataAccordion={Output} />
                )}
                {isLoadingOutput && <Spinner />}
              </section>
            </AccordionBody>
          </Accordion>
          {isSuccessImage && isSuccessWeather && (
            <Accordion
              open={open === 5}
              className="rounded-lg border border-blue-gray-300 px-4 mb-2 max-w-3xl mx-auto"
            >
              <AccordionHeader
                onClick={() => handleOpen(5)}
                className={`border-b-0 transition-colors ${
                  open === 5 ? "text-green-400 hover:text-green-700" : ""
                } text-base lg:text-2xl`}
              >
                <h1>Hình ảnh và thời tiết</h1>
                <div className="ml-4 bg-blue-400 lg:p-2 p-1 rounded-lg flex items-center text-xs px-4 lg:px-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-white" // Kích thước lớn hơn và màu xanh
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                    />
                  </svg>

                  <h1 className="text-white font-bold italic">Trusted</h1>
                </div>
              </AccordionHeader>
              <AccordionBody className="pt-0 text-base font-normal">
                <section className="px-4">
                  <div>
                    <Calendar
                      dataImage={dataImage}
                      dataWeather={dataWeather}
                      startTime={startTime}
                      endTime={endTime}
                    />
                  </div>
                </section>
              </AccordionBody>
            </Accordion>
          )}
          {isLoadingImage || (isLoadingWeather && <Spinner />)}
          <Accordion
            open={open === 6}
            className="rounded-lg border border-blue-gray-300 px-4 mb-2 max-w-3xl mx-auto"
          >
            <AccordionHeader
              onClick={() => handleOpen(6)}
              className={`border-b-0 transition-colors ${
                open === 6 ? "text-green-400 hover:text-green-700" : ""
              } text-base lg:text-2xl`}
            >
              Các chứng nhận
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              {isSuccessCertificateImages && dataCertificateImages && (
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
                open === 7 ? "text-green-400 hover:text-green-700" : ""
              } text-base lg:text-2xl`}
            >
              <div className="flex items-center ">
                <h1> Các hoạt động bị xóa</h1>
                <div className="ml-4 bg-blue-400 lg:p-2 p-1 rounded-lg flex items-center text-xs px-4 lg:px-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-white" // Kích thước lớn hơn và màu xanh
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                    />
                  </svg>

                  <h1 className="text-white font-bold italic">Trusted</h1>
                </div>
              </div>
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              <section className="px-1">
                {isSuccessDeleteProcess && dataDeleteProcess && (
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
                            <AccordionOutput
                              dataAccordion={dataDeleteProcess.deletedOutput}
                            />
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
