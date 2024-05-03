import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  formatTransactionHashTable,
  formatLongText,
  formatDateTime,
} from "../../Utils/helpers";
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

const AccordionListVideo = ({ dataAccordion }) => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <>
      {dataAccordion?.map((data, index) => (
        <Accordion
          open={open === index + 1}
          icon={<Icon id={index + 1} open={open} />}
          key={index}
        >
          <AccordionHeader
            onClick={() => handleOpen(index + 1)}
            className={`border-b-2 transition-colors text-sm ${
              open === index + 1 ? "text-green-200 hover:text-green-500" : ""
            } text-sm lg:text-xl`}
          >
            {data.date}
          </AccordionHeader>
          <AccordionBody>
            <div>
              <div className="mt-2 bg-white overflow-hidden shadow rounded-lg border">
                <div className="lg:py-5 px-4 py-2">
                  <h3 className="lg:text-lg text-base leading-6 font-medium text-green-500">
                    Thông tin chung
                  </h3>
                </div>
                <div className="border-t border-gray-200 lg:px-4 lg:py-5 sm:p-0 px-5 py-1">
                  <dl className="sm:divide-y sm:divide-gray-200">
                    <div className="lg:py-3 py-1 sm:py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-700">
                        Mã Transaction
                      </dt>
                      <dd className="mt-1 text-sm text-blue-500 lg:text-base font-medium sm:mt-0 sm:col-span-2">
                        {formatTransactionHashTable({
                          str: data?.objectDetections[0].tx_hash,
                          a: 8,
                          b: 5,
                        })}
                      </dd>
                    </div>
                    <div className="lg:py-3 py-1 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-700">
                        Video Hash
                      </dt>
                      <dd className="mt-1 text-sm text-black lg:text-base font-medium sm:mt-0 sm:col-span-2">
                        {formatLongText({
                          str: data?.objectDetections[0].concatenated_hash,
                          a: 8,
                          b: 5,
                        })}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
              <div className="px-2 mt-4 lg:text-xl text-base font-bold text-green-600 lg:mb-5 mb-3">
                Danh sách video
              </div>
              {data.objectDetections.map((data, index) => (
                <div key={index}>
                  <span className="ml-1 text-base">
                    {formatDateTime(data.start_time)} -{" "}
                    {formatDateTime(data.end_time)}
                  </span>
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
              ))}
            </div>
          </AccordionBody>
        </Accordion>
      ))}
    </>
  );
};

export default AccordionListVideo;
