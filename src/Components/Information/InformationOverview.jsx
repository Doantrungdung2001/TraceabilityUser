import React from "react";
import CarouselPicture from "../Picture/CarouselPicture";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Spinner
} from "@material-tailwind/react";
import {
  formatDate,
  formatDateTime,
  formatTransactionHashTable,
} from "../../Utils/helpers";
import { useNavigate } from "react-router";

const InformationOverview = ({
  dataImage,
  allDistributerWithQR,
  isSuccessImage,
  isLoadingImage,
  dataInfoOverview,
  totalConnectionLossBySeconds,
  processWithoutObjectDetectionCount,
  deletedItemCount,
  editItemCount,
  totalCamera,
  totalItemCount
}) => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);
  return (
    <section className="justify-center">

      <div className="min-h-screen flex flex-col sm:p-14 md:p-20 justify-center bg-white rounded-2xl">
        <div className="flex justify-center items-center">
          <h3 className="text-green-700 font-semibold text-lg mr-2">
            Mức độ tin tưởng: Trung bình
          </h3>
          <a onClick={handleOpen} className="text-blue-400 cursor-pointer">(Chi tiết...)</a>
        </div>
        <button
          className="flex justify-center items-center rounded-md font-bold text-lg mb-2 bg-green-800 p-3 ml-5 mr-5 mt-3 lg:ml-80 lg:mr-80"
          onClick={() =>
            navigate(`/search/index/${dataInfoOverview.projectIndex}`)
          }
        >
          <h3 className="text-white">
            Mã dự án trên blockchain : {dataInfoOverview.projectIndex}
          </h3>
        </button>
        <div></div>
        <div className="mx-auto max-w-6xl">
          <section className="font-sans text-black">
            <div className="[ lg:flex lg:items-center ] [ fancy-corners fancy-corners--large fancy-corners--top-left fancy-corners--bottom-right ]">
              <div className="flex-shrink-0 self-stretch sm:flex-basis-40 md:flex-basis-50 xl:flex-basis-60 p-2">
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
                          {formatDate(dataInfoOverview?.startDate)}
                        </dd>
                      </div>
                      {
                        dataInfoOverview.status === 'inProgress' && (
                          <div className="lg:py-3 py-1 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-700">
                              Ngày dự kiến thu hoạch
                            </dt>
                            <dd className="mt-1 text-sm text-black lg:text-base font-medium sm:mt-0 sm:col-span-2">
                              {formatDate(dataInfoOverview?.expectedEndDate)}
                            </dd>
                          </div>
                        )
                      }
                      <div className="lg:py-3 py-1 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-700">
                          Dự kiến sản lượng ban đầu (kg)
                        </dt>
                        <dd className="mt-1 text-sm text-black lg:text-base font-medium sm:mt-0 sm:col-span-2">
                          {dataInfoOverview?.expectedOutput}
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
                          Cửa hàng cùng số lượng đã bán / tổng số
                        </dt>
                        <dd className="mt-1 text-sm text-black lg:text-base font-medium sm:mt-0 sm:col-span-2">
                          {console.log("allDistributerWithQR here", allDistributerWithQR)}
                          {allDistributerWithQR?.map((data, index) => (
                            <p key={index}>
                              {data.name}: {data.totalScannedQR}/{data.totalQR} <br />
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
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Thông tin đánh giá</DialogHeader>
        <DialogBody>
          <div className="bg-grey">
            <div className="bg-white overflow-hidden shadow rounded-lg border">
              <div className="border-t border-gray-200 lg:px-4 lg:py-5 sm:p-0 px-5 py-1">
                <dl className="sm:divide-y sm:divide-gray-200">
                  <div className="lg:py-3 py-1 sm:py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 lg:grid-cols-2">
                    <dt className="text-sm font-medium text-gray-700">
                      Số thời gian camera bị mất kết nối
                    </dt>
                    <dd className="mt-1 text-sm text-black lg:text-base font-medium sm:mt-0 sm:col-span-2">
                      {totalConnectionLossBySeconds / 60} phút
                    </dd>
                  </div>
                  <div className="lg:py-3 py-1 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-700">
                      Số hoạt động không có video đi kèm
                    </dt>
                    <dd className="mt-1 text-sm text-black lg:text-base font-medium sm:mt-0 sm:col-span-2">
                      {processWithoutObjectDetectionCount}
                    </dd>
                  </div>
                  <div className="lg:py-3 py-1 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-700">
                      Số lượng khai báo bị xoá
                    </dt>
                    <dd className="mt-1 text-sm text-black lg:text-base font-medium sm:mt-0 sm:col-span-2">
                      {deletedItemCount}
                    </dd>
                  </div>
                  <div className="lg:py-3 py-1 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-700">
                      Số lượng khai báo bị sửa đổi
                    </dt>
                    <dd className="mt-1 text-sm text-black lg:text-base font-medium sm:mt-0 sm:col-span-2">
                      {editItemCount} / {totalItemCount}
                    </dd>
                  </div>
                  <div className="lg:py-3 py-1 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-700">
                      Số lượng camera
                    </dt>
                    <dd className="mt-1 text-sm text-black lg:text-base font-medium sm:mt-0 sm:col-span-2">
                      {totalCamera}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </DialogBody>0
        <DialogFooter>
          <Button variant="gradient" color="red" onClick={handleOpen}>
            <span>Thoát</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </section>
  );
};

export default InformationOverview;
