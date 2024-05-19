import React from "react";

const ThisWeekCloth = ({ name, status, imageurl, colour, size, material }) => {
  return (
    <div className="flex flex-col outline border-black rounded-xl h-full w-full overflow-hidden">
      <img src={imageurl} alt="pepesip" className="object-cover h-60" />
      <div className="flex flex-col justify-center items-center p-2">
        <span className="flex items-center justify-center underline   ">
          {"Name: " + name}
        </span>
        <span className="flex items-center justify-center underline ">
          {"Status: " + status}
        </span>
        {/* add colour */}
        <span className="flex items-center justify-center ">
          {"Colour: " + colour}
        </span>
        {/* add size */}
        <span className="lex items-center justify-center ">
          {"Size: " + size}
        </span>
        {/* add material */}
        <span className="flex items-center justify-center ">
          {"Material: " + material}
        </span>
      </div>
    </div>
  );
};

export default ThisWeekCloth;
