import { BookingSlots, HeadingDetails, User } from "@/src/types/UsersDetails";

export interface IHome {
  state: {
    headingDetails: HeadingDetails;
    bookingSlotsInfo: BookingSlots[];
    users: User[];
  };
}

export interface UseHomeState {
  dates: Date[];
  selectedDate: Date;
}

export interface UseHomeActions {
  prevWeek: () => void;
  nextWeek: () => void;
  handleSelectedDate: (date: Date) => void;
}
