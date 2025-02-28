import { useState } from "react";
import { addDays, subDays, startOfDay } from "date-fns";

export const useHome = () => {
  const today = startOfDay(new Date());
  const [startDate, setStartDate] = useState(today); // Track start date of the range
  const [selectedDate, setSelectedDate] = useState(today); // Track selected date

  // Generate the next 7 days from the current start date
  const generateWeek = (start: Date): Date[] => {
    return Array.from({ length: 7 }, (_, index) => addDays(start, index));
  };

  const dates = generateWeek(startDate);

  // Move forward 7 days
  const nextWeek = () => setStartDate((prev) => addDays(prev, 7));

  // Move backward 7 days
  const prevWeek = () => setStartDate((prev) => subDays(prev, 7));

  const handleSelectedDate = (date: Date): void => {
    setSelectedDate(date);
  };

  return {
    state: {
      dates,
      selectedDate,
    },
    actions: {
      prevWeek,
      nextWeek,
      handleSelectedDate,
    },
  };
};
