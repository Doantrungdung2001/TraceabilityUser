import React from "react";
import ListActivityProcess from "../ListEvent/ListActivityProcess";

const ProcessInformation = ({ processInfo }) => {

  return (
    <section>
      <div className="lg:text-3xl bg-white text-lg text-black font-bold px-5 py-2 lg:py-6 shadow border-b border-gray-300">
        Thông tin quá trình canh tác
      </div>
      <ListActivityProcess listActivity={processInfo}/>
    </section>
  );
};

export default ProcessInformation;
