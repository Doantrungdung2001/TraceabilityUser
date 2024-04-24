import React from "react";
import CarouselPicture from "../Picture/CarouselPicture";
import { Spinner } from "@material-tailwind/react";
import {
  formatDateTime,
  formatTransactionHashTable,
} from "../../Utils/helpers";

const InformationOverview = ({
  dataImage,
  allDistributerWithAmount,
  isSuccessImage,
  isLoadingImage,
  dataInfoOverview,
}) => {
  console.log(allDistributerWithAmount);
  console.log(dataInfoOverview);
  return (
    <div className="min-h-screen flex flex-col sm:p-14 md:p-20 justify-center bg-white rounded-2xl">
      <div className="mx-auto max-w-6xl">
        <section className="font-sans text-black">
          <div className="[ lg:flex lg:items-center ] [ fancy-corners fancy-corners--large fancy-corners--top-left fancy-corners--bottom-right ]">
            <div className="flex-shrink-0 self-stretch sm:flex-basis-40 md:flex-basis-50 xl:flex-basis-60">
              {isSuccessImage && <CarouselPicture dataImage={dataImage} />}
              {isLoadingImage && <Spinner />}
            </div>
            <div className="p-6 bg-grey">
              <div className="bg-white overflow-hidden shadow rounded-lg border">
                <div className="lg:py-5 px-4 py-3">
                  <h3 className="text-lg leading-6 font-medium text-green-700">
                    Thông tin chung
                  </h3>
                </div>
                <div className="border-t border-gray-200 lg:px-4 lg:py-5 sm:p-0 px-5 py-1">
                  <dl className="sm:divide-y sm:divide-gray-200">
                    <div className="lg:py-3 py-1 sm:py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-700">
                        Transaction Hash (Khởi tạo dự án)
                      </dt>
                      <dd className="mt-1 text-sm text-black lg:text-base font-medium sm:mt-0 sm:col-span-2">
                        {formatTransactionHashTable({
                          str: dataInfoOverview?.txHash,
                          a: 8,
                          b: 5,
                        })}
                      </dd>
                    </div>
                    <div className="lg:py-3 py-1 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-700">
                        Nông trại sản xuất
                      </dt>
                      <dd className="mt-1 text-sm text-black lg:text-base font-medium sm:mt-0 sm:col-span-2">
                        {dataInfoOverview?.farm?.name}
                      </dd>
                    </div>
                    <div className="lg:py-3 py-1 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-700">
                        Tên cây
                      </dt>
                      <dd className="mt-1 text-sm text-black lg:text-base font-medium sm:mt-0 sm:col-span-2">
                        {dataInfoOverview?.plant?.plant_name}
                      </dd>
                    </div>
                    <div className="lg:py-3 py-1 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-700">
                        Tên hạt giống
                      </dt>
                      <dd className="mt-1 text-sm text-black lg:text-base font-medium sm:mt-0 sm:col-span-2">
                        {dataInfoOverview?.seed?.seed_name}
                      </dd>
                    </div>
                    <div className="lg:py-3 py-1 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-700">
                        Ngày trồng
                      </dt>
                      <dd className="mt-1 text-sm text-black lg:text-base font-medium sm:mt-0 sm:col-span-2">
                        {formatDateTime(dataInfoOverview?.startDate)}
                      </dd>
                    </div>
                    <div className="lg:py-3 py-1 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-700">
                        Diện tích trồng (m2 )
                      </dt>
                      <dd className="mt-1 text-sm text-black lg:text-base font-medium sm:mt-0 sm:col-span-2">
                        {dataInfoOverview?.square}
                      </dd>
                    </div>
                    <div className="lg:py-3 py-1 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-700">
                        Mô tả
                      </dt>
                      <dd className="mt-1 text-sm text-black lg:text-base font-medium sm:mt-0 sm:col-span-2">
                        {dataInfoOverview?.description}
                      </dd>
                    </div>
                    <div className="lg:py-3 py-1 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-700">
                        Nhà cung cấp
                      </dt>
                      <dd className="mt-1 text-sm text-black lg:text-base font-medium sm:mt-0 sm:col-span-2">
                        {allDistributerWithAmount?.map((data, index) => (
                          <p key={index}>
                            {data.distributer.name} <br />
                          </p>
                        ))}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default InformationOverview;
