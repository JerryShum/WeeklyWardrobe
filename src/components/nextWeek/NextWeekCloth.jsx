import React from "react";

const NextWeekCloth = ({ name, imageurl, matchPercent , colour, size, material}) => {
  return (
    <div>
      <div className="flex flex-col outline border-black rounded-xl overflow-hidden">
        <img
          src={imageurl}
          alt="pepesip"
          className="border-black border-b-2 "
        />
        <p>Name: {name} </p>
        <p>Match Percentage: {matchPercent}</p>
        <p>Colour: {colour}</p>
        <p>Size: {size}</p>
        <p>Material: {material}</p>
      </div>
    </div>
  );
};

export default NextWeekCloth;
