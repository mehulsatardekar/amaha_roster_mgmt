import { BookingSlots, HeadingDetails, User } from "@/src/types/UsersDetails";
import type { NextApiRequest, NextApiResponse } from "next";

type UsersResponse = {
  users: User[];
  bookingSlotsInfo: BookingSlots[];
  headingDetails: HeadingDetails;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<UsersResponse>
) {
  res.status(200).json({
    headingDetails: {
      heading: "Showing full schedules for",
      subHeading: "Showing slots in the 8 am to 12 am window.",
    },
    bookingSlotsInfo: [
      {
        color: "#97CC55",
        label: "Online",
      },
      {
        color: "#E76943",
        label: "Offline",
      },
      {
        color: "#5AA9E8",
        label: "Online + Offline",
      },
      {
        color: "#355E80",
        label: "Online Booked",
      },
      {
        color: "#80490B",
        label: "Offline Booked",
      },
      {
        color: "#C73031",
        label: "Blocked",
      },
    ],
    users: [
      {
        name: "Dr. Aarushi Sharma",
        provider_usertype: "therapist",
        is_inhouse: true,
        id: 101,
        image: "https://randomuser.me/api/portraits/women/1.jpg",
        clinic_details: {
          id: 1,
          name: "Bandra Clinic",
        },
        availabilities: [
          {
            timeStamp: "2025-02-27",
            online_slots: [
              { slot: "08:00", reason: "boosss" },
              { slot: "08:15", reason: "hfhf" },
              { slot: "12:30", reason: "" },
            ],
            offline_slots: [
              { slot: "09:00", reason: "bd" },
              { slot: "13:15", reason: "dd" },
            ],
            both_slots: [
              { slot: "10:00", reason: "1" },
              { slot: "10:15", reason: "bs" },
            ],
            online_booked_slots: [{ slot: "08:30", reason: "ddddd" }],
            offline_booked_slots: [{ slot: "09:15", reason: "d" }],
            blocked_slots: [{ slot: "11:00", reason: "Unwell" }],
          },
          {
            timeStamp: "2025-02-28",
            online_slots: [
              { slot: "09:00", reason: "" },
              { slot: "09:15", reason: "" },
              { slot: "09:30", reason: "" },
            ],
            offline_slots: [
              { slot: "09:00", reason: "" },
              { slot: "09:15", reason: "" },
            ],
            both_slots: [
              { slot: "10:00", reason: "" },
              { slot: "10:15", reason: "" },
            ],
            online_booked_slots: [{ slot: "08:30", reason: "" }],
            offline_booked_slots: [{ slot: "09:15", reason: "" }],
            blocked_slots: [{ slot: "11:00", reason: "Unwell" }],
          },
        ],
      },
      {
        name: "Dr. Anjana Thattil",
        provider_usertype: "psychiatrist",
        is_inhouse: false,
        id: 102,
        image: "https://randomuser.me/api/portraits/women/2.jpg",
        clinic_details: {
          id: 2,
          name: "Andheri Clinic",
        },
        availabilities: [
          {
            timeStamp: "2025-02-27",
            online_slots: [
              { slot: "08:00", reason: "111" },
              { slot: "20:00", reason: "22" },
              { slot: "20:15", reason: "222" },
            ],
            offline_slots: [
              { slot: "09:00", reason: "" },
              { slot: "09:15", reason: "" },
            ],
            both_slots: [
              { slot: "10:00", reason: "" },
              { slot: "10:15", reason: "" },
            ],
            online_booked_slots: [{ slot: "08:30", reason: "" }],
            offline_booked_slots: [{ slot: "09:15", reason: "" }],
            blocked_slots: [{ slot: "11:00", reason: "Unwell" }],
          },
        ],
      },
    ],
  });
}
