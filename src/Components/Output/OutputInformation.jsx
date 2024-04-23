import React from "react";
import TableOutput from "../Tables/TableOutput";

const OutputInformation = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-white lg:p-8 p-2 w-[96rem]">
        <header className="flex font-light text-xs lg:text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 rotate-90 -ml-2"
            viewBox="0 0 24 24"
            stroke="#b91c1c"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M20 12H4"
            />
          </svg>
          <p>Đầu ra</p>
        </header>
        <h2 className="font-bold text-base mt- lg:text-xl">Thông tin cơ bản</h2>

        <TableOutput />
        <div className="flex justify-end">
          <button className="bg-green-600 text-white font-semibold py-2 px-5 text-sm mt-6 inline-flex items-center group rounded-md">
            <p>Chi tiết</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1 group-hover:translate-x-2 delay-100 duration-200 ease-in-out"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OutputInformation;
