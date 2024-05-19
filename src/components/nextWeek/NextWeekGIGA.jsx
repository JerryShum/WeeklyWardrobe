import React, { useEffect, useState } from "react";
import WeekSlider from "./WeekSlider";
import NextWeekGroup from "./NextWeekGroup";

function NextWeekComp() {
  const [nextWeekClothes, setNextWeekClothes] = useState([]);

  useEffect(() => {
    const fetchNextWeekClothes = async () => {
      let url = `http://jeremymark.ca:3000/get_next_week_clothes?username=Jeremy`;
      const response = await fetch(url);
      const data = await response.json();
      let x = data.data;
      return x;
    };

    const fetchAll = async () => {
      let nextWeekClothes = await fetchNextWeekClothes();
      console.log(nextWeekClothes);
      setNextWeekClothes(nextWeekClothes);
    };

    fetchAll();
  }, []);

  return (
    <div className="mt-5">
      <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="flex items-center justify-center p-2 font-bold text-2xl underline">
          Next Week's Clothes
        </h1>
        <div className="flex flex-col items-center">
          <h3> Clothes Preference Tolerance</h3>
          <WeekSlider setNextWeekClothes={setNextWeekClothes} />
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

          <NextWeekGroup nextWeekClothes={nextWeekClothes} />
        </div>
      </div>
    </div>
  );
}

export default NextWeekComp;
