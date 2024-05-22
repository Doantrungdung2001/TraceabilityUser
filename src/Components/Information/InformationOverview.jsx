import React, { useState } from "react";
import CarouselPicture from "../Picture/CarouselPicture";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Spinner,
  Drawer,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { formatDate, formatTransactionHashTable } from "../../Utils/helpers";
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
  totalItemCount,
}) => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);
  const [openTop, setOpenTop] = useState(false);
  const openDrawerTop = () => setOpenTop(true);
  const closeDrawerTop = () => setOpenTop(false);

  return (
    <section className="justify-center">
      <div className="min-h-screen flex flex-col sm:p-14 md:p-20 justify-center bg-white rounded-2xl">
        <div className="flex justify-center items-center">
          <h3 className="text-green-700 font-semibold text-lg mr-2">
            Mức độ tin tưởng: Trung bình
          </h3>
          <a
            onClick={handleOpen}
            className="text-blue-400 cursor-pointer  italic hover:text-blue-600"
          >
            (Chi tiết...)
          </a>
        </div>
        <div className="flex flex-col justify-center items-center rounded-md text-lg mb-2 bg-green-500 p-3 ml-5 mr-5 mt-3 lg:ml-80 lg:mr-80">
          <h3 className="text-white font-bold">
            Mã dự án trên blockchain : {dataInfoOverview.projectIndex}
          </h3>
          <a
            className="text-white text-sm italic cursor-pointer hover:text-blue-800"
            onClick={() =>
              navigate(`/search/index/${dataInfoOverview.projectIndex}`)
            }
          >
            Ấn vào để xem chi tiết
          </a>
        </div>

        <div></div>
        <div className="mx-auto max-w-6xl">
          <section className="font-sans text-black">
            <div className="[ lg:flex lg:items-center ] [ fancy-corners fancy-corners--large fancy-corners--top-left fancy-corners--bottom-right ]">
              <div className="p-6 bg-grey">
                <div className="bg-white overflow-hidden shadow rounded-lg border">
                  <div className="lg:py-5 px-4 py-3">
                    <div className="flex justify-between items-center text-sm">
                      <div>
                        <h3 className="text-lg leading-6 font-medium text-green-700">
                          Thông tin chung
                        </h3>
                        {/* <Button onClick={openDrawerTop}>Thông tin hướng dẫn sử dụng</Button> */}
                      </div>
                      <div className="ml-4 bg-blue-400 lg:p-2 p-1 rounded-lg flex items-center">
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

                        <h1 className="text-white font-bold italic">
                          Trusted
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 lg:px-4 lg:py-5 sm:p-0 px-5 py-1">
                    <dl className="sm:divide-y sm:divide-gray-200">
                      <div className="lg:py-3 py-1 sm:py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-700">
                          Transaction Hash (Khởi tạo dự án)
                        </dt>
                        <dd className="mt-1 text-sm text-blue-600 lg:text-base font-medium sm:mt-0 sm:col-span-2">
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
                      {dataInfoOverview.status === "inProgress" && (
                        <div className="lg:py-3 py-1 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="text-sm font-medium text-gray-700">
                            {dataInfoOverview?.endDate ? "Ngày kết thúc" : "Dự kiến ngày kết thúc"}
                          </dt>
                          <dd className="mt-1 text-sm text-black lg:text-base font-medium sm:mt-0 sm:col-span-2">
                            {
                              dataInfoOverview?.endDate
                                ? formatDate(dataInfoOverview?.endDate) : formatDate(dataInfoOverview?.expectedEndDate)}
                          </dd>
                        </div>
                      )}
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
                          {allDistributerWithQR?.map((data, index) => (
                            <p key={index}>
                              {data.name}: {data.totalScannedQR}/{data.totalQR}{" "}
                              <br />
                            </p>
                          ))}
                          {!allDistributerWithQR ||
                            (allDistributerWithQR.length === 0 && (
                              <p>Không có dữ liệu</p>
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
      <Drawer
        placement="top"
        open={openTop}
        onClose={closeDrawerTop}
        className="p-4"
      >
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            Hướng dẫn sử dụng
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawerTop}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <Typography color="gray" className="mb-8 pr-4 font-normal">
          Nội dung ghi ở đây 
        </Typography>
        <div className="flex gap-2">
          <Button size="sm" variant="outlined">
            Nếu cần
          </Button>
          <Button size="sm">Get Started</Button>
        </div>
      </Drawer>
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
        </DialogBody>
        0
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
