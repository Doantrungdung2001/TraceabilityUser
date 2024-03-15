import dayjs from "dayjs";
import React, { useState } from "react";
import { generateDate, months } from "../../Utils/calendar";
import cn from "../../Utils/cn";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const Calendar = () => {
  const days = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(currentDate);
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-5 sm:w-3/4 mx-auto">
      <div className="w-full sm:w-96">
        <h1 className="font-semibold text-sm">
          Lịch trình ngày {selectDate.toDate().toDateString()}
        </h1>
        <p className="text-gray-400 text-xs">Chọn ngày tháng để xem hình ảnh</p>
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
  );
};

export default Calendar;
