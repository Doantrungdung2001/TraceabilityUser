import React, { useState } from "react";
import {
  renderTypeProcess,
  formatTransactionHashTable,
} from "../../Utils/helpers";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  TabPanel,
  Tab,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Button,
} from "@material-tailwind/react";

import { Icon } from "@mui/material";
import DialogInfoDetail from "../Dialog/DialogInfoDetail";

const ListActivityProcess = ({ listActivity }) => {
  const [openDetailProcess, setOpenDetailProcess] = useState(false);
  const handleOpenDetailDeleteProcess = () =>
    setOpenDetailProcess(!openDetailProcess);
  //process
  const [selectedProcess, setSelectedProcess] = useState(null);

  const [reportsOpen, setReportsOpen] = useState(0);
  const handleReportsOpen = (value) =>
    setReportsOpen(reportsOpen === value ? 0 : value);
  const data = [
    {
      label: "Thông tin",
      value: "infor",
      desc: (
        <DialogBody className="h-[39rem]">
          <section className="infor">
            {selectedProcess ? (
              <>
                <Accordion
                  open={reportsOpen === 1}
                  icon={<Icon id={1} open={reportsOpen} />}
                >
                  <AccordionHeader
                    onClick={() => handleReportsOpen(1)}
                    style={{ color: "green" }}
                  >
                    Công việc
                  </AccordionHeader>
                  <AccordionBody>
                    <div className="w-full md:w-[40rem]">
                      <DialogInfoDetail dataDetailInfo={selectedProcess} />
                    </div>
                  </AccordionBody>
                </Accordion>
                <Accordion
                  open={reportsOpen === 2}
                  icon={<Icon id={2} open={reportsOpen} />}
                >
                  <AccordionHeader
                    onClick={() => handleReportsOpen(2)}
                    style={{ color: "green" }}
                  >
                    Lịch sử chỉnh sửa
                  </AccordionHeader>
                  <AccordionBody>
                    {selectedProcess?.historyProcess.length > 0 ? (
                      selectedProcess.historyProcess.map((data, index) => (
                        <div key={index}>
                          <div className="mb-1 lg:text-lg text-base text-blue-500 font-bold">
                            Chỉnh sửa lần thứ {index + 1}
                          </div>
                          <DialogInfoDetail dataDetailInfo={data} />
                        </div>
                      ))
                    ) : (
                      <div className="mt-4 lg:text-lg text-base text-gray-400 font-medium">
                        Không có chỉnh sửa
                      </div>
                    )}
                  </AccordionBody>
                </Accordion>
              </>
            ) : (
              <div className="text-gray-400 font-medium text-base lg:text-lg">
                Không có thông tin
              </div>
            )}
          </section>
        </DialogBody>
      ),
    },
    {
      label: "Video",
      value: "Input",
      desc: (
        <div>
          {selectedProcess?.objectDetections?.length > 0 ? (
            <div>
              {/* <div className="rounded-lg border border-gray-300 p-4">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Bắt đầu:{" "}
                  {formatDateTime(
                    selectedProcess?.objectDetections[0].start_time
                  )}
                </p>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Kết thúc:{" "}
                  {formatDateTime(
                    selectedProcess?.objectDetections[0].end_time
                  )}
                </p>
                <p className="text-sm text-gray-900 dark:text-white">
                  Mã hash:{" "}
                  <span className="text-blue-700">
                    {formatTransactionHashTable({
                      str: selectedProcess?.objectDetections[0].tx_hash,
                      a: 8,
                      b: 5,
                    })}
                  </span>
                </p>
              </div> */}

              {selectedProcess.objectDetections.map((data, index) => (
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
              Không có video
            </div>
          )}
        </div>
      ),
    },
  ];
  return (
    <div className="rounded-lg p-2">
      <div className="mx-auto flex justify-center h-screen">
        <div
          className="w-full h-full overflow-auto shadow bg-white "
          id="journal-scroll"
        >
          {listActivity?.length > 0 && (
            <table className="w-full">
              {listActivity.map((activity, index) => (
                <tbody key={index}>
                  <tr
                    className="relative transform scale-100 text-xs lg:text-base py-1 border-b-2 border-gray-300 cursor-default bg-gray-200 bg-opacity-25"
                    onClick={() => {
                      handleOpenDetailDeleteProcess();
                      setSelectedProcess(activity);
                    }}
                  >
                    <td className="lg:pl-5 lg:pr-3 pl-2 whitespace-no-wrap">
                      <div className="text-gray-400">Today</div>
                      <div>07:45</div>
                    </td>
                    <td className="px-2 py-2 whitespace-no-wrap">
                      <div className="leading-5 text-black font-medium text-base lg:text-2xl">
                        {renderTypeProcess(activity.type)}
                      </div>
                      <div className="leading-5 text-gray-900 text-sm lg:text-lg">
                        {activity.name.length > 20
                          ? activity.name.slice(0, 20) + "..."
                          : activity.name}{" "}
                        {"    "}
                        <a className="text-blue-500 hover:underline">
                          {formatTransactionHashTable({
                            str: activity.tx,
                            a: 8,
                            b: 5,
                          })}
                        </a>
                      </div>
                      <div className="leading-2 text-blue-400 text-xs">
                        Nhấn vào để xem chi tiết
                      </div>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          )}
        </div>
      </div>
      <Dialog open={openDetailProcess} handler={handleOpenDetailDeleteProcess}>
        <DialogHeader>Chi tiết công việc</DialogHeader>

        <DialogBody className="h-[25rem] overflow-scroll">
          <Tabs className="tab" id="custom-animation" value="infor">
            <TabsHeader className="tab-header">
              {data.map(({ label, value }) => (
                <Tab key={value} value={value}>
                  {label}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody
              animate={{
                initial: { y: 250 },
                mount: { y: 0 },
                unmount: { y: 250 },
              }}
            >
              {data.map(({ value, desc }) => (
                <TabPanel key={value} value={value}>
                  {desc}
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        </DialogBody>
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
  );
};

export default ListActivityProcess;
