import React, {useState} from "react";
import "./time.css";

import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";

import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
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
function TimelineHistory() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const [active, setActive] = React.useState(
    "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  );
  return (
    <section className="timeline">
      <div className="r-title">
        <button className="button">Mã truy xuất : 123456</button>
      </div>
      <div className="w-full sm:w-[50rem]">
        <Timeline className="flex flex-col">
          <TimelineItem className="flex-grow h-[7rem]">
            <TimelineConnector className="!w-[60px]" />
            <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-1 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
              <TimelineIcon className="p-2" variant="ghost"></TimelineIcon>
              <div className="flex flex-col gap-1">
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="text-sm sm:text-base"
                  onClick={handleOpen}
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
              <TimelineIcon className="p-2" variant="ghost"></TimelineIcon>
              <div className="flex flex-col gap-1">
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="text-sm sm:text-base"
                  onClick={handleOpen}
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
              <TimelineIcon className="p-2" variant="ghost"></TimelineIcon>
              <div className="flex flex-col gap-1">
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="text-sm sm:text-base"
                  onClick={handleOpen}
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

          {/* Các TimelineItem khác */}
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
                    <div className="grid md:hidden grid-cols-5 gap-4">
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
        </Timeline>
      </div>
    </section>
  );
}

export default TimelineHistory;
