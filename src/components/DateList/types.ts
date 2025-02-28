export interface IDateList {
  state: {
    dates: Date[];
    selectedDate: Date;
  };

  actions: {
    prevWeek: () => void;
    nextWeek: () => void;
    handleSelectedDate: (date: Date) => void;
  };
}
