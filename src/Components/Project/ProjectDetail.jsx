import React, { useState, useEffect } from "react";
import Avarta from "../Avarta/Avarta";
import {
  formatDateTime,
  formatTransactionHashTable,
} from "../../Utils/helpers";
import Aos from "aos";
import "aos/dist/aos.css";
import { useParams } from "react-router-dom";
import useProject from "./useProject";
import Footer from "../Footer/Footer";
import { Spinner } from "@material-tailwind/react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const ProjectDetail = () => {
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
  const { projectId } = useParams();
  const { ProjectDetail, isSuccessProjectDetail, isLoadingProjectDetail } =
    useProject({
      projectId,
    });
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <section data-aos="fade-up" className="mx-auto pt-20">
      {isSuccessProjectDetail && (
        <>
          <Avarta data={ProjectDetail.farm.images} />
          <section data-aos="fade-up" className="relative py-8 bg-blueGray-200">
            <div className="container mx-auto px-4">
              <div className="text-center mt-1">
                <h3 className="text-4xl font-semibold leading-normal text-blueGray-700 mb-1">
                  {ProjectDetail.farm.name}
                </h3>
                <div className="text-sm leading-normal mt-0 mb-1 text-blueGray-400 font-bold uppercase">
                  <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                  {ProjectDetail.farm.address}
                </div>
                {ProjectDetail.farm?.email?.map((email) => (
                  <div className="mb-2 text-blue-500 mt-3">
                    <i className="fas fa-mail-bulk mr-2 text-lg"></i>
                    <span>{email}</span>
                  </div>
                ))}
                <div className="mb-2 text-blue-500">
                  <i className="fas fa-phone mr-2 text-lg text-blueGray-400"></i>
                  {ProjectDetail.farm?.phone?.map((phone) => (
                    <span> - {phone} </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <section className="mb-5">
            {/* <div className="p-8">
              <div className="bg-white p-4 rounded-lg shadow-xl py-8 mt-12">
                <h4 className="text-4xl font-bold text-gray-800 tracking-widest uppercase text-center">
                  FAQ
                </h4>
                <p className="text-center text-gray-600 text-sm mt-2">
                  Here are some of the frequently asked questions
                </p>
                <div className="space-y-12 px-2 xl:px-16 mt-12">
                  <div className="mt-4 flex">
                    <div>
                      <div className="flex items-center h-16 border-l-4 border-blue-600">
                        <span className="text-4xl text-blue-600 px-4">Q.</span>
                      </div>
                      <div className="flex items-center h-16 border-l-4 border-gray-400">
                        <span className="text-4xl text-gray-400 px-4">A.</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center h-16">
                        <span className="text-lg text-blue-600 font-bold">
                          Lorem ipsum dolor sit amet?
                        </span>
                      </div>
                      <div className="flex items-center py-2">
                        <span className="text-gray-500">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quae, dignissimos. Neque eos, dignissimos
                          provident reiciendis debitis repudiandae commodi
                          perferendis et itaque, similique fugiat cumque impedit
                          iusto vitae dolorum. Nostrum, fugit!
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
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
                      {ProjectDetail.title}
                    </h3>
                    <p className="text-sm text-gray-600 hover:text-gray-600 leading-6">
                      {ProjectDetail.description}
                    </p>
                    <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                      <li className="flex items-center py-3">
                        <span>Trạng thái</span>
                        <span className="ml-auto">
                          <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">
                            {ProjectDetail.status}
                          </span>
                        </span>
                      </li>
                      <li className="flex items-center py-3">
                        <span>Ngày bắt đầu</span>
                        <span className="ml-auto">{formatDateTime(ProjectDetail.startDate)}</span>
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
                            Mã hash dự án
                          </div>
                          <div className="px-4 py-2 text-blue-800">
                            {formatTransactionHashTable({
                              str: ProjectDetail.txHash,
                              a: 8,
                              b: 5,
                            })}
                          </div>
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="px-4 py-2 font-semibold">
                            Tên dự án
                          </div>
                          <div className="px-4 py-2">{ProjectDetail.title}</div>
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="px-4 py-2 font-semibold">
                            Phân loại
                          </div>
                          <div className="px-4 py-2">
                            {ProjectDetail.plant.plant_type}
                          </div>
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="px-4 py-2 font-semibold">
                            Hạt giống
                          </div>
                          <div className="px-4 py-2">
                            {ProjectDetail.seed.seed_name}
                          </div>
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="px-4 py-2 font-semibold">
                            Diện tích
                          </div>
                          <div className="px-4 py-2">
                            {ProjectDetail.square} (m2)
                          </div>
                        </div>
                        {/* <div className="grid grid-cols-2">
                          <div className="px-4 py-2 font-semibold">
                            Permanant Address
                          </div>
                          <div className="px-4 py-2">
                            Arlington Heights, IL, Illinois
                          </div>
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="px-4 py-2 font-semibold">Email.</div>
                          <div className="px-4 py-2">
                            <a
                              className="text-blue-800"
                              href="mailto:jane@example.com"
                            >
                              jane@example.com
                            </a>
                          </div>
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="px-4 py-2 font-semibold">
                            Birthday
                          </div>
                          <div className="px-4 py-2">Feb 06, 1998</div>
                        </div> */}
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
            <>
              <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(1)}>
                  Cây trồng
                </AccordionHeader>
                <AccordionBody>
                  <div className="text-gray-700">
                    <div className="grid md:grid-cols-2 text-sm">
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Tên dự án</div>
                        <div className="px-4 py-2">{ProjectDetail.title}</div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Số hiệu</div>
                        <div className="px-4 py-2">
                          {ProjectDetail.plant._id}
                        </div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">
                          Ngày bắt đầu
                        </div>
                        <div className="px-4 py-2">
                          {formatDateTime(ProjectDetail.plant.createdAt)}
                        </div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Phân loại</div>
                        <div className="px-4 py-2">
                          {ProjectDetail.plant.plant_type}
                        </div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">
                          Trạng thái
                        </div>
                        <div className="px-4 py-2">
                          {ProjectDetail.plant.isActive && "Sẵn sàng"}
                        </div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Mô tả</div>
                        <div className="px-4 py-2">
                          {ProjectDetail.plant.plant_description}
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(2)}>
                  Hạt giống
                </AccordionHeader>
                <AccordionBody>
                  <div className="text-gray-700">
                    <div className="grid md:grid-cols-2 text-sm">
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">
                          Tên hạt giống
                        </div>
                        <div className="px-4 py-2">
                          {ProjectDetail.seed.seed_name}
                        </div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Số hiệu</div>
                        <div className="px-4 py-2">
                          {ProjectDetail.seed._id}
                        </div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">
                          Ngày bắt đầu
                        </div>
                        <div className="px-4 py-2">
                          {formatDateTime(ProjectDetail.seed.createdAt)}
                        </div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Phân loại</div>
                        <div className="px-4 py-2">
                          {ProjectDetail.seed.seed_slug}
                        </div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">
                          Trạng thái
                        </div>
                        <div className="px-4 py-2">
                          {ProjectDetail.seed.isSeedDefault && "Sẵn sàng"}
                        </div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Mô tả</div>
                        <div className="px-4 py-2">
                          {ProjectDetail.seed.seed_description}
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(3)}>
                  Lịch sử chỉnh sửa
                </AccordionHeader>
                <AccordionBody>
                  {ProjectDetail.historyProcess.map((data, index) => (
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
                        <span className="tracking-wide">
                          Chỉnh sửa lần thứ {index + 1}
                        </span>
                      </div>
                      <div className="text-gray-700">
                        <div className="grid md:grid-cols-2 text-sm">
                          <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">
                              Mã hash dự án
                            </div>
                            <div className="px-4 py-2 text-blue-800">
                              {formatTransactionHashTable({
                                str: data.txHash,
                                a: 8,
                                b: 5,
                              })}
                            </div>
                          </div>
                          <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">
                              Hạt giống
                            </div>
                            <div className="px-4 py-2">
                              {ProjectDetail.seed.seed_name}
                            </div>
                          </div>
                          <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">
                              Ngày tháng
                            </div>
                            <div className="px-4 py-2">
                              {formatDateTime(data.startDate)}
                            </div>
                          </div>
                          <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">Mô tả</div>
                            <div className="px-4 py-2">{data.description}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </AccordionBody>
              </Accordion>
            </>
          </section>
          <Footer />
        </>
      )}
      {isLoadingProjectDetail && <Spinner />}
    </section>
  );
};

export default ProjectDetail;
