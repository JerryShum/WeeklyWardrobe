import React from "react";
import WornGrid from "../components/WornGrid";

function Worn() {
  return (
    <div className="flex flex-col overflow-hidden h-full w-full">
      <h1 className="flex items-center justify-center p-2 mb-2 font-bold text-5xl border-b-2 border-dashed border-black">
        History
      </h1>
      <div className=" mt-auto mb-auto h-auto overflow-scroll p-5">
        <WornGrid />
      </div>
    </div>
  );
}

export default Worn;
