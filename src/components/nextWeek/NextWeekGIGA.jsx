import React from "react";
import WeekSlider from "./WeekSlider";
import NextWeekGroup from "./NextWeekGroup";

function NextWeekComp() {
  return (
    <div className="mt-5">
      <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="flex items-center justify-center p-2 font-bold text-2xl underline">
          Next Week's Clothes
        </h1>
        <div className="flex flex-col items-center">
          <h3> Clothes Preference Tolerance</h3>
          <WeekSlider />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="font-semibold underline text-xl text-gray-600">
              Our Recommendations:
            </h2>
            <h3 className="text-md text-gray-600">
              These recommendations are based on the clothing styles that you
              currently enjoy!
            </h3>
          </div>

          <NextWeekGroup />
        </div>
      </div>
    </div>
  );
}

export default NextWeekComp;
