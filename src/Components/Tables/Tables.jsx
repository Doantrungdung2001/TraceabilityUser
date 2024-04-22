import React, { useState } from "react";
import {
  formatDateTime,
  formatTransactionHashTable,
} from "../../Utils/helpers";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";

const Tables = ({ infoDeleteExpect }) => {
  const deletedExpect = [
    {
      tx: "0x0e7947a640ca26cdeffbf1a0b6220bef053dddf50cd835aa574e0617cc76fce7",
      time: "2024-02-22T23:30:07.826Z",
      amount: 1002,
      note: "Thử tại đây và sửa tiếp.",
      isEdited: true,
      createdAtTime: "2024-02-23T09:58:21.943Z",
      isDeleted: true,
      _id: "65d865d1c160169bfeb919c7",
      historyExpect: [
        {
          tx: "0x1487f558a820196a5f4dd35401353853fe35144b9910b7c21078430c2c0a47c9",
          time: "2024-02-22T23:30:07.826Z",
          amount: 1002,
          note: "Thử tại đây.",
          modifiedAt: "2024-02-23T09:31:38.534Z",
          createdAtTime: "2024-02-23T09:30:57.088Z",
          _id: "65d865fac160169bfeb919e0",
        },
        {
          tx: "0x7c21c68a8125939b2c3201aa4721fd4aa9710fddb0e79ad136d1b0481500a81c",
          time: "2024-02-22T23:30:07.826Z",
          amount: 1002,
          note: "Thử tại đây và sửa.",
          modifiedAt: "2024-02-23T09:58:21.960Z",
          createdAtTime: "2024-02-23T09:31:38.524Z",
          _id: "65d86c3dc160169bfeb91a44",
        },
      ],
      deletedAt: "2024-04-15T10:17:48.087Z",
    },
    {
      tx: "0x0e7947a640ca26cdeffbf1a0b6220bef053dddf50cd835aa574e0617cc76fce7",
      time: "2024-02-22T23:30:07.826Z",
      amount: 1002,
      note: "Thử tại đây và sửa tiếp.",
      isEdited: true,
      createdAtTime: "2024-02-23T09:58:21.943Z",
      isDeleted: true,
      _id: "65d865d1c160169bfeb919c7",
      historyExpect: [
        {
          tx: "0x1487f558a820196a5f4dd35401353853fe35144b9910b7c21078430c2c0a47c9",
          time: "2024-02-22T23:30:07.826Z",
          amount: 1002,
          note: "Thử tại đây.",
          modifiedAt: "2024-02-23T09:31:38.534Z",
          createdAtTime: "2024-02-23T09:30:57.088Z",
          _id: "65d865fac160169bfeb919e0",
        },
        {
          tx: "0x7c21c68a8125939b2c3201aa4721fd4aa9710fddb0e79ad136d1b0481500a81c",
          time: "2024-02-22T23:30:07.826Z",
          amount: 1002,
          note: "Thử tại đây và sửa.",
          modifiedAt: "2024-02-23T09:58:21.960Z",
          createdAtTime: "2024-02-23T09:31:38.524Z",
          _id: "65d86c3dc160169bfeb91a44",
        },
      ],
      deletedAt: "2024-04-15T10:17:48.087Z",
    },
  ];
  const [selectedDetetailDeleteExpect, setSelectedDetailExpect] = useState();
  const [openDetailDeleteExpect, setOpenDetailDeleteExpect] = useState(false);
  const handleOpenDetailDeleteExpect = () =>
    setOpenDetailDeleteExpect(!openDetailDeleteExpect);
  return (
    <div>
      {deletedExpect && deletedExpect.length > 0 ? (
        <div className="lg:w-[700px] block w-full overflow-x-auto border bg-white rounded-md">
          <table className="items-center bg-transparent w-full border-collapse">
            <thead>
              <tr>
                <th className="lg:text-lg lg:px-4 px-2 bg-blueGray-50 text-blueGray-800 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Thời gian
                </th>
                <th className="lg:text-lg lg:px-4 px-2 bg-blueGray-50 text-blueGray-800 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Dự kiến (kg)
                </th>
                <th className="lg:text-lg lg:px-4 px-2 bg-blueGray-50 text-blueGray-800 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"></th>
              </tr>
            </thead>

            <tbody>
              {deletedExpect.map((data, index) => (
                <tr key={index}>
                  <th className="lg:text-base lg:px-4 border-t-0 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-3 text-left text-blueGray-700 ">
                    {formatDateTime(data.time)}
                  </th>
                  <th className="lg:text-base lg:px-4 border-t-0 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-3 text-left text-blueGray-700 ">
                    {data.amount}
                  </th>
                  <td className="border-t-0 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-3">
                    <button
                      className="bg-green-400 text-white active:bg-green-700 text-xs font-bold uppercase px-2 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => {
                        handleOpenDetailDeleteExpect();
                        setSelectedDetailExpect(data);
                      }}
                    >
                      Chi tiết
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div>Không có dữ liệu</div>
      )}
      <div>
        <Dialog
          open={openDetailDeleteExpect}
          handler={handleOpenDetailDeleteExpect}
        >
          <DialogHeader>Thông tin chi tiết </DialogHeader>
          {selectedDetetailDeleteExpect && (
            <DialogBody>
              <div className="overflow-y-auto">
                <div>
                  <div className="max-w-screen-md text-xs border-b pb-2">
                    <h3 className="lg:text-lg text-base font-semibold text-gray-900">
                      Mã transaction
                    </h3>
                    <p className="lg:text-base font-semibold text-blue-900">
                      {formatTransactionHashTable({
                        str: selectedDetetailDeleteExpect.tx,
                        a: 8,
                        b: 5,
                      })}
                    </p>
                  </div>
                  <div className="lg:text-lg max-w-screen-md text-xs mt-4 border-b pb-2">
                    <h3 className="lg:text-lg text-base font-semibold text-gray-900">
                      Thời gian xóa
                    </h3>
                    <p className="lg:text-base font-semibold text-gray-700">
                      {formatDateTime(selectedDetetailDeleteExpect.time)}
                    </p>
                  </div>
                  <div className="max-w-screen-md text-xs mt-4 border-b pb-2">
                    <h3 className="lg:text-lg text-base font-semibold text-gray-900">
                      Số lượng(kg)
                    </h3>
                    <p className="lg:text-base font-semibold text-gray-700">
                      {selectedDetetailDeleteExpect.amount}
                    </p>
                  </div>
                  <div className="max-w-screen-md text-xs mt-4 border-b pb-2">
                    <h3 className="lg:text-lg text-base font-semibold text-gray-900">
                      Ghi chú
                    </h3>
                    <p className="lg:text-base mt-1 font-medium text-gray-700">
                      {selectedDetetailDeleteExpect.note}
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="mt-5 text-2xl font-bold text-black">
                    Lịch xử kỳ vọng
                  </h3>
                  <div className="overflow-x-auto mt-6">
                    <table className="table-auto border-collapse w-full">
                      <thead>
                        <tr className="rounded-lg text-sm font-medium text-gray-800 text-left">
                          <th
                            className="px-4 py-2 bg-gray-200 "
                            style={{ backgroundColor: "#f8f8f8" }}
                          >
                            Thời gian
                          </th>
                          <th
                            className="px-4 py-2 "
                            style={{ backgroundColor: "#f8f8f8" }}
                          >
                            Số lượng
                          </th>
                          <th
                            className="px-4 py-2 "
                            style={{ backgroundColor: "#f8f8f8" }}
                          >
                            Ghi chú
                          </th>
                        </tr>
                      </thead>
                      <tbody className="text-sm font-normal text-gray-700">
                        {selectedDetetailDeleteExpect.historyExpect.map(
                          (historyExpect, index) => (
                            <tr
                              className="hover:bg-gray-100 border-b border-gray-200 py-10 "
                              key={index}
                            >
                              <td className="px-4 py-4">
                                {historyExpect.time}
                              </td>
                              <td className="px-4 py-4">
                                {historyExpect.amount}
                              </td>
                              <td className="px-4 py-4">
                                {historyExpect.note}
                              </td>
                            </tr>
                          )
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </DialogBody>
          )}
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={handleOpenDetailDeleteExpect}
              className="mr-1"
            >
              <span>Thoát</span>
            </Button>
          </DialogFooter>
        </Dialog>
      </div>
    </div>
  );
};

export default Tables;
