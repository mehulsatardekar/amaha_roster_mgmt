import DateList from "@/src/components/DateList/DateList";
import ProfileList from "@/src/components/ProfileList/ProfileList";
import SlotIndicator from "@/src/components/SlotIndicator/SlotIndicator";
import { generateTimeSlots } from "@/src/utils/getAllSlots";
import React from "react";
import { useHome } from "./useHome";
import { format } from "date-fns";
import { useSelector } from "react-redux";
import { RootState } from "@/src/store/store";
import NotFound from "@/src/components/NotFound/NotFound";
import { IHome } from "./types";

const timeSlots = generateTimeSlots();

const Home = (props: IHome) => {
  const {
    headingDetails,
    bookingSlotsInfo = [],
    users = [],
  } = props.state || {};
  const { heading = "", subHeading = "" } = headingDetails;

  const { state, actions } = useHome();
  const { dates, selectedDate } = state || {};
  const { prevWeek, nextWeek, handleSelectedDate } = actions || {};

  const { selectedProviders, service, type, center } = useSelector(
    (state: RootState) => state.filters
  );

  const filteredUsers = users?.filter((user) => {
    const matchesService =
      service === "All Service" || user.provider_usertype === service;
    const matchesType =
      type === "All types" ||
      (type === "inhouse" && user.is_inhouse) ||
      (type === "outsider" && !user.is_inhouse);
    const matchesCenter =
      center === "All Centres" || user.clinic_details?.name === center;
    // const matchesSearch =
    //   !searchQuery ||
    //   user.name.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesSelectedProviders =
      selectedProviders.length === 0 ||
      selectedProviders.some(
        (provider) => provider.toLowerCase() === user.name.toLowerCase()
      );

    return (
      matchesService && matchesType && matchesCenter && matchesSelectedProviders
      // matchesSearch
    );
  });

  return (
    <>
      <div className="p-2 sm:ml-64">
        <div className="p-2 mt-16">
          <DateList
            state={{ dates, selectedDate }}
            actions={{ prevWeek, nextWeek, handleSelectedDate }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
            <div className="p-4">
              <p className="text-lg font-semibold">
                {`${heading} ${format(selectedDate, "EEE, d MMM yyyy")}`}
              </p>
              <p className="text-gray-600 text-sm">{subHeading}</p>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {bookingSlotsInfo.map((bookingSlotInfo, index: number) => (
                  <SlotIndicator
                    key={index}
                    state={{
                      indicatorBg: bookingSlotInfo.color,
                      indicatorText: bookingSlotInfo.label,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {filteredUsers.length > 0 ? (
            filteredUsers.map((user, index) => (
              <ProfileList
                key={index}
                user={user}
                timeSlots={timeSlots}
                selectedDate={selectedDate}
              />
            ))
          ) : (
            <div className="flex justify-center items-center h-[50vh]">
              <NotFound />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
