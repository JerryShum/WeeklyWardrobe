import React from "react";

/*
NextWeekCloth: this component contains the layout for details on next week clothes
*/
const NextWeekCloth = ({
  name,
  imageurl,
  matchPercent,
  colour,
  size,
  material,
}) => {
  return (
    <div className="flex flex-col outline border-black rounded-xl overflow-hidden w-full ">
      <img
        src={imageurl}
        alt="pepesip"
        className="border-black border-b-2 object-cover h-4/6"
      />
      <div className="h-2/6 flex flex-col justify-center items-center">
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
