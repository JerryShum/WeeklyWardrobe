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
      let clothings = [];
      for(let i = 0; i < currentWeeksClothes.length; i++) {
        let url = `http://jeremymark.ca:3000/clothing?id=${currentWeeksClothes[i].clothingId}`;
        const response = await fetch(url);
        const data = await response.json();
        let x = data.data;
        clothings.push(x);
      }
      return clothings;
    }

    const fetchAll = async () => {
      let currentWeeksClothes = await fetchCurrentWeeksClothes();
      let clothings = await fetchClothings(currentWeeksClothes);
      setCurrentWeeksClothes(currentWeeksClothes);
      setClothings(clothings);
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
              name={clothings.find(clothing => clothing.id === item.clothingId).name}
              imageurl={clothings.find(clothing => clothing.id === item.clothingId).imageurl}
              colour={clothings.find(clothing => clothing.id === item.clothingId).colour}
              size={clothings.find(clothing => clothing.id === item.clothingId).size}
              material={clothings.find(clothing => clothing.id === item.clothingId).material}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ThisGroup;
