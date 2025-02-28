import React, { useEffect, useRef, useState } from "react";
import ProfileDetails from "../ProfileDetails/ProfileDetails";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SlotsPill from "../Slots/SlotsPill";
import { slotStatusColors } from "@/src/constants/colorsList";
import { format } from "date-fns";

const ProfileList = (props) => {
  const { timeSlots = [], user, selectedDate } = props || {};
  const { name = "", image, id } = user || {};

  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } =
          scrollContainerRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
      }
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      handleScroll(); // Initialize state on mount
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200; // Adjust the scroll amount as needed
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const getData = (eachSlotTime) => {
    const formattedSelectedDate = format(selectedDate, "yyyy-MM-dd");

    const userInfo = user.availabilities.find(
      (availList) => availList.timeStamp === formattedSelectedDate
    );

    if (!userInfo) return { status: "default", reason: "" };

    if (userInfo.blocked_slots.some((e) => e.slot === eachSlotTime))
      return {
        status: "blocked",
        reason:
          userInfo.blocked_slots.find((e) => e.slot === eachSlotTime)?.reason ||
          "",
      };

    if (userInfo.online_booked_slots.some((e) => e.slot === eachSlotTime))
      return {
        status: "onlineBooked",
        reason:
          userInfo.online_booked_slots.find((e) => e.slot === eachSlotTime)
            ?.reason || "",
      };

    if (userInfo.offline_booked_slots.some((e) => e.slot === eachSlotTime))
      return {
        status: "offlineBooked",
        reason:
          userInfo.offline_booked_slots.find((e) => e.slot === eachSlotTime)
            ?.reason || "",
      };

    if (userInfo.both_slots.some((e) => e.slot === eachSlotTime))
      return {
        status: "both",
        reason:
          userInfo.both_slots.find((e) => e.slot === eachSlotTime)?.reason ||
          "",
      };

    if (userInfo.online_slots.some((e) => e.slot === eachSlotTime))
      return {
        status: "online",
        reason:
          userInfo.online_slots.find((e) => e.slot === eachSlotTime)?.reason ||
          "",
      };

    if (userInfo.offline_slots.some((e) => e.slot === eachSlotTime))
      return {
        status: "offline",
        reason:
          userInfo.offline_slots.find((e) => e.slot === eachSlotTime)?.reason ||
          "",
      };

    return { status: "default", reason: "" };
  };

  return (
    <div className="p-6 flex justify-between w-full">
      <ProfileDetails profileUrl={image} name={name} userId={id} />

      <div className="flex w-[80%] border border-[#E0E0E0] rounded-lg items-center">
        {/* Left Scroll Button */}
        <div
          className={`flex items-center justify-center w-[50px] h-full cursor-pointer ${
            !canScrollLeft ? "opacity-50 pointer-events-none" : ""
          }`}
          onClick={() => scroll("left")}
        >
          <ChevronLeft size={18} />
        </div>

        <div
          ref={scrollContainerRef}
          className="border-r border-l border-[#E0E0E0] h-full overflow-auto no-scrollbar grid gap-2 w-full p-4 sm:overflow-auto lg:overflow-hidden"
          style={{
            gridTemplateRows: "repeat(4, auto)",
            gridTemplateColumns: `repeat(${Math.ceil(
              timeSlots.length / 4
            )}, 1fr)`,
            scrollBehavior: "smooth",
            whiteSpace: "nowrap",
          }}
        >
          {timeSlots.map((time, index) => {
            const { status, reason } = getData(time);
            const slotColor = slotStatusColors[status] || "#F7F7F7";

            return (
              <SlotsPill
                key={index}
                time={time}
                textColor={status === "default" ? "#4C4C4C" : "#FFFFFF"}
                slotColor={slotColor}
                reason={reason}
              />
            );
          })}
        </div>

        {/* Right Scroll Button */}
        <div
          className={`flex items-center justify-center w-[50px] h-full cursor-pointer ${
            !canScrollRight ? "opacity-50 pointer-events-none" : ""
          }`}
          onClick={() => scroll("right")}
        >
          <ChevronRight size={18} />
        </div>
      </div>
    </div>
  );
};

export default ProfileList;
