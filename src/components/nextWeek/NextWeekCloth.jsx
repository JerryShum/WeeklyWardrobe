import React from "react";

const NextWeekCloth = ({ imageURL }) => {
  return (
    <div>
      <div className="flex flex-col outline border-black rounded-xl overflow-hidden">
        <img
          src={
            "https://media.tenor.com/eW7OQiA0XGsAAAAe/peepo-sip.png" + imageURL
          }
          alt="pepesip"
          className="border-black border-b-2 "
        />
      </div>
    </div>
  );
};

export default NextWeekCloth;
