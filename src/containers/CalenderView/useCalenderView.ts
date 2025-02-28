import { useEffect, useMemo, useRef, useState } from "react";

const useCalenderView = ({ dates, userId = null }) => {
  console.log({ userId });
  const calendarRef = useRef(null);
  const [currentView, setCurrentView] = useState("timeGridWeek");
  const [currentDate, setCurrentDate] = useState("");

  const allEvents = useMemo(
    () => dates.flatMap((user) => user.events) || [],
    [dates]
  );

  const userSpecificEvents = useMemo(() => {
    const userData =
      userId && dates.find((user) => user.userRefID === Number(userId));
    return userData ? userData.events : [];
  }, [dates, userId]);

  // Update displayed date when calendar changes
  const updateDate = () => {
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();
      setCurrentDate(calendarApi.view.title); // Gets the formatted date range
    }
  };

  // Handle view change
  const handleViewChange = (event) => {
    const newView = event.target.value;
    setCurrentView(newView);
    if (calendarRef.current) {
      calendarRef.current.getApi().changeView(newView);
      updateDate();
    }
  };

  // Handle navigation
  const handleNavigation = (action) => {
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();
      if (action === "prev") calendarApi.prev();
      if (action === "next") calendarApi.next();
      updateDate();
    }
  };

  useEffect(() => {
    setTimeout(updateDate, 0); // Ensures calendar is initialized before fetching title
  }, []);

  return {
    state: {
      calendarRef,
      currentView,
      currentDate,
      allEvents,
      userSpecificEvents,
    },
    actions: { handleNavigation, handleViewChange, updateDate },
  };
};

export default useCalenderView;
