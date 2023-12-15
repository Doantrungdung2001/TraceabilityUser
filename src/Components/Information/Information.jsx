import React, { useState } from "react";
import "./information.css";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const mockdata = {
  ProductCode: 123456,
  Farm: "ABC",
  Procedure: "VietGap",
  Input: 1000,
  Output: 900,
  Fertilizer: "NPK",
};

const Information = () => {
  const [images, setImages] = useState({
    img1: "https://khuyennong.backan.gov.vn/wp-content/uploads/2022/11/271996094_4769026249850385_7182923108748771800_n.jpg",
    img2: "https://khomay3a.com/userfiles/image/tin-tuc/ky-thuat-trong-bap-cai-04.jpg",
    img3: "https://www.fao.org.vn/wp-content/uploads/2020/11/cach-trong-bap-cai.jpg",
    img4: "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2021/11/14/973740/Bap-Cai.jpeg",
  });

  const data = [
    {
      label: "Thông tin",
      value: "infor",
    },
    {
      label: "Đầu vào",
      value: "Input",
    },

    {
      label: "Đầu ra",
      value: "Output",
    },
  ];

  const [activeImg, setActiveImage] = useState(images.img1);

  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <section className="information">
      <div className="r-title">
        <button className="button">
          Mã truy xuất : {mockdata.ProductCode}
        </button>
      </div>

      {/* <div className="r-content">
        <div className="r-infor">
          <Tabs id="custom-animation" value="html">
            <TabsHeader className="r-header">
              {data.map(({ label, value }) => (
                <Tab className="r-tab" key={value} value={value}>
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
              {data.map(({ value }) => (
                <TabPanel key={value} value={value}>
                  <Card className="h-full w-full">
                    <table className="w-full min-w-max table-auto text-left">
                      <thead>
                        <tr>
                          {TABLE_HEAD.map((head) => (
                            <th
                              key={head}
                              className="border-b border-blue-gray-400 bg-blue-gray-200 p-4"
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
                        {TABLE_ROWS.map(({ name, job, date }, index) => {
                          const isLast = index === TABLE_ROWS.length - 1;
                          const classes = isLast
                            ? "p-4"
                            : "p-4 border-b border-blue-gray-50";

                          return (
                            <tr key={name}>
                              <td className={classes}>
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal"
                                >
                                  {name}
                                </Typography>
                              </td>
                              <td className={`${classes} bg-blue-gray-50/50`}>
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal"
                                >
                                  {job}
                                </Typography>
                              </td>
                              <td className={classes}>
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal"
                                >
                                  {date}
                                </Typography>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </Card>
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
          <Button>Button</Button>
        </div>

        <div className="r-time">
          <div className="r-event">
            <ul class="timeline">
              <li class="timeline-event">
                <label class="timeline-event-icon"></label>
                <div class="timeline-event-copy">
                  <p class="timeline-event-thumbnail">April 2011 - heute</p>
                  <h3>Geil,Danke! GmbH</h3>
                  <p>Smartphones und Tablets (iOS, Android, Windows).</p>
                </div>
              </li>
              <li class="timeline-event">
                <label class="timeline-event-icon"></label>
                <div class="timeline-event-copy">
                  <p class="timeline-event-thumbnail">
                    November 2009 - März 2011
                  </p>
                  <h3>Freelancer</h3>
                  <p>
                    Konzeption, Design und Produktion von Digitalen Magazinen
                    mit
                  </p>
                </div>
              </li>
              <li class="timeline-event">
                <label class="timeline-event-icon"></label>
                <div class="timeline-event-copy">
                  <p class="timeline-event-thumbnail">April 2011 - heute</p>
                  <h3>konplan gmbh</h3>
                  <p>
                    Modellierung von Systemen und APIs für Digital Publishing
                    und
                  </p>
                </div>
              </li>
            </ul>
            <button className="btn">All event</button>
          </div>
        </div>

        <div className="map">
          <span>Hello</span>
        </div>
      </div> */}

      <section className="content">
        <section className="infor">
          <div className=" p-10 flex flex-col justify-between lg:flex-row gap-10 lg:items-center">
            <div className="flex flex-col gap-6 lg:w-2/4">
              <img
                src={activeImg}
                alt=""
                className="w-full h-full aspect-square object-cover rounded-md"
              />
              <div className="flex flex-row justify-between h-24">
                <img
                  src={images.img1}
                  alt=""
                  className="w-24 h-24 rounded-md cursor-pointer mr-4"
                  onClick={() => setActiveImage(images.img1)}
                />
                <img
                  src={images.img2}
                  alt=""
                  className="w-24 h-24 rounded-md cursor-pointer mr-4"
                  onClick={() => setActiveImage(images.img2)}
                />
                <img
                  src={images.img3}
                  alt=""
                  className="w-24 h-24 rounded-md cursor-pointer mr-4"
                  onClick={() => setActiveImage(images.img3)}
                />
                <img
                  src={images.img4}
                  alt=""
                  className="w-24 h-24 rounded-md cursor-pointer"
                  onClick={() => setActiveImage(images.img4)}
                />
              </div>
            </div>

            <div className="flex flex-col gap-6 lg:w-2/4">
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
                  {data.map(({ value }) => (
                    <TabPanel key={value} value={value}>
                      <div>
                        <div className="px-4 sm:px-0">
                          <h3 className="text-base font-semibold leading-7 text-gray-900">
                            Applicant Information
                          </h3>
                          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                            Personal details and application.
                          </p>
                        </div>
                        <div className="mt-6 border-t border-gray-100">
                          <dl className="divide-y divide-gray-100">
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                              <dt className="text-sm font-medium leading-6 text-gray-900">
                                Full name
                              </dt>
                              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                Margot Foster
                              </dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                              <dt className="text-sm font-medium leading-6 text-gray-900">
                                Application for
                              </dt>
                              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                Backend Developer
                              </dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                              <dt className="text-sm font-medium leading-6 text-gray-900">
                                Email address
                              </dt>
                              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                margotfoster@example.com
                              </dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                              <dt className="text-sm font-medium leading-6 text-gray-900">
                                Salary expectation
                              </dt>
                              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                $120,000
                              </dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                              <dt className="text-sm font-medium leading-6 text-gray-900">
                                About
                              </dt>
                              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                Fugiat ipsum ipsum deserunt culpa aute sint do
                                nostrud anim incididunt cillum culpa consequat.
                                Excepteur qui ipsum aliquip consequat sint. Sit
                                id mollit nulla mollit nostrud in ea officia
                                proident. Irure nostrud pariatur mollit ad
                                adipisicing reprehenderit deserunt qui eu.
                              </dd>
                            </div>
                            {/* <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">
                              Attachments
                            </dt>
                            <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                              <ul
                                role="list"
                                className="divide-y divide-gray-100 rounded-md border border-gray-200"
                              >
                                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                                  <div className="flex w-0 flex-1 items-center">
                                    <PaperClipIcon
                                      className="h-5 w-5 flex-shrink-0 text-gray-400"
                                      aria-hidden="true"
                                    />
                                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                      <span className="truncate font-medium">
                                        resume_back_end_developer.pdf
                                      </span>
                                      <span className="flex-shrink-0 text-gray-400">
                                        2.4mb
                                      </span>
                                    </div>
                                  </div>
                                  <div className="ml-4 flex-shrink-0">
                                    <a
                                      href="#"
                                      className="font-medium text-indigo-600 hover:text-indigo-500"
                                    >
                                      Download
                                    </a>
                                  </div>
                                </li>
                                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                                  <div className="flex w-0 flex-1 items-center">
                                    <PaperClipIcon
                                      className="h-5 w-5 flex-shrink-0 text-gray-400"
                                      aria-hidden="true"
                                    />
                                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                      <span className="truncate font-medium">
                                        coverletter_back_end_developer.pdf
                                      </span>
                                      <span className="flex-shrink-0 text-gray-400">
                                        4.5mb
                                      </span>
                                    </div>
                                  </div>
                                  <div className="ml-4 flex-shrink-0">
                                    <a
                                      href="#"
                                      className="font-medium text-indigo-600 hover:text-indigo-500"
                                    >
                                      Download
                                    </a>
                                  </div>
                                </li>
                              </ul>
                            </dd>
                          </div> */}
                          </dl>
                        </div>
                      </div>
                    </TabPanel>
                  ))}
                </TabsBody>
              </Tabs>
            </div>
          </div>
        </section>

        <section className="timeline">
          <div className="r-time">
            <ol class="relative border-s border-gray-200 dark:border-gray-700">
              <li class="mb-10 ms-6">
                <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg
                    class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </span>
                <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                  Flowbite Application UI v2.0.0{" "}
                  <span class="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">
                    Latest
                  </span>
                </h3>
                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  Released on January 13th, 2022
                </time>
                <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  Get access to over 20+ pages including a dashboard layout,
                  charts, kanban board, calendar, and pre-order E-commerce &
                  Marketing pages.
                </p>
                {/* <a
                  href="#"
                  class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                >
                  <svg
                    class="w-3.5 h-3.5 me-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                    <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                  </svg>{" "}
                  Download ZIP
                </a> */}
              </li>
              <li class="mb-10 ms-6">
                <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg
                    class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </span>
                <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                  Flowbite Figma v1.3.0
                </h3>
                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  Released on December 7th, 2021
                </time>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                  All of the pages and components are first designed in Figma
                  and we keep a parity between the two versions even as we
                  update the project.
                </p>
              </li>
              <li class="ms-6">
                <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg
                    class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </span>
                <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                  Flowbite Library v1.2.2
                </h3>
                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  Released on December 2nd, 2021
                </time>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                  Get started with dozens of web components and interactive
                  elements built on top of Tailwind CSS.
                </p>
              </li>
            </ol>
            <button
              type="button"
              class="m-10 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Chi tiết
            </button>
          </div>
        </section>
      </section>

      <section className="more-infor">
        <>
          <Accordion
            open={open === 1}
            className="mb-2 rounded-lg border border-blue-gray-100 px-4"
          >
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className={`border-b-0 transition-colors ${
                open === 1 ? "text-blue-500 hover:!text-blue-700" : ""
              }`}
            >
              What is Material Tailwind?
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 2}
            className="mb-2 rounded-lg border border-blue-gray-100 px-4"
          >
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className={`border-b-0 transition-colors ${
                open === 2 ? "text-blue-500 hover:!text-blue-700" : ""
              }`}
            >
              How to use Material Tailwind?
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 3}
            className="rounded-lg border border-blue-gray-100 px-4"
          >
            <AccordionHeader
              onClick={() => handleOpen(3)}
              className={`border-b-0 transition-colors ${
                open === 3 ? "text-blue-500 hover:!text-blue-700" : ""
              }`}
            >
              What can I do with Material Tailwind?
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>
        </>
      </section>
    </section>
  );
};

export default Information;
