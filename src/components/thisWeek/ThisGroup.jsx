import React, { useEffect, useState } from "react";
import ThisWeekCloth from "./ThisWeekCloth";

function ThisGroup() {
  const [currentWeeksClothes, setCurrentWeeksClothes] = useState([]);
  const [clothings, setClothings] = useState([]);

  useEffect(() => {
    const fetchCurrentWeeksClothes = async () => {
      let url = `http://jeremymark.ca:3000/get_current_week_clothes?username=Jeremy`;
      const response = await fetch(url);
      const data = await response.json();
      let x = data.data;
      return x;
    };

    const fetchClothings = async (currentWeeksClothes) => {
      
      let url = `http://jeremymark.ca:3000/clothing?id=`;
      const response = await fetch(url);
    }

    const fetchAll = async () => {
      let currentWeeksClothes = await fetchCurrentWeeksClothes();
      setCurrentWeeksClothes(currentWeeksClothes);
    };

    fetchAll();
  }, []);

  return (
    <div className="flex flex-col gap-5 pb-10 border-b-2 border-black border-dotted">
      <h1 className="flex items-center justify-center p-2 font-bold text-2xl underline">
        This Week's Clothes
      </h1>

      <div className="flex gap-5">
        {currentWeeksClothes.map((item) => {
          return (
            <ThisWeekCloth
              key={item.clothingId}
              status={item.status}
              imageurl={item.imageurl}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ThisGroup;
