import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import { format, isSameDay } from "date-fns";
import { IDateList } from "./types";

const DateList = (props: IDateList) => {
  const { state, actions } = props || {};

  const { dates, selectedDate } = state || {};
  const { prevWeek, nextWeek, handleSelectedDate } = actions || {};

  return (
    <div className="overflow-x-auto no-scrollbar mb-5 w-full overflow-hidden mx-auto">
      <div className="flex items-center space-x-2 w-3xs overflow-hidden">
        {/* Left Arrow */}
        <button
          onClick={prevWeek}
          className="p-1 rounded-full border border-gray-300 hover:bg-gray-100 sm:p-2 md:p-2 lg:p-2"
        >
          <ChevronLeft size={18} />
        </button>

        <div className="w-full flex gap-4 h-14">
          {dates.map((date) => (
            <div
              key={date.toISOString()}
              onClick={() => handleSelectedDate(date)}
              className={`flex flex-col items-center justify-center border-2 border-[#E0E0E0] w-full rounded-lg py-2 text-xs font-medium cursor-pointer 
                ${
                  isSameDay(selectedDate, date)
                    ? "bg-[#4E6137] text-white font-semibold"
                    : "bg-white text-black "
                }`}
            >
              <span>{format(date, "EEE")}</span>
              <span>{format(date, "d")}</span>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextWeek}
          className="p-1 rounded-full border border-gray-300 hover:bg-gray-100 sm:p-2 md:p-2 lg:p-2"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default DateList;
