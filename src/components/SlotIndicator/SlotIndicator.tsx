import React from "react";
import { ISlotIndicator } from "./types";

const SlotIndicator = (props: ISlotIndicator) => {
  const { state } = props || {};
  const { indicatorBg = "#97CC55", indicatorText = "" } = state || {};
  return (
    <div className="flex items-center space-x-2">
      <span
        className={`w-6 h-3 rounded-full`}
        style={{ backgroundColor: indicatorBg }}
      ></span>
      <span className="text-sm text-gray-500">{indicatorText}</span>
    </div>
  );
};

export default SlotIndicator;
