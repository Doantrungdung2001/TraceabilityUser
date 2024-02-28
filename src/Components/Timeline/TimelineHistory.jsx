import React from "react";
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

function TimelineHistory() {
  return (
    <section className="timeline">
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
        </Timeline>
      </div>
    </section>
  );
}

export default TimelineHistory;
