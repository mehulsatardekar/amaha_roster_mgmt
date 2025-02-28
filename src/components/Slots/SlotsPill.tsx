import { Button, Tooltip } from "flowbite-react";
import React from "react";

const SlotsPill = (props) => {
  const { textColor = "#FFFFFF", slotColor='', time='', reason } = props || {};

  const SlotContent = (
    <Button
      className={`w-16 h-7 flex rounded-lg items-center cursor-pointer justify-center text-xs`}
      style={{ backgroundColor: slotColor, color: textColor }}
    >
      {time}
    </Button>
  );

  return reason ? (
    <Tooltip content={reason} className="custom-tooltip">
      {SlotContent}
    </Tooltip>
  ) : (
    <div>{SlotContent}</div>
  );
};

export default SlotsPill;
