import React from "react";
import NextWeekCloth from "./NextWeekCloth";

function ThisGroup() {
  return (
    <div className="flex gap-5">
      <NextWeekCloth />
      <NextWeekCloth />
      <NextWeekCloth />
    </div>
  );
}

export default ThisGroup;
