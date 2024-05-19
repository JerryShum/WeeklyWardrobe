import React from "react";

const ThisWeekCloth = ({ status, imageURL }) => {
  return (
    <div>
      <div className="flex flex-col outline border-black rounded-xl">
        <img
          src="https://media.tenor.com/eW7OQiA0XGsAAAAe/peepo-sip.png"
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
