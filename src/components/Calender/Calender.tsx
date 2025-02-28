import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { format } from "date-fns";

const Calender = (props) => {
  const { state, actions } = props || {};

  const { calendarRef, currentView, events } = state || {};
  const { updateDate } = actions || {};

  return (
    <FullCalendar
      ref={calendarRef}
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      initialView={currentView}
      selectable={true}
      nowIndicator={true}
      editable={true}
      selectMirror={true}
      eventColor="#E76943"
      headerToolbar={false}
      datesSet={updateDate}
      events={events}
      dayMaxEvents={true}
      dayHeaderContent={(arg) => {
        const isToday = new Date().getDate() === arg.date.getDate();
        return (
          <div className="flex flex-col items-center">
            <span className="text-gray-500 text-sm">
              {format(arg.date, "EEE")}
            </span>
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full ${
                isToday ? "bg-green-700 text-white" : "text-gray-900"
              }`}
            >
              {arg.date.getDate()}
            </div>
          </div>
        );
      }}
    />
  );
};

export default Calender;
