import React from "react";
import CardIcon from "../svgs/CardIcon";

function LightFastPowerfulCard(props) {
  return (
    <div className="md:w-fit w-full">
      <CardIcon />
      <h4 className="md:my-[20px] my-[10px] text-[#091133] font-medium">Title Goes Here</h4>
      <p className="text-[#091133]">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor.
      </p>
    </div>
  );
}

export default LightFastPowerfulCard;
