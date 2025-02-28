import { Availability } from "./UsersSlotsAndEvents";

type ClinicDetails = {
  id: number;
  name: string;
};

export type User = {
  name: string;
  provider_usertype: string;
  is_inhouse: boolean;
  id: number;
  image: string;
  clinic_details: ClinicDetails;
  availabilities: Availability[];
};

export type BookingSlots = {
  color: string;
  label: string;
};

export type HeadingDetails = {
  heading: string;
  subHeading: string;
};

export interface FetchUsersResponse {
  headingDetails: HeadingDetails;
  bookingSlotsInfo: BookingSlots[];
  users: User[];
}
