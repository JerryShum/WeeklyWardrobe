import React from "react";

const ThisWeekCloth = ({ status, imageurl }) => {
  return (
    <div>
      <div className="flex flex-col outline border-black rounded-xl">
        <img
          src={imageurl}
          alt="pepesip"
          className="border-black border-b-2 "
        />
        <span className=" p-2 flex items-center justify-center underline">
          {"Status: " + status}
        </span>
      </div>
    </div>
  );
};

export default ThisWeekCloth;
