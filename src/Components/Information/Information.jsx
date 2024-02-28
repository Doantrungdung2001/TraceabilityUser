import React, { useState } from "react";
// import "./information.css";
import "./infor.css";
import { Card, Typography, Carousel } from "@material-tailwind/react";
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

import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineIcon,
  TimelineHeader,
} from "@material-tailwind/react";
import {
  BellIcon,
  ArchiveBoxIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";

const TABLE_HEAD = ["Name", "Job", "Employed", "Hello", "Hi", "Hi"];

const TABLE_ROWS = [
  {
    name: "John Michael ",
    job: "Manager",
    date: "23/04/18",
  },
  {
    name: "Alexa Liras",
    job: "Developer",
    date: "23/04/18",
  },
  {
    name: "Laurent Perrier",
    job: "Executive",
    date: "19/09/17",
  },
  {
    name: "Michael Levi",
    job: "Developer",
    date: "24/12/08",
  },
  {
    name: "Richard Gran",
    job: "Manager",
    date: "04/10/21",
  },
  {
    name: "Richard Gran",
    job: "Manager",
    date: "04/10/21",
  },
  {
    name: "Richard Gran",
    job: "Manager",
    date: "04/10/21",
  },
  {
    name: "Richard Gran",
    job: "Manager",
    date: "04/10/21",
  },
  {
    name: "Richard Gran",
    job: "Manager",
    date: "04/10/21",
  },
  {
    name: "Richard Gran",
    job: "Manager",
    date: "04/10/21",
  },
  {
    name: "Richard Gran",
    job: "Manager",
    date: "04/10/21",
  },
];

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

  const data1 = [
    {
      imgelink:
        "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      imgelink:
        "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    },
    {
      imgelink:
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    },
    {
      imgelink:
        "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
    },
    {
      imgelink:
        "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
    },
    {
      imgelink:
        "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
    },
    {
      imgelink:
        "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
    },
    {
      imgelink:
        "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
    },
  ];

  const [activeImg, setActiveImage] = useState(images.img1);

  const [active, setActive] = useState(
    "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  );

  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <section className="information">
      <div className="r-title">
        <button className="button">
          Mã truy xuất : {mockdata.ProductCode}
        </button>
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
                <img
                  src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                  alt="image 1"
                  className="h-full w-full object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                  alt="image 2"
                  className="h-full w-full object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                  alt="image 3"
                  className="h-full w-full object-cover"
                />
              </Carousel>
            </div>
            <div className="product">
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
                              Thông tin chi tiết của sản phẩm
                            </h3>
                            <p className="mt-1 max-w-2xl text-sm leaading-3 text-gray-500">
                              Personal details and application.
                            </p>
                          </div>
                          <div className="mt-6 border-t border-gray-900">
                            <dl className="divide-y divide-gray-800">
                              <div className="px-2 py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leaading-3 text-gray-900">
                                  Tên sản phẩm
                                </dt>
                                <dd className="mt-0 text-sm font-semibold leaading-3 text-gray-900 sm:col-span-2 sm:mt-0">
                                  Bắp cải
                                </dd>
                              </div>
                              <div className="px-2 py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leaading-3 text-gray-900">
                                  Nông trại sản xuất
                                </dt>
                                <dd className="mt-1 text-sm font-semibold leaading-3 text-gray-900 sm:col-span-2 sm:mt-0">
                                  ABC
                                </dd>
                              </div>
                              <div className="px-2 py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leaading-3 text-gray-900">
                                  Người thu hoạch
                                </dt>
                                <dd className="mt-1 text-sm font-semibold leaading-3 text-gray-900 sm:col-span-2 sm:mt-0">
                                  Nguyễn Văn A
                                </dd>
                              </div>
                              <div className="px-2 py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leaading-3 text-gray-900">
                                  Mã sản phẩm
                                </dt>
                                <dd className="mt-1 text-sm font-semibold leaading-3 text-gray-900 sm:col-span-2 sm:mt-0">
                                  XB1111
                                </dd>
                              </div>
                              <div className="px-2 py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leaading-3 text-gray-900">
                                  Cân nặng
                                </dt>
                                <dd className="mt-1 text-sm font-semibold leaading-3 text-gray-900 sm:col-span-2 sm:mt-0">
                                  0.5kg
                                </dd>
                              </div>
                              <div className="px-2 py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leaading-3 text-gray-900">
                                  Số lượng
                                </dt>
                                <dd className="mt-1 text-sm font-semibold leaading-3 text-gray-900 sm:col-span-2 sm:mt-0">
                                  01 (Cái)
                                </dd>
                              </div>
                              <div className="px-2 py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leaading-3 text-gray-900">
                                  Giá cả
                                </dt>
                                <dd className="mt-1 text-sm font-semibold leaading-3 text-gray-900 sm:col-span-2 sm:mt-0">
                                  40,000 (VND)
                                </dd>
                              </div>
                              <div className="px-2 py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leaading-3 text-gray-900">
                                  Thuế (VAT)
                                </dt>
                                <dd className="mt-1 text-sm font-semibold leaading-3 text-gray-900 sm:col-span-2 sm:mt-0">
                                  2,000 (VND)
                                </dd>
                              </div>
                            </dl>
                          </div>
                        </div>
                      </TabPanel>
                    ))}
                  </TabsBody>
                </Tabs>
              </div>
            </div>
          </div>
        </section>

        <section className="timeline">
          <div className="r-time">
            <div className="w-full sm:w-[50rem]">
              <Timeline className="flex flex-col">
                <TimelineItem className="flex-grow h-[7rem]">
                  <TimelineConnector className="!w-[60px]" />
                  <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-1 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                    <TimelineIcon className="p-2" variant="ghost">
                    </TimelineIcon>
                    <div className="flex flex-col gap-1">
                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="text-sm sm:text-base"
                      >
                        $2400, Design changes fasfad sfads fads 
                      </Typography>
                      <Typography
                        variant="small"
                        color="blue"
                        className="font-medium text-xs sm:text-xs"
                      >
                        #AFW112434
                      </Typography>
                      <Typography
                        variant="small"
                        color="gray"
                        className="font-normal text-xs sm:text-xs"
                      >
                        22 DEC 7:20 PM
                      </Typography>
                    </div>
                  </TimelineHeader>
                </TimelineItem>
                <TimelineItem className="flex-grow h-[7rem]">
                  <TimelineConnector className="!w-[60px]" />
                  <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-1 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                    <TimelineIcon className="p-2" variant="ghost">
                    </TimelineIcon>
                    <div className="flex flex-col gap-1">
                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="text-sm sm:text-base"
                      >
                        $2400, Design changes fasfad sfads fads 
                      </Typography>
                      <Typography
                        variant="small"
                        color="blue"
                        className="font-medium text-xs sm:text-xs"
                      >
                        #AFW112434
                      </Typography>
                      <Typography
                        variant="small"
                        color="gray"
                        className="font-normal text-xs sm:text-xs"
                      >
                        22 DEC 7:20 PM
                      </Typography>
                    </div>
                  </TimelineHeader>
                </TimelineItem>
                <TimelineItem className="flex-grow h-[7rem]">
                  <TimelineConnector className="!w-[60px]" />
                  <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-1 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                    <TimelineIcon className="p-2" variant="ghost">
                    </TimelineIcon>
                    <div className="flex flex-col gap-1">
                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="text-sm sm:text-base"
                      >
                        $2400, Design changes fasfad sfads fads 
                      </Typography>
                      <Typography
                        variant="small"
                        color="blue"
                        className="font-medium text-xs sm:text-xs"
                      >
                        #AFW112434
                      </Typography>
                      <Typography
                        variant="small"
                        color="gray"
                        className="font-normal text-xs sm:text-xs"
                      >
                        22 DEC 7:20 PM
                      </Typography>
                    </div>
                  </TimelineHeader>
                </TimelineItem>
                <TimelineItem className="flex-grow h-[7rem]">
                  <TimelineConnector className="!w-[60px]" />
                  <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-1 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                    <TimelineIcon className="p-2" variant="ghost">
                    </TimelineIcon>
                    <div className="flex flex-col gap-1">
                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="text-sm sm:text-base"
                      >
                        $2400, Design changes fasfad sfads fads 
                      </Typography>
                      <Typography
                        variant="small"
                        color="blue"
                        className="font-medium text-xs sm:text-xs"
                      >
                        #AFW112434
                      </Typography>
                      <Typography
                        variant="small"
                        color="gray"
                        className="font-normal text-xs sm:text-xs"
                      >
                        22 DEC 7:20 PM
                      </Typography>
                    </div>
                  </TimelineHeader>
                </TimelineItem>
                {/* <TimelineItem className="flex-grow h-[5rem]">
                  <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                    <TimelineIcon className="p-3" variant="ghost" color="green">
                      
                    </TimelineIcon>
                    <div className="flex flex-col gap-1">
                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="text-sm sm:text-base"
                      >
                        Payment completed for order #4395133
                      </Typography>
                      <Typography
                        variant="small"
                        color="gray"
                        className="font-normal text-xs sm:text-xs"
                      >
                        20 DEC 2:20 AM
                      </Typography>
                    </div>
                  </TimelineHeader>
                </TimelineItem> */}
              </Timeline>
            </div>

            <button
              type="button"
              className="m-8 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-1.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
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
            className="mb-2 rounded-lg border border-blue-gray-300 px-2"
          >
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className={`border-b-0 transition-colors ${
                open === 1 ? "text-green-400 hover:!text-green-700" : ""
              }`}
            >
              Thông tin chi tiết sản phẩm
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              <section>
                <div>
                  <div>Thông tin dự án</div>
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
                          {TABLE_ROWS.map(({ name, job, date }, index) => {
                            const isLast = index === TABLE_ROWS.length - 1;
                            const classes = isLast
                              ? "p-2 sm:p-4"
                              : "p-2 sm:p-4 border-b border-blue-gray-50";

                            return (
                              <tr key={name}>
                                <td className={`${classes} border`}>
                                  <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal text-xs sm:text-sm"
                                  >
                                    {name}
                                  </Typography>
                                </td>
                                <td className={`${classes} bg-blue-gray-50/50`}>
                                  <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal text-xs sm:text-sm"
                                  >
                                    {job}
                                  </Typography>
                                </td>
                                <td className={classes}>
                                  <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal text-xs sm:text-sm"
                                  >
                                    {date}
                                  </Typography>
                                </td>
                                <td className={`${classes} bg-blue-gray-50/50`}>
                                  <Typography
                                    as="a"
                                    href="#"
                                    variant="small"
                                    color="blue-gray"
                                    className="font-medium"
                                  >
                                    Edit
                                  </Typography>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
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
              Thông tin về dự án
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              <section>
                <div>
                  <div>Thông tin dự án</div>
                  <Card className="overflow-scroll">
                    <div className="block overflow-x-auto">
                      <table className="w-full min-w-max table-auto text-left">
                        <thead>
                          <tr>
                            {TABLE_HEAD.map((head) => (
                              <th
                                key={head}
                                className="border-b border-blue-gray-600 bg-blue-gray-200 p-2 sm:p-4"
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
                              ? "p-2 sm:p-4"
                              : "p-2 sm:p-4 border-b border-blue-gray-50";

                            return (
                              <tr key={name}>
                                <td className={classes}>
                                  <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal text-xs sm:text-sm"
                                  >
                                    {name}
                                  </Typography>
                                </td>
                                <td className={`${classes} bg-blue-gray-50/50`}>
                                  <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal text-xs sm:text-sm"
                                  >
                                    {job}
                                  </Typography>
                                </td>
                                <td className={classes}>
                                  <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal text-xs sm:text-sm"
                                  >
                                    {date}
                                  </Typography>
                                </td>
                                <td className={`${classes} bg-blue-gray-50/50`}>
                                  <Typography
                                    as="a"
                                    href="#"
                                    variant="small"
                                    color="blue-gray"
                                    className="font-medium"
                                  >
                                    Edit
                                  </Typography>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </Card>
                </div>
              </section>
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 3}
            className="rounded-lg border border-blue-gray-300 px-4"
          >
            <AccordionHeader
              onClick={() => handleOpen(3)}
              className={`border-b-0 transition-colors ${
                open === 3 ? "text-green-400 hover:!text-green-700" : ""
              }`}
            >
              Thông tin nông trại && Cơ sở pháp lý
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
                  {data1.map(({ imgelink }, index) => (
                    <div key={index}>
                      <img
                        onClick={() => setActive(imgelink)}
                        src={imgelink}
                        className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center"
                        alt="gallery-image"
                      />
                    </div>
                  ))}
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
