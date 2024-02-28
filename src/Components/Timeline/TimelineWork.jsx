import React, { useState } from "react";
import "./timeline.css";

import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";

const data = [
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
];

const TimelineWork = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const [active, setActive] = React.useState(
    "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  );
  return (
    <section className="r-timeline">
      <div class="flex h-screen items-center justify-center bg-white px-6 md:px-60">
        <div class="space-y-6 border-l-2 border-dashed">
          <div class="relative w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-green-500"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clip-rule="evenodd"
              />
            </svg>
            <div class="ml-6">
              <Button color="green" onClick={handleOpen}>
                Làm tơi đất , sớt đất
              </Button>
              <p class="mt-2 max-w-screen-sm text-sm text-gray-500">
                Chi tiết làm đất,...
              </p>
              <span class="mt-1 block text-sm font-semibold text-green-500">
                01/02/2023
              </span>
            </div>
          </div>

          <div class="relative w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-green-500"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clip-rule="evenodd"
              />
            </svg>
            <div class="ml-6">
              {/* <h4 class="font-bold text-green-500">Nhập hạt giống</h4> */}
              <Button color="green" onClick={handleOpen}>
                Nhập hạt giống
              </Button>
              <p class="mt-2 max-w-screen-sm text-sm text-gray-500">
                Chi tiết quá trình
              </p>
              <span class="mt-1 block text-sm font-semibold text-green-500">
                03/03/2023
              </span>
            </div>
          </div>

          <div class="relative w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-green-500"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clip-rule="evenodd"
              />
            </svg>
            <div class="ml-6">
              <Button color="green" onClick={handleOpen}>
                Gieo hạt
              </Button>
              <p class="mt-2 max-w-screen-sm text-sm text-gray-500">
                Chi tiết .....
              </p>
              <span class="mt-1 block text-sm font-semibold text-green-500">
                10/03/2023
              </span>
            </div>
          </div>

          <div class="relative w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-green-500"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clip-rule="evenodd"
              />
            </svg>
            <div class="ml-6">
              <Button color="green" onClick={handleOpen}>
                Phun thuốc trừ sâu
              </Button>
              <p class="mt-2 max-w-screen-sm text-sm text-gray-500">
                Chi tiết quá trình
              </p>
              <span class="mt-1 block text-sm font-semibold text-green-500">
                10/05/2023
              </span>
            </div>
          </div>

          <div class="relative w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-green-500"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clip-rule="evenodd"
              />
            </svg>
            <div class="ml-6">
              {/* <h4 class="font-bold text-green-500">Thu hoạch</h4> */}
              <Button color="green" onClick={handleOpen}>
                Thu hoạch
              </Button>
              <p class="mt-2 max-w-screen-sm text-sm text-gray-500">
                Chi tiết quá trình
              </p>
              <span class="mt-1 block text-sm font-semibold text-green-500">
                10/08/2023
              </span>
            </div>
          </div>

          <div class="relative w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-green-500"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clip-rule="evenodd"
              />
            </svg>
            <div class="ml-6">
              <Button color="green" onClick={handleOpen}>
                Đóng gói sản phẩm
              </Button>
              <p class="mt-2 max-w-screen-sm text-sm text-gray-500">
                Chi tiết quá trình
              </p>
              <span class="mt-1 block text-sm font-semibold text-green-500">
                10/08/2023
              </span>
            </div>
          </div>

          <Dialog open={open} handler={handleOpen}>
            <DialogHeader>Thông tin việc làm</DialogHeader>
            <DialogBody className="h-[39rem] overflow-scroll">
              <section className="content">
                <div className="picture">
                  <div className="grid gap-4">
                    <div>
                      <img
                        className="h-8 w-full max-w-full rounded-lg object-cover object-center md:h-[300px]"
                        src={active}
                        alt=""
                      />
                    </div>
                    <div className="grid grid-cols-5 gap-4">
                      {data.map(({ imgelink }, index) => (
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
                </div>
              </section>

              <section className="infor">
                <div className="specific-information-container">
                  <div className="w-[32rem]">
                    <Timeline>
                      <TimelineItem>
                        <TimelineConnector />
                        <TimelineHeader className="h-6">
                          <TimelineIcon />
                          <Typography
                            variant="h6"
                            color="blue-gray"
                            className="leading-none"
                          >
                            Timeline Title Here.
                          </Typography>
                        </TimelineHeader>
                        <TimelineBody className="pb-8">
                          <Typography
                            variant="small"
                            color="gary"
                            className="font-normal text-gray-600"
                          >
                            The key to more success is to have a lot of pillows.
                            Put it this way, it took me twenty five years to get
                            these plants, twenty five years of blood sweat and
                            tears, and I&apos;m never giving up, I&apos;m just
                            getting started. I&apos;m up to something. Fan luv.
                          </Typography>
                        </TimelineBody>
                      </TimelineItem>
                      <TimelineItem>
                        <TimelineConnector />
                        <TimelineHeader className="h-3">
                          <TimelineIcon />
                          <Typography
                            variant="h6"
                            color="blue-gray"
                            className="leading-none"
                          >
                            Timeline Title Here.
                          </Typography>
                        </TimelineHeader>
                        <TimelineBody className="pb-8">
                          <Typography
                            variant="small"
                            color="gary"
                            className="font-normal text-gray-600"
                          >
                            The key to more success is to have a lot of pillows.
                            Put it this way, it took me twenty five years to get
                            these plants, twenty five years of blood sweat and
                            tears, and I&apos;m never giving up, I&apos;m just
                            getting started. I&apos;m up to something. Fan luv.
                          </Typography>
                        </TimelineBody>
                      </TimelineItem>
                      <TimelineItem>
                        <TimelineHeader className="h-3">
                          <TimelineIcon />
                          <Typography
                            variant="h6"
                            color="blue-gray"
                            className="leading-none"
                          >
                            Timeline Title Here.
                          </Typography>
                        </TimelineHeader>
                        <TimelineBody>
                          <Typography
                            variant="small"
                            color="gary"
                            className="font-normal text-gray-600"
                          >
                            The key to more success is to have a lot of pillows.
                            Put it this way, it took me twenty five years to get
                            these plants, twenty five years of blood sweat and
                            tears, and I&apos;m never giving up, I&apos;m just
                            getting started. I&apos;m up to something. Fan luv.
                          </Typography>
                        </TimelineBody>
                      </TimelineItem>
                    </Timeline>
                  </div>
                </div>
              </section>
            </DialogBody>
            <DialogFooter className="space-x-2">
              <Button variant="text" color="blue-gray" onClick={handleOpen}>
                cancel
              </Button>
              <Button variant="gradient" color="green" onClick={handleOpen}>
                confirm
              </Button>
            </DialogFooter>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default TimelineWork;
