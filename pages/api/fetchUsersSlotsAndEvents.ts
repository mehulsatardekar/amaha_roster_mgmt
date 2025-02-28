import { DateSlot } from "@/src/types/UsersSlotsAndEvents";
import type { NextApiRequest, NextApiResponse } from "next";

type SlotsResponse = {
  dates: DateSlot[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<SlotsResponse>
) {
  res.status(200).json({
    dates: [
      {
        userRefID: 101,
        events: [
          {
            title: "MDT Meeting",
            start: "2025-02-28T17:00:00",
            end: "2024-02-29T18:00:00",
            backgroundColor: "#665280",
            borderColor: "#FFFFFF",
          },
          {
            title: "#24217",
            start: "2025-02-28T00:00:00",
            end: "2025-02-28T01:00:00",
            backgroundColor: "#B26522",
            textColor: "#FFFFFF",
          },
          {
            title: "google calander",
            start: "2025-02-27T04:00:00",
            end: "2025-02-27T06:00:00",
            backgroundColor: "#B26522",
            textColor: "#FFFFFF",
          },
        ],
      },
      {
        userRefID: 102,
        events: [
          {
            title: "All Hands Meeting",
            start: "2025-02-28T05:00:00",
            end: "2024-02-29T05:30:00",
            backgroundColor: "#665280",
            borderColor: "#FFFFFF",
          },
          {
            title: "Amaha Group Bias To Action",
            start: "2025-02-28T06:00:00",
            end: "2025-02-28T07:00:00",
            backgroundColor: "#B26522",
            textColor: "#FFFFFF",
          },
        ],
      },
    ],
  });
}
