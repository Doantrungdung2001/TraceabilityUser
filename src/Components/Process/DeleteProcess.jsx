import React, { useState } from "react";
import {
  formatDateTime,
  formatTransactionHashTable,
  renderTypeProcess,
} from "../../Utils/helpers";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import DialogInfoDetail from "../Dialog/DialogInfoDetail";
const deletedProcess = [
  {
    tx: "0xc37b08bda486e8e2ae51468c8b83dfb8d106f25b864844101ee3005a91b59640",
    time: "2024-02-24T11:02:00.885Z",
    type: "cultivation",
    cultivationActivity: {
      name: "Nhúng rễ cây vào dung dịch Sherpa 0,1-0,15%",
      description:
        "Trước khi trồng nhúng rễ cây vào dung dịch Sherpa 0,1-0,15%. Nếu sử dụng polietylen phủ đất, sau khi bón lót, phủ kín mặt luống, dùng đất chèn kỹ mép luống và đục lỗ trồng.",
    },
    pestAndDiseaseControlActivity: {
      solution: [],
    },
    createdAtTime: "2024-02-24T11:02:32.645Z",
    isDeleted: true,
    _id: "65d9ccc8b294f1a68b429d4e",
    historyProcess: [],
    deletedAt: "2024-04-15T10:17:32.461Z",
  },
  {
    tx: "0x378a4ddf6869c00a535376b5128aa392a2626102222fac637e5c8ef84ae05a83",
    time: "2024-02-24T12:33:20.470Z",
    type: "fertilize",
    fertilizationActivity: {
      fertilizationTime: "Bón thúc lần 2 25NST (theo cách 1: phân đơn)",
      type: "topFertilizer",
      description: "Trên 1 ha, Ure: 50kg",
    },
    pestAndDiseaseControlActivity: {
      solution: [],
    },
    createdAtTime: "2024-02-24T12:34:03.031Z",
    isDeleted: true,
    _id: "65d9e23bf873e020f62479d4",
    historyProcess: [],
    deletedAt: "2024-04-15T10:17:39.142Z",
  },
];

const DeleteProcess = () => {
  const [selectedDeleteProcess, setSelectedDeleteProcess] = useState();
  const [openDetailDeleteProcess, setOpenDetailDeleteProcess] = useState(false);
  const handleOpenDetailDeleteProcess = () =>
    setOpenDetailDeleteProcess(!openDetailDeleteProcess);
  return (
    <div>
      {deletedProcess?.length > 0 ? (
        <div className="rounded-md justify-items-center divide-y divide-gray-200">
          {deletedProcess.map((proces, index) => (
            <ul
              className="lg:w-[700px] bg-white shadow border-t border-gray-200"
              key={index}
            >
              <li className="lg:px-6 lg:py-4 px-3 py-2">
                <div className="flex justify-between">
                  <span className="lg:text-2xl font-semibold text-base">
                    {renderTypeProcess(proces.type)}
                  </span>
                  <span className="text-xs text-gray-500">
                    {formatDateTime(proces.time)}
                  </span>
                </div>
                <div className="flex justify-between mt-1">
                  <p className="text-xs lg:text-base text-blue-700 mt-1">
                    {formatTransactionHashTable({
                      str: proces.tx,
                      a: 8,
                      b: 5,
                    })}
                  </p>
                  <a
                    className="flex items-center text-xs text-green-700 border border-green-600 lg:py-1 lg:px-3 px-1 py-1 gap-1 rounded inline-flex items-center"
                    onClick={() => {
                      setSelectedDeleteProcess(proces);
                      handleOpenDetailDeleteProcess();
                    }}
                  >
                    <span className="font-medium">Chi tiết</span>
                    <svg
                      className="w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                </div>
              </li>
            </ul>
          ))}
        </div>
      ) : (
        <div>Khong co du lieu</div>
      )}
      <div>
        <Dialog
          open={openDetailDeleteProcess}
          handler={handleOpenDetailDeleteProcess}
        >
          <DialogHeader>Thông tin chi tiết </DialogHeader>
          {selectedDeleteProcess && (
            <DialogBody>
              <DialogInfoDetail dataDetailInfo={selectedDeleteProcess} />
            </DialogBody>
          )}
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={handleOpenDetailDeleteProcess}
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

export default DeleteProcess;
