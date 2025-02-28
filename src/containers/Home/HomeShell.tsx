import React from "react";

const HomeShell = () => {
  return (
    <div className="p-2 sm:ml-64">
      <div className="p-2 mt-16">
      <div className="p-4">
      {/* Date Tabs */}
      <div className="flex space-x-2 mb-4">
        {Array(7)
          .fill(null)
          .map((_, index) => (
            <div
              key={index}
              className={`w-16 h-12 rounded-md flex flex-col items-center justify-center bg-gray-300 animate-pulse`}
            >
              <div className="w-8 h-4 bg-gray-400 rounded"></div>
              <div className="w-6 h-4 bg-gray-400 rounded mt-1"></div>
            </div>
          ))}
      </div>

      {/* Date Header */}
      <div className="h-6 w-2/3 bg-gray-300 rounded mb-4 animate-pulse"></div>

      {/* Slot Info */}
      <div className="h-4 w-1/2 bg-gray-300 rounded mb-6 animate-pulse"></div>

      {/* User Schedules */}
      {Array(3)
        .fill(null)
        .map((_, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md mb-6 flex "
          >
            {/* User Info */}
            <div className="flex flex-col items-center w-32 mr-4 ">
              <div className="w-16 h-16 bg-gray-300 rounded-full animate-pulse"></div>
              <div className="h-4 w-24 bg-gray-300 rounded mt-2 animate-pulse"></div>
              <div className="h-4 w-16 bg-gray-300 rounded mt-1 animate-pulse"></div>
            </div>

            {/* Time Slots */}
            <div className="flex flex-wrap h-18 gap-2 w-full">
              {Array(24)
                .fill(null)
                .map((_, i) => (
                  <div
                    key={i}
                    className="w-14 h-18 bg-gray-300 rounded animate-pulse"
                  ></div>
                ))}
            </div>
          </div>
        ))}
    </div>
      </div>
    </div>
  );
};

export default HomeShell;
