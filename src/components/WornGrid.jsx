import React from "react";
import WornItem from "./WornItem";

function WornGrid() {
  return (
    <div className="w-full grid grid-cols-2 gap-y-14 gap-x-5">
      <WornItem />
      <WornItem />
      <WornItem />
      <WornItem />
    </div>
  );
}

export default WornGrid;
