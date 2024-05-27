import React, { useState } from "react";
import {
  formatTransactionHashTable,
  formatDateTime,
} from "../../Utils/helpers";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

const ListVideo = ({ dataListVideo }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const [selectListVideo, setSelectedListVideo] = useState();
  return (
    <section>
      <div className="mt-2 bg-white overflow-hidden shadow rounded-lg border">
        <div className="px-4 py-5">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Thông tin chung
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-700"></p>
        </div>
        <div className="border-t border-gray-200 lg:px-4 lg:py-5 sm:p-0 px-5 py-1">
          <dl className="sm:divide-y sm:divide-gray-200">
            <div className="lg:py-3 py-1 sm:py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-700">
                Mã Transaction
              </dt>
              <dd className="mt-1 text-sm text-blue-500 lg:text-base font-medium sm:mt-0 sm:col-span-2">
                {formatTransactionHashTable({
                  str: dataListVideo[0].tx_hash,
                  a: 8,
                  b: 5,
                })}
              </dd>
            </div>
            <div className="lg:py-3 py-1 sm:py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-700">
                Mã Concatenated Hash
              </dt>
              <dd className="mt-1 text-sm text-blue-500 lg:text-base font-medium sm:mt-0 sm:col-span-2">
                {formatTransactionHashTable({
                  str: dataListVideo[0].concatenated_hash,
                  a: 8,
                  b: 5,
                })}
              </dd>
            </div>
            <div className="lg:py-3 py-1 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-700">
                Thời gian bắt đầu
              </dt>
              <dd className="mt-1 text-sm text-black lg:text-base font-medium sm:mt-0 sm:col-span-2">
                {formatDateTime(dataListVideo[0].start_time)}
              </dd>
            </div>
            <div className="lg:py-3 py-1 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-700">
                Thời gian kết thúc
              </dt>
              <dd className="mt-1 text-sm text-black lg:text-base font-medium sm:mt-0 sm:col-span-2">
                {formatDateTime(dataListVideo[0].end_time)}
              </dd>
            </div>
            <div className="lg:py-3 py-1 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-700">
                Số lượng video
              </dt>
              <dd className="mt-1 text-sm text-black lg:text-base font-medium sm:mt-0 sm:col-span-2">
                {dataListVideo.length}
              </dd>
            </div>
          </dl>
          <button
            className="mt-2 mb-2 lg:ml-5 ml-2 bg-green-400 lg:px-8 lg:py-2 px-4 py-1 rounded-xl text-sm text-white font-bold"
            onClick={() => {
              setSelectedListVideo(dataListVideo);
              handleOpen();
            }}
          >
            Xem video
          </button>
        </div>
      </div>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Danh sách video</DialogHeader>
        <DialogBody>
          {selectListVideo?.length > 0 ? (
            <div>
              {selectListVideo.map((data, index) => (
                <div key={index}>
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
          ) : (
            <div className="mt-4 lg:text-lg text-base text-gray-400 font-medium">
              Không có video được phát hiện tự động
            </div>
          )}
        </DialogBody>
        <DialogFooter>
          <Button variant="gradient" color="red" onClick={handleOpen}>
            <span>Thoát</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </section>
  );
};

export default ListVideo;
