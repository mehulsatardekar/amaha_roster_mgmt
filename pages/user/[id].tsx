import Calender from "@/src/components/Calender/Calender";
import CalenderHeader from "@/src/components/CalenderHeader/CalenderHeader";
import useCalenderView from "@/src/containers/CalenderView/useCalenderView";
import { useFetchUsersSlotsAndEventsQuery } from "@/src/store/slices/apiSlice";
import { useRouter } from "next/router";
import React from "react";

const UserPage = () => {
  const router = useRouter();

  const {
    data: fetchUsersSlotsAndEvents,
    //isLoading: isSlotsLoading,
    //error: slotsError,
  } = useFetchUsersSlotsAndEventsQuery(undefined);

  const { id } = router.query;

  const { state: useCalenderState, actions } = useCalenderView({
    dates: fetchUsersSlotsAndEvents?.dates || [],
    userId: id,
  });

  const { calendarRef, currentView, currentDate, userSpecificEvents } =
    useCalenderState || {};
  const { handleNavigation, handleViewChange, updateDate } = actions || {};

  return (
    <div className="p-2 sm:ml-64">
      <div className="p-2 mt-16">
        <CalenderHeader
          state={{ currentDate, currentView }}
          actions={{ handleViewChange, handleNavigation }}
        />

        <Calender
          state={{
            calendarRef,
            currentView,
            events: userSpecificEvents,
          }}
          actions={{
            updateDate,
          }}
        />
      </div>
    </div>
  );
};

export default UserPage;
