import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { generateDate, months } from "../../Utils/calendar";
import cn from "../../Utils/cn";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import {
  formatTransactionHashTable,
  formatDateTime,
} from "../../Utils/helpers";

const Calendar = ({ dataImage, dataWeather }) => {
  const days = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(currentDate);
  const [filterImages, setFilterImages] = useState([]);
  const [filterWeather, setFilterWeather] = useState([]);

  const [open, setOpen] = useState(true);
  console.log("open", open);
  const handleOpen = () => {
    setOpen(!open);
  };

  console.log("dataImage", dataImage);

  const handleFilter = () => {
    setFilterImages(
      dataImage.filter((item) => {
        console.log("item", new Date(item.capture_time).toLocaleDateString());
        // only return the items that match the date (in day, month, year)
        return (
          new Date(item.capture_time).toLocaleDateString() ===
          selectDate.toDate().toLocaleDateString()
        );
      })
    );
    setFilterWeather(
      dataWeather.filter((item) => {
        console.log("item", new Date(item.time).toLocaleDateString());
        // only return the items that match the date (in day, month, year)
        return (
          new Date(item.time).toLocaleDateString() ===
          selectDate.toDate().toLocaleDateString()
        );
      })
    );
    handleOpen();
  };
  console.log("selectDate out", selectDate);

  useEffect(() => {
    handleFilter();
    console.log("selectDate", selectDate);
  }, [selectDate]);

  return (
    <section>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-5 sm:w-3/4 mx-auto">
        <div className="w-full sm:w-96">
          <h1 className="font-semibold text-sm">
            Lịch trình ngày {selectDate.toDate().toDateString()}
          </h1>
          <p className="text-gray-400 text-xs">
            Chọn ngày tháng để xem hình ảnh
          </p>
        </div>
        <div className="w-full sm:w-96">
          <div className="flex justify-between items-center">
            <h1 className="select-none font-semibold text-sm">
              {months[today.month()]}, {today.year()}
            </h1>
            <div className="flex gap-5 items-center ">
              <GrFormPrevious
                className="w-4 h-4 cursor-pointer hover:scale-105 transition-all"
                onClick={() => {
                  setToday(today.month(today.month() - 1));
                }}
              />
              <h1
                className="cursor-pointer hover:scale-105 transition-all text-xs"
                onClick={() => {
                  setToday(currentDate);
                }}
              >
                Hôm nay
              </h1>
              <GrFormNext
                className="w-4 h-4 cursor-pointer hover:scale-105 transition-all"
                onClick={() => {
                  setToday(today.month(today.month() + 1));
                }}
              />
            </div>
          </div>
          <div className="grid grid-cols-7 ">
            {days.map((day, index) => {
              return (
                <h1
                  key={index}
                  className="text-xs text-center h-10 w-10 grid place-content-center text-gray-500 select-none"
                >
                  {day}
                </h1>
              );
            })}
          </div>

          <div className="grid grid-cols-7 ">
            {generateDate(today.month(), today.year()).map(
              ({ date, currentMonth, today }, index) => {
                return (
                  <div
                    key={index}
                    className="p-1 text-center h-10 w-10 grid place-content-center text-xs border-t"
                  >
                    <h1
                      className={cn(
                        currentMonth ? "" : "text-gray-400",
                        today ? "bg-red-600 text-white" : "",
                        selectDate.toDate().toDateString() ===
                          date.toDate().toDateString()
                          ? "bg-black text-white"
                          : "",
                        "h-6 w-6 rounded-full grid place-content-center hover:bg-black hover:text-white transition-all cursor-pointer select-none"
                      )}
                      onClick={() => {
                        console.log("date here", date.toDate().toDateString());
                        setSelectDate(date);
                      }}
                    >
                      {date.date()}
                    </h1>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Hình ảnh và thời tiết </DialogHeader>
        <DialogBody className="h-[28rem] lg:h-[35rem] overflow-y-auto">
          <div>
            <div className="max-w-screen-md text-xs">
              <h4 className="text-lg font-semibold  text-gray-800">Mã Hash</h4>
              <p className="text-blue-600 mb-4 lg:text-base">
                {" "}
                {filterImages && filterImages.length > 0
                  ? formatTransactionHashTable({
                      str: filterImages[0].tx_hash,
                      a: 8,
                      b: 5,
                    })
                  : "Không có dữ liệu"}{" "}
              </p>
              <p className="font-semibold text-gray-600 lg:text-base">
                {filterImages && filterImages.length > 0
                  ? filterImages[0].image_hash
                  : "Không có dữ liệu"}
              </p>
              <h4 className="text-lg font-semibold  text-gray-800">Hình ảnh</h4>
              <div>
                {filterImages.map((item, index) => {
                  return (
                    <div key={index} className="flex gap-5 items-center">
                      <div className="w-1/2">
                        <p className="text-gray-800">{item.capture_time}</p>
                      </div>
                      <div className="w-1/2">
                        <img
                          className="w-20 h-20 rounded-lg object-cover object-center"
                          src={item.image_url}
                          alt="gallery-photo"
                        />
                      </div>
                    </div>
                  );
                })}
                {!filterImages ||
                  (filterImages.length === 0 && (
                    <p className="lg:text-base">Không có dữ liệu</p>
                  ))}
              </div>
            </div>
          </div>
          <div className="mb-4 mt-2">
            <div className="max-w-screen-md text-xs">
              <h4 className="text-lg font-semibold text-gray-800">Thời tiết</h4>
              <div className="overflow-x-auto">
                {filterWeather && filterWeather.length > 0 ? (
                  <table className="min-w-full divide-y divide-gray-200 text-xs md:text-sm">
                    <thead>
                      <tr>
                        <th className="px-4 py-2 text-left font-medium text-black uppercase tracking-wider">
                          Thời gian
                        </th>
                        <th className="px-4 py-2 text-left font-medium text-black uppercase tracking-wider">
                          Mô tả
                        </th>
                        <th className="px-4 py-2 text-left font-medium text-black uppercase tracking-wider">
                          Nhiệt độ
                        </th>
                        <th className="px-4 py-2 text-left font-medium text-black uppercase tracking-wider">
                          Độ ẩm
                        </th>
                        <th className="px-4 py-2 text-left font-medium text-black uppercase tracking-wider">
                          Tốc độ gió
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {filterWeather.map((item, index) => (
                        <tr key={index}>
                          <td className="px-4 py-2 whitespace-nowrap text-gray-800">
                            {formatDateTime(item.time)}
                          </td>
                          <td className="px-4 py-2 whitespace-nowrap text-gray-800">
                            {item.description}
                          </td>
                          <td className="px-4 py-2 whitespace-nowrap text-gray-800">
                            {item.temp}°C
                          </td>
                          <td className="px-4 py-2 whitespace-nowrap text-gray-800">
                            {item.humidity}%
                          </td>
                          <td className="px-4 py-2 whitespace-nowrap text-gray-800">
                            {item.windSpeed}m/s
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <p>Không có dữ liệu</p>
                )}
              </div>
            </div>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Thoát</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </section>
  );
};

export default Calendar;
