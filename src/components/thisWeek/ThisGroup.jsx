import React from "react";
import ThisWeekCloth from "./ThisWeekCloth";

function ThisGroup() {
  return (
    <div className="flex flex-col gap-5 pb-10 border-b-2 border-black border-dotted">
      <h1 className="flex items-center justify-center p-2 font-bold text-2xl underline">
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
