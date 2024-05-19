import React from "react";

const ThisWeekCloth = ({ name, status, imageurl, colour, size, material }) => {
  return (
    <div>
      <div className="flex flex-col outline border-black rounded-xl">
        <img
          src={imageurl}
          alt="pepesip"
          className="border-black border-b-2 "
        />
        <span className=" p-2 flex items-center justify-center underline">
          {"Name: " + name}
        </span>
        <span className=" p-2 flex items-center justify-center underline">
          {"Status: " + status}
        </span>
        {/* add colour */}
        <span className=" p-2 flex items-center justify-center">
          {"Colour: " + colour}
        </span>
        {/* add size */}
        <span className=" p-2 flex items-center justify-center">
          {"Size: " + size}
        </span>
        {/* add material */}
        <span className=" p-2 flex items-center justify-center">
          {"Material: " + material}
        </span>
      </div>
    </div>
  );
};

export default ThisWeekCloth;
