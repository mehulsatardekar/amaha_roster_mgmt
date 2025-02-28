import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import SlotIndicator from "../SlotIndicator/SlotIndicator";

const CalenderHeader = (props) => {
  const { state, actions } = props || {};
  const { currentDate, currentView } = state || {};
  const { handleViewChange, handleNavigation } = actions || {};

  return (
    <div className="flex justify-between">
      <div className="flex gap-3 justify-center items-center mb-5">
        <button
          onClick={() => handleNavigation("prev")}
          className="flex items-center justify-center w-10 h-10 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-300"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleNavigation("next")}
          className="flex items-center justify-center w-10 h-10 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-300"
        >
          <ChevronRight />
        </button>

        <span className="date-display text-gray-600">{currentDate}</span>
      </div>

      <div>
        <div className="flex gap-4">
          <SlotIndicator
            state={{
              indicatorBg: "#757575",
              indicatorText: "Session Event",
            }}
          />

          <SlotIndicator
            state={{
              indicatorBg: "#4C4C4C",
              indicatorText: "Calendar Event",
            }}
          />

          <select
            onChange={handleViewChange}
            value={currentView}
            className="p-2 border rounded"
          >
            <option value="dayGridMonth">Month</option>
            <option value="timeGridWeek">Week</option>
            <option value="timeGridDay">Day</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default CalenderHeader;
