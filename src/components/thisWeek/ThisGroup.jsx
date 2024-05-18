import React from "react";
import ThisWeekCloth from "./ThisWeekCloth";

function ThisGroup() {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="flex items-center justify-center p-2 font-bold text-2xl ">
        This Week's Clothes
      </h1>

      <div className="flex gap-5">
        <ThisWeekCloth />
        <ThisWeekCloth />
        <ThisWeekCloth />
      </div>
    </div>
  );
}

export default ThisGroup;
