import React from "react";

const SearchId = () => {
  return (
    <section className="">
      <div className="flex items-center justify-center min-h-screen bg-green-100">
        <div className="mx-5 bg-white rounded-2xl border shadow-xl p-5 md:p-10 max-w-lg w-full md:w-3/4 lg:w-2/3 xl:w-1/2 ">
          <div className="flex flex-col items-center space-y-4">
            <h1 className="font-bold text-2xl text-gray-700 w-full text-center">
              Index
            </h1>
            <p className="text-sm text-gray-500 text-center w-full">
              Hãy nhập mã index sau đó kết qua tra cứu sẽ hiển thị.
            </p>
            <input
              type="text"
              placeholder="index"
              className="border-2 rounded-lg w-full h-12 px-4"
            />
            <button className="bg-green-400 text-white rounded-md font-semibold px-4 py-3 w-full">
              Tra cứu
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchId;
