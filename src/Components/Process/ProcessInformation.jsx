import React from "react";
import ListActivityProcess from "../ListEvent/ListActivityProcess";

const ProcessInformation = ({ processInfo }) => {
  return (
    <section>
      <div className=" bg-white text-black px-5 py-2 lg:py-6 shadow border-b border-gray-300">
        <div className="flex items-center lg:space-x-60 space-x-4">
          <div className="lg:text-3xl text-base text-black font-bold px-5 py-2 lg:py-6 shadow border-b border-gray-300 rounded-lg">
            Thông tin quá trình canh tác
          </div>
          <div className="bg-blue-400 lg:p-2 p-1 rounded-lg flex items-center text-sm ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 text-white" // Kích thước lớn hơn và màu xanh
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
              />
            </svg>

            <h3 className="text-white font-bold italic">
              Trusted
            </h3>
          </div>
        </div>

        <ListActivityProcess listActivity={processInfo} />
      </div>
    </section>
  );
};

export default ProcessInformation;
